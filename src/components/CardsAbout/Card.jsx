import React from 'react';
import Link from 'next/link';
import { HoverCard } from '../ui/AnimatedBlock';

export default function Card({ nome, descricao, descricaoDois, cargo, src, alt, linkedin, gitHub }) {
    if (!descricao) {
        return null;
    }

    return (
        <HoverCard className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg backdrop-blur-md bg-opacity-90">
            <div className="mb-4 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-eco-500 shadow-lg">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {cargo && (
                <h2 className="text-sm font-semibold text-eco-500 uppercase tracking-widest mb-2">
                    {cargo}
                </h2>
            )}

            <h4 className="text-xl font-bold text-eco-700 mb-4">
                {nome}
            </h4>

            <div className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3 hover:line-clamp-none">
                {descricao && <p className="mb-2">{descricao}</p>}
                {descricaoDois && <p>{descricaoDois}</p>}
            </div>

            <div className="flex gap-3 mt-auto">
                {linkedin && (
                    <Link
                        href={linkedin}
                        target="_blank"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                    >
                        LinkedIn
                    </Link>
                )}
                {gitHub && (
                    <Link
                        href={gitHub}
                        target="_blank"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors text-sm"
                    >
                        GitHub
                    </Link>
                )}
            </div>
        </HoverCard>
    );
}