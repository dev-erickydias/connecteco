'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ────────────────────────────────────────────────────────────────
// PlantOrb — animated 3D plant scene for the ConnectEco hero.
//
// Implementation per @atlas's recipe:
// - Trunk: CatmullRomCurve3 (jittered control points)
// - Branches: recursive growBranch() at depth ≤ 3
// - Tubes: TubeGeometry with setDrawRange() advancing on scroll
// - Leaves: InstancedMesh of small planes, scaled 0→1 per leaf
//   based on aBirthTime uniform (no shader chunks — uses scale on
//   per-instance matrix; cheaper, works without onBeforeCompile)
// - Pollen: Points with additive blending, drifting upward
// - Mouse parallax (desktop only)
// - Mobile-adaptive (fewer particles, lower DPR, paused offscreen)
//
// Lazy-loaded with `dynamic({ ssr: false })` so the WebGL bundle
// (~150KB gz) doesn't block the initial paint.
// ────────────────────────────────────────────────────────────────

const VERDE_VIVO = new THREE.Color('#3FD68C');
const VERDE_CLARO = new THREE.Color('#7BFFB1');
const DOURADO = new THREE.Color('#E8B86A');
const FOREST_DEEP = new THREE.Color('#0B1F17');

// Hoisted to module scope — was being allocated per-leaf-per-frame
// inside the loop (220 leaves × 60fps = 13.2k allocs/sec → GC stalls
// on low-end Android). Now reused across all frames for free.
const ROTATION_AXIS_Z = new THREE.Vector3(0, 0, 1);

export default function PlantOrb({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 ||
        window.matchMedia('(pointer: coarse)').matches);

    // Adaptive budget — keeps Lighthouse perf >85 even on low-end Androids
    const LEAF_COUNT = isMobile ? 90 : 220;
    const POLLEN_COUNT = isMobile ? 80 : 250;
    const PIXEL_RATIO_CAP = isMobile ? 1.25 : 2;

    // ── Scene + camera + renderer ─────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(FOREST_DEEP.getHex(), 6, 14);

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0.5, 5.5);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false,
      });
    } catch (err) {
      console.warn('[PlantOrb] WebGL unavailable:', err?.message);
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, PIXEL_RATIO_CAP));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Lighting (warm sunlight + cool forest sky) ────────────
    scene.add(new THREE.AmbientLight(0x224433, 0.4));
    const sunLight = new THREE.DirectionalLight(0xffd9a3, 0.85);
    sunLight.position.set(3, 5, 4);
    scene.add(sunLight);
    const skyLight = new THREE.HemisphereLight(0x88ddaa, 0x113322, 0.5);
    scene.add(skyLight);

    // ── Procedural plant generation ───────────────────────────
    // Seeded noise so the plant looks intentional, not random
    function seededNoise(x, seed = 1) {
      const v = Math.sin(x * 12.9898 + seed * 78.233) * 43758.5453;
      return v - Math.floor(v);
    }

    // Build a curve from a parent point + direction with some jitter
    function buildBranchCurve(start, direction, length, segments, seed) {
      const points = [start.clone()];
      const dir = direction.clone().normalize();
      for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const sway = (seededNoise(i, seed) - 0.5) * 0.18;
        const swayUp = (seededNoise(i, seed + 7) - 0.5) * 0.10;
        const p = start.clone().addScaledVector(dir, length * t);
        // Lateral wobble for organic feel
        p.x += sway * (1 - t * 0.5);
        p.z += swayUp;
        // Branches gently curve toward the light (positive y)
        p.y += 0.08 * Math.sin(t * Math.PI);
        points.push(p);
      }
      return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.4);
    }

    // Tube material — verde-vivo with subtle bright edge
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x2c6240,
      roughness: 0.85,
      metalness: 0,
    });
    const branchMat = new THREE.MeshStandardMaterial({
      color: 0x3a7a52,
      roughness: 0.8,
      metalness: 0,
    });

    const tubes = []; // {mesh, totalIndex, growStart, growEnd}
    const leafBirthTimes = []; // for instanced leaf scaling
    const leafBranchEnds = []; // tip point of each child branch (where leaves cluster)

    // Recursive growth — depth 0 is the trunk, ≤3 means small twigs
    function growBranch(start, direction, length, radius, depth, seed, growStart) {
      const segments = depth === 0 ? 12 : 6;
      const curve = buildBranchCurve(start, direction, length, segments, seed);

      const tubeGeo = new THREE.TubeGeometry(
        curve,
        depth === 0 ? 28 : 14,
        radius,
        depth === 0 ? 8 : 5,
        false,
      );
      const mat = depth === 0 ? trunkMat : branchMat;
      const mesh = new THREE.Mesh(tubeGeo, mat);
      // Hide initially — drawRange grows from 0 over time
      tubeGeo.setDrawRange(0, 0);
      const totalIndex = tubeGeo.index ? tubeGeo.index.count : 0;
      const growEnd = growStart + (depth === 0 ? 0.6 : 0.3);
      tubes.push({ mesh, totalIndex, growStart, growEnd });
      scene.add(mesh);

      // Spawn child branches at intermediate t-values
      if (depth < 2) {
        const childCount = depth === 0 ? 5 : 2;
        for (let i = 0; i < childCount; i++) {
          const t = 0.35 + (i / childCount) * 0.5 + seededNoise(i, seed + 11) * 0.06;
          const cp = curve.getPointAt(Math.min(t, 0.95));
          const tan = curve.getTangentAt(Math.min(t, 0.95));
          // Rotate tangent ±25-50° around an axis perpendicular to it
          const angle = (Math.PI / 6) + seededNoise(i, seed + 17) * (Math.PI / 4);
          const sign = i % 2 === 0 ? 1 : -1;
          const rotAxis = new THREE.Vector3(
            seededNoise(i, seed + 23) - 0.5,
            seededNoise(i, seed + 29) - 0.5,
            seededNoise(i, seed + 31) - 0.5,
          ).normalize();
          const childDir = tan.clone().applyAxisAngle(rotAxis, angle * sign);
          // Each level is shorter and thinner
          const childLength = length * (0.45 + seededNoise(i, seed + 37) * 0.20);
          const childRadius = radius * 0.55;
          const childGrowStart = growStart + (t * 0.4);
          growBranch(
            cp,
            childDir,
            childLength,
            childRadius,
            depth + 1,
            seed + 100 * (depth + 1) + i,
            childGrowStart,
          );
        }
      } else {
        // Leaf-bearing twig — record tip for leaf placement
        leafBranchEnds.push({
          point: curve.getPointAt(1).clone(),
          tangent: curve.getTangentAt(1).clone().normalize(),
          birthTime: growEnd,
        });
        // Also a few mid-branch leaves
        for (let i = 0; i < 3; i++) {
          const t = 0.5 + (i / 4) * 0.4;
          leafBranchEnds.push({
            point: curve.getPointAt(t).clone(),
            tangent: curve.getTangentAt(t).clone().normalize(),
            birthTime: growStart + (t * (growEnd - growStart)),
          });
        }
      }
    }

    // Kick off the trunk — straight up, tapering radius
    growBranch(
      new THREE.Vector3(0, -1.6, 0),
      new THREE.Vector3(0, 1, 0),
      3.2,
      0.06,
      0,
      1.0,
      0.0,
    );

    // ── Leaves (InstancedMesh of small planes, billboarded via lookAt camera each frame is too costly for mobile, so use random rotation per instance instead) ──
    const leafGeo = new THREE.PlaneGeometry(0.16, 0.22);
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x4ddc8a,
      roughness: 0.6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
    });
    const leaves = new THREE.InstancedMesh(leafGeo, leafMat, LEAF_COUNT);
    leaves.frustumCulled = false;

    const dummy = new THREE.Object3D();
    const leafColors = new Float32Array(LEAF_COUNT * 3);
    for (let i = 0; i < LEAF_COUNT; i++) {
      const target = leafBranchEnds[i % leafBranchEnds.length] || {
        point: new THREE.Vector3(0, 0, 0),
        tangent: new THREE.Vector3(0, 1, 0),
        birthTime: 0,
      };
      // Randomize position around the branch tip
      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.18,
        (Math.random() - 0.5) * 0.18,
        (Math.random() - 0.5) * 0.18,
      );
      dummy.position.copy(target.point).add(offset);
      dummy.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );
      // Start scale at 0 — will grow
      dummy.scale.set(0.001, 0.001, 0.001);
      dummy.updateMatrix();
      leaves.setMatrixAt(i, dummy.matrix);
      leafBirthTimes.push(target.birthTime);

      // Color variance: most verde-vivo, some verde-claro, few dourado (autumn touch)
      const r = Math.random();
      let c;
      if (r < 0.7) c = VERDE_VIVO;
      else if (r < 0.92) c = VERDE_CLARO;
      else c = DOURADO;
      leafColors[i * 3] = c.r;
      leafColors[i * 3 + 1] = c.g;
      leafColors[i * 3 + 2] = c.b;
    }
    // Apply per-instance color
    leaves.instanceColor = new THREE.InstancedBufferAttribute(leafColors, 3);
    leafMat.vertexColors = true;
    leaves.instanceMatrix.needsUpdate = true;
    scene.add(leaves);

    // ── Pollen particles — additive blending, slow upward drift ──
    const pollenPositions = new Float32Array(POLLEN_COUNT * 3);
    const pollenSeeds = new Float32Array(POLLEN_COUNT);
    const pollenSpeeds = new Float32Array(POLLEN_COUNT);
    for (let i = 0; i < POLLEN_COUNT; i++) {
      pollenPositions[i * 3] = (Math.random() - 0.5) * 6;
      pollenPositions[i * 3 + 1] = (Math.random() - 0.5) * 5 - 1;
      pollenPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      pollenSeeds[i] = Math.random() * 100;
      pollenSpeeds[i] = 0.08 + Math.random() * 0.15;
    }
    const pollenGeo = new THREE.BufferGeometry();
    pollenGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(pollenPositions, 3),
    );
    const pollenMat = new THREE.PointsMaterial({
      color: 0xffe9a3,
      size: 0.025,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const pollen = new THREE.Points(pollenGeo, pollenMat);
    scene.add(pollen);

    // ── Visibility + mouse parallax ──────────────────────────
    let inView = true;
    let contextLost = false;
    const visibilityObs =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              inView = entry.isIntersecting;
            },
            { threshold: 0 },
          )
        : null;
    if (visibilityObs) visibilityObs.observe(mount);

    let targetRotX = 0;
    let targetRotY = 0;
    function onMouse(e) {
      const rect = mount.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.4;
      targetRotX = ny * 0.25;
    }
    if (!isMobile) {
      window.addEventListener('mousemove', onMouse, { passive: true });
    }

    const onContextLost = (e) => {
      e.preventDefault();
      contextLost = true;
    };
    const onContextRestored = () => {
      contextLost = false;
    };
    renderer.domElement.addEventListener(
      'webglcontextlost',
      onContextLost,
      false,
    );
    renderer.domElement.addEventListener(
      'webglcontextrestored',
      onContextRestored,
      false,
    );

    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // ── Animation loop ────────────────────────────────────────
    const clock = new THREE.Clock();
    let elapsed = 0;
    let frameId;
    // Growth progresses over the first 4s, then loops the breeze
    const GROWTH_DURATION = 4.0;

    function tick() {
      if (!inView || contextLost) {
        // Drain the clock so re-entry doesn't dump multi-second dt
        // and fast-forward the growth animation in a single frame.
        clock.getDelta();
        frameId = requestAnimationFrame(tick);
        return;
      }
      const dt = clock.getDelta();
      elapsed += dt;
      const growthProgress = Math.min(1, elapsed / GROWTH_DURATION);

      // ─ Trunk + branches: setDrawRange to "draw" in over time ─
      tubes.forEach(({ mesh, totalIndex, growStart, growEnd }) => {
        const localProgress = Math.max(
          0,
          Math.min(1, (growthProgress - growStart) / (growEnd - growStart)),
        );
        mesh.geometry.setDrawRange(0, Math.floor(totalIndex * localProgress));
      });

      // ─ Leaves: scale up after their birth time ─
      for (let i = 0; i < LEAF_COUNT; i++) {
        const birth = leafBirthTimes[i];
        const leafProgress = Math.max(
          0,
          Math.min(1, (growthProgress - birth) / 0.25),
        );
        const scale = 0.0001 + leafProgress * (0.85 + Math.sin(elapsed * 0.6 + i * 0.2) * 0.05);
        leaves.getMatrixAt(i, dummy.matrix);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        dummy.scale.set(scale, scale, scale);
        // Subtle wind sway — rotate a tiny bit each frame
        dummy.rotateOnAxis(ROTATION_AXIS_Z, Math.sin(elapsed + i) * 0.0008);
        dummy.updateMatrix();
        leaves.setMatrixAt(i, dummy.matrix);
      }
      leaves.instanceMatrix.needsUpdate = true;

      // ─ Pollen drift (post-growth) ─
      if (growthProgress >= 1) {
        const posAttr = pollen.geometry.attributes.position;
        for (let i = 0; i < POLLEN_COUNT; i++) {
          posAttr.array[i * 3 + 1] += dt * pollenSpeeds[i];
          posAttr.array[i * 3] += Math.sin(elapsed + pollenSeeds[i]) * dt * 0.05;
          // Reset when too high
          if (posAttr.array[i * 3 + 1] > 4) {
            posAttr.array[i * 3 + 1] = -3;
            posAttr.array[i * 3] = (Math.random() - 0.5) * 6;
            posAttr.array[i * 3 + 2] = (Math.random() - 0.5) * 4;
          }
        }
        posAttr.needsUpdate = true;
      }

      // ─ Camera parallax (smooth lerp toward mouse target) ─
      camera.rotation.y += (targetRotY - camera.rotation.y) * 0.04;
      camera.rotation.x += (targetRotX - camera.rotation.x) * 0.04;

      renderer.render(scene, camera);
      if (!reduceMotion) frameId = requestAnimationFrame(tick);
    }

    if (reduceMotion) {
      // Render one final frame with everything fully grown
      elapsed = GROWTH_DURATION;
      tubes.forEach(({ mesh, totalIndex }) => {
        mesh.geometry.setDrawRange(0, totalIndex);
      });
      for (let i = 0; i < LEAF_COUNT; i++) {
        leaves.getMatrixAt(i, dummy.matrix);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        dummy.scale.set(0.85, 0.85, 0.85);
        dummy.updateMatrix();
        leaves.setMatrixAt(i, dummy.matrix);
      }
      leaves.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    } else {
      frameId = requestAnimationFrame(tick);
    }

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      if (!isMobile) window.removeEventListener('mousemove', onMouse);
      if (visibilityObs) visibilityObs.disconnect();
      ro.disconnect();
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      renderer.domElement.removeEventListener(
        'webglcontextrestored',
        onContextRestored,
      );
      tubes.forEach(({ mesh }) => {
        mesh.geometry.dispose();
      });
      trunkMat.dispose();
      branchMat.dispose();
      leafGeo.dispose();
      leafMat.dispose();
      pollenGeo.dispose();
      pollenMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
