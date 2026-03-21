"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Location } from "./Location";
import { Logo } from "./Logo";
import { Navbar } from "./NavBar";
import UseWindowWidth from "../UseWindowWidth";
import Link from "next/link";
import { Leaf } from "lucide-react";

export function Header() {
  const windowWidth = UseWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-eco border-b border-eco-100/50"
          : "bg-white/80 backdrop-blur-md border-b border-eco-100/20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="relative">
              <Leaf
                size={28}
                className="text-eco-500 transition-transform duration-500 group-hover:rotate-12"
              />
            </div>
            <span className="font-display text-xl font-bold text-eco-800 tracking-tight">
              Connect<span className="text-eco-500">Eco</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Navbar onItemClick={() => setIsOpen(false)} />
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-2 md:gap-4">
            {windowWidth > 530 && <Location />}

            {/* Mobile menu button */}
            {windowWidth < 768 && (
              <motion.button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-eco-700 hover:bg-eco-50 focus:outline-none transition-colors"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && windowWidth < 768 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-eco-100/30"
            >
              <div className="px-2 py-4 bg-white/95 backdrop-blur-xl rounded-b-2xl">
                <Navbar onItemClick={() => setIsOpen(false)} />
                {windowWidth < 530 && (
                  <div className="mt-4 border-t border-eco-100/30 pt-4">
                    <Location />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
