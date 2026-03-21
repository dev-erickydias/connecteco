"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function NavbarItem({ children, href, onClick, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="list-none">
      <Link
        href={href}
        onClick={onClick}
        {...props}
        className={`relative block px-2 py-2 text-sm font-medium transition-colors duration-200 md:px-0 md:py-3 ${
          isActive ? "text-eco-700" : "text-gray-700 hover:text-eco-600"
        }`}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute -bottom-3 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-eco-500 to-eco-600 md:bottom-0"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </li>
  );
}
 