"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
    slug: string
    title: string
    category: string
    description: string
    challenge: string
    solution: string
    image: string
    scope: string[]
    index: number
}

export function ProjectCard({ slug, title, category, description, challenge, solution, image, scope, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 last:mb-0 items-center"
        >
            {/* Image Side */}
            <div className={`relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`absolute inset-0 ${image} transition-transform duration-700 group-hover:scale-105`}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Side */}
            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">{description}</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-sm font-bold text-[#b10202] uppercase tracking-widest mb-2">The Challenge</h3>
                        <p className="text-gray-300 leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-[#b10202] uppercase tracking-widest mb-2">The Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{solution}</p>
                    </div>
                </div>

                {/* Scope List */}
                <div className="p-6 bg-[#0e0e0e] border border-white/5 rounded-xl">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b10202]"></span> Scope of Work
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {scope.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                <CheckCircle2 size={14} className="text-gray-600" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <Link href={`/work/${slug}`} className="flex items-center gap-2 text-white font-bold group/btn hover:text-[#b10202] transition-colors inline-block text-left">
                    View Case Study <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    )
}
