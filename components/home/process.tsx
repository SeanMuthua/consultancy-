"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
    {
        icon: Search,
        title: "Discovery",
        description: "We deep dive into your business ecosystem to identify opportunities."
    },
    {
        icon: PenTool,
        title: "Blueprint",
        description: "Architecting the perfect solution via precise plans and designs."
    },
    {
        icon: Code2,
        title: "Execution",
        description: "Agile development cycles delivering robust, production-ready code."
    },
    {
        icon: Rocket,
        title: "Scale",
        description: "Continuous optimization and growth support post-launch."
    }
]

export function Process() {
    return (
        <section id="process" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4 block">How We Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        The Crimson Protocol
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-6 left-0 w-full h-px bg-white/10 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="relative bg-[#0F0F0F] md:bg-transparent pt-4"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/10 bg-[#0F0F0F] flex items-center justify-center text-white mb-6 relative z-10 mx-auto md:mx-0 group hover:border-red-500 transition-colors">
                                    <step.icon size={20} className="group-hover:text-red-500 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{step.title}</h3>
                                <p className="text-sm text-gray-400 text-center md:text-left">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
