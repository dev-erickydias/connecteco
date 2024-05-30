import Image from 'next/image';

export default function CustomImage({ src, alt, width, height, ...props }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...props}
        />
    );
}