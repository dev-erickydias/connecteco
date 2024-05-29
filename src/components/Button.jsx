"use client";

export function Button({ children, className, ...props }) {
  return (
    <button
      className=""
      
      {...props}
    >
      {children}
    </button>
  );
}