"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavbarItem } from "./NavBarItem";
import UseWindowWidth from "../UseWindowWidth";
import { ArrowRight } from "lucide-react";

const linksMenu = [
  { label: "Home", href: "/" },
  { label: "Sobre Nos", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export function Navbar({ onItemClick }) {
  const windowWidth = UseWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <nav className={isMobile ? "block w-full" : "flex items-center gap-6"}>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={
          isMobile ? "flex flex-col gap-1" : "flex items-center gap-6"
        }
      >
        {linksMenu.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <NavbarItem href={link.href} onClick={onItemClick}>
              {link.label}
            </NavbarItem>
          </motion.div>
        ))}

        {/* CTA Button */}
        <motion.li variants={itemVariants} className="mt-3 md:mt-0">
          <Link
            href="/faca-parte"
            onClick={onItemClick}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-eco-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-eco-600 hover:shadow-eco active:scale-95"
          >
            Faca Parte
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
}
