'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

export default function BannerTexts({ title, description, btn }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-20 max-w-2xl"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5">
        <Leaf size={16} className="text-eco-300" />
        <span className="text-eco-200 text-sm font-medium tracking-wider uppercase">
          ConnectEco
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
      >
        {title}
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-eco-100/80 mb-8 leading-relaxed max-w-xl"
      >
        {description}
      </motion.p>

      {/* CTA Button */}
      {btn && (
        <motion.div variants={itemVariants}>
          <Link href="/faca-parte">
            <button className="group px-8 py-3.5 bg-white text-eco-700 font-bold rounded-xl shadow-eco-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
              Faca Parte
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}
