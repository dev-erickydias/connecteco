'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverCard } from "../ui/AnimatedBlock";

export default function PostBlog({ title, content, large, link, src, alt }) {
    return (
        <HoverCard className={`flex flex-col overflow-hidden rounded-xl shadow-lg h-full ${large ? 'md:row' : ''}`}>
            <div className={`relative overflow-hidden bg-gradient-to-br from-eco-200 to-eco-100 ${large ? 'md:w-1/2' : 'w-full'} h-48 md:h-64`}>
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eco-700/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className={`flex flex-col flex-grow p-6 bg-white ${large ? 'md:w-1/2' : 'w-full'}`}>
                <h2 className="text-lg md:text-xl font-bold text-eco-700 mb-3 line-clamp-2 hover:line-clamp-none">
                    {title}
                </h2>

                {large && (
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3 hover:line-clamp-none flex-grow">
                        {content}
                    </p>
                )}

                <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link
                        href={link}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 mt-auto w-full bg-gradient-to-r from-eco-500 to-agro-leaf text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                        Visualizar
                        <span>📖</span>
                    </Link>
                </motion.div>
            </div>
        </HoverCard>
    );
}
