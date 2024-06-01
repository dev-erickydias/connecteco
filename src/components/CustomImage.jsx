import Image from 'next/image';

export default function CustomImage({ src, alt,className, ...props }) {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            {...props}
        />
    );
}