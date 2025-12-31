"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface CaseStudyContentProps {
    challenge: string
    solution: string
    approach: string
    results: string
    technologies: string[]
}

export function CaseStudyContent({ challenge, solution, approach, results, technologies }: CaseStudyContentProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            {/* Sidebar: Tech Stack */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-3 lg:sticky lg:top-32 h-fit space-y-8 order-2 lg:order-1"
            >
                <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-[#b10202] pl-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-16 order-1 lg:order-2">

                {/* Challenge & Solution Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">{challenge}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">{solution}</p>
                    </div>
                </motion.div>

                <div className="h-px bg-white/10 w-full"></div>

                {/* Approach */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
                    <p className="text-gray-400 leading-relaxed text-lg mb-8">
                        {approach}
                    </p>
                </motion.div>

                {/* Results */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="bg-[#b10202]/5 border border-[#b10202]/20 rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <CheckCircle2 className="text-[#b10202]" /> The Impact
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {results}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
