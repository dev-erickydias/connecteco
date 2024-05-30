import Image from "next/image";

export default function BannerImage({ src, alt, width, height, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
