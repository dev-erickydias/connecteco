
import React from 'react';

export default function CustomButton({ children, onClick, className, style, ...props }) {
    return (
        <button
            onClick={onClick}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}