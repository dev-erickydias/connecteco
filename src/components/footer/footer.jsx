"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AdBanner } from "../ads/GoogleAd";
import { Github, Mail, Leaf, Heart, ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/connecteco",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:contato@connecteco.com.br",
    label: "Email",
  },
];

const footerLinks = {
  about: [
    { label: "Sobre Nos", href: "/about" },
    { label: "Nossa Missao", href: "/about#mission" },
    { label: "Equipe", href: "/about#team" },
  ],
  links: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Faca Parte", href: "/faca-parte" },
  ],
  legal: [
    { label: "Politica de Privacidade", href: "/privacy-policy" },
    { label: "Termos de Servico", href: "/terms" },
    { label: "Contato", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 gradient-footer text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-eco-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-moss-500/10 rounded-full blur-3xl" />
      </div>

      {/* Ad Banner */}
      <div className="border-b border-white/10 relative">
        <AdBanner position="bottom" />
      </div>

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        {/* Top Section */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Leaf size={24} className="text-eco-300" />
              <span className="font-display text-xl font-bold tracking-tight">
                Connect<span className="text-eco-300">Eco</span>
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Sustentabilidade e reciclagem no Brasil, conectando pessoas com
              ecopontos e praticas sustentaveis.
            </p>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-eco-300">
              Sobre
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/60 transition-colors hover:text-white flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-eco-300">
              Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/60 transition-colors hover:text-white flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-eco-300">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/60 transition-colors hover:text-white flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-center text-sm text-white/50 sm:text-left">
            &copy; {currentYear} ConnectEco. Feito com{" "}
            <Heart size={14} className="text-red-400 fill-red-400" /> para o
            planeta.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center rounded-xl bg-white/8 p-2.5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
