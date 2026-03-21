import { motion } from 'framer-motion';

export default function CustomImage({
    src,
    alt,
    className = '',
    priority = false,
    animation = true,
    ...props
}) {
    const imageContent = (
        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
            loading={priority ? 'eager' : 'lazy'}
            {...props}
        />
    );

    if (!animation) {
        return imageContent;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {imageContent}
        </motion.div>
    );
}