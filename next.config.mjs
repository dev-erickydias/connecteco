/** @type {import('next').NextConfig} */

// ────────────────────────────────────────────────────────────────
// Security headers — defense in depth.
//
// CSP allows: same-origin + Vercel insights + Google Fonts +
// AdSense (Google publisher) + OpenStreetMap/Nominatim (reverse
// geocoding) + Supabase (database).
//
// Note: 'unsafe-inline' on script-src is needed for Next.js
// bootstrap; 'unsafe-eval' deferred. Migrate to nonce-middleware
// in v3.1 when revenue justifies the dev time.
// ────────────────────────────────────────────────────────────────

const ContentSecurityPolicy = [
  "default-src 'self'",
  // Scripts: same-origin + Next/Vercel + Google AdSense.
  // 'unsafe-eval' DROPPED in v3.2 — Next 14 App Router doesn't need
  // it in production; only legacy webpack chunk loaders did. Keeps
  // 'unsafe-inline' for Next bootstrap until middleware-nonce migration.
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.googletagservices.com https://tpc.googlesyndication.com",
  // Styles: same-origin + inline (Next.js + Tailwind JIT) + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts from Google + data URIs
  "font-src 'self' data: https://fonts.gstatic.com",
  // Images: same-origin + data + blob + explicit allowlist.
  // The `https:` wildcard was REMOVED in v3.2 — it neutralized the
  // domain-allowlist intent and opened image-tag exfil channels.
  "img-src 'self' data: blob: https://images.unsplash.com https://*.supabase.co https://avatars.githubusercontent.com https://*.googleusercontent.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com",
  // XHR/Fetch: same-origin + Supabase + Nominatim + AdSense
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://nominatim.openstreetmap.org https://api.github.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net",
  // AdSense iframes
  "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com",
  // Block plugin embeds
  "object-src 'none'",
  // Nobody can iframe us — matches X-Frame-Options: DENY below
  "frame-ancestors 'none'",
  // Form posts only same-origin
  "form-action 'self'",
  // Anchor base
  "base-uri 'self'",
  // Force HTTPS
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  // 1y HSTS preload-eligible
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: [
      'accelerometer=()',
      'autoplay=()',
      'browsing-topics=()',
      'camera=()',
      'cross-origin-isolated=()',
      'display-capture=()',
      'encrypted-media=()',
      'fullscreen=(self)',
      'geolocation=(self)', // SITE USES GEOLOCATION — needs self
      'gyroscope=()',
      'hid=()',
      'idle-detection=()',
      'interest-cohort=()',
      'magnetometer=()',
      'microphone=()',
      'midi=()',
      'payment=()',
      'picture-in-picture=()',
      'publickey-credentials-get=()',
      'screen-wake-lock=()',
      'serial=()',
      'sync-xhr=()',
      'usb=()',
      'web-share=(self)',
      'xr-spatial-tracking=()',
    ].join(', '),
  },
  // Note: COOP/CORP intentionally NOT same-origin here because
  // AdSense iframes need cross-origin isolation off
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
];

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Long-term caching for static assets
      {
        source: '/(.*).(woff2|woff|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
