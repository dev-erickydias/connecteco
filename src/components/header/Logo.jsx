import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Logo Connect Eco"
      width={144}
      height={45}
      className="object-contain"
    />
  );
}
