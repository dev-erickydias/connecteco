import React from 'react';
import { motion } from 'framer-motion';

export default function CustomButton({
    children,
    onClick,
    className = '',
    style,
    variant = 'primary',
    size = 'md',
    ...props
}) {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantStyles = {
        primary: 'bg-gradient-to-r from-eco-500 to-agro-leaf text-white hover:shadow-lg focus:ring-eco-500',
        secondary: 'bg-white border-2 border-eco-500 text-eco-700 hover:bg-eco-50 focus:ring-eco-500',
        ghost: 'text-eco-700 hover:bg-eco-50 focus:ring-eco-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    };

    const sizeStyles = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={combinedClassName}
            style={style}
            {...props}
        >
            {children}
        </motion.button>
    );
}