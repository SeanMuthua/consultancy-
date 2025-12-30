"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface CaseStudyHeroProps {
    title: string
    category: string
    client: string
    year: string
    description: string
    stats: { label: string; value: string }[]
}

export function CaseStudyHero({ title, category, client, year, description, stats }: CaseStudyHeroProps) {
    return (
        <section className="relative pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <Link href="/work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Work
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4 text-sm font-mono uppercase tracking-widest text-[#b10202] mb-4"
                        >
                            <span>{client}</span>
                            <span>//</span>
                            <span>{year}</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                        >
                            {title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold border border-white/5">
                                {category}
                            </span>
                        </motion.div>
                    </div>
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-300 leading-relaxed font-light"
                        >
                            {description}
                        </motion.p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                        >
                            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
