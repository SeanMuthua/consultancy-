"use client"

import { motion } from "framer-motion"

export function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 px-4 md:px-6 bg-[#0A0A0A] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: false }}
                >
                    <span className="text-[#b10202] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                        The Agency
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Who We Are
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed"
                >
                    Crimson Forge Digital is not just a consultancy. We are the architects of the next digital era. Combining premium aesthetics with ruthless efficiency, we build systems that scale.
                </motion.p>
            </div>
        </section>
    )
}
