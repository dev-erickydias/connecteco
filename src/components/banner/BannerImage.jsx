'use client'

export default function BannerImage({ src, alt, width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
  )
}
