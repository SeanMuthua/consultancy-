"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/work/project-card"
import { ArrowRight } from "lucide-react"

import { projects } from "@/lib/data"

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-4xl mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#b10202] font-mono text-sm uppercase tracking-widest mb-4 block"
                    >
                        Selected Work
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Engineering digital <br />
                        <span className="text-gray-500">masterpieces.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl leading-relaxed"
                    >
                        Explore how we've helped global brands and ambitious startups solve complex technical challenges.
                    </motion.p>
                </div>

                {/* Projects List */}
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} index={index} {...project} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 p-12 bg-[#0e0e0e] border border-white/5 rounded-3xl text-center relative overflow-hidden group">
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#b10202]/10 blur-[100px] rounded-full group-hover:bg-[#b10202]/20 transition-colors duration-500"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a project in mind?</h2>
                        <button className="bg-[#b10202] hover:bg-[#8f0202] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 mx-auto transition-all shadow-[0_0_20px_rgba(177,2,2,0.3)] hover:shadow-[0_0_40px_rgba(177,2,2,0.5)]">
                            Let's Build It Together <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
