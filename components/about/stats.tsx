"use client"

import { motion } from "framer-motion"

const stats = [
    { value: "40+", label: "Projects Completed" },
    { value: "15+", label: "Years Active" },
    { value: "99%", label: "Client Retention" },
    { value: "24/7", label: "Critical Support" },
]

export function Stats() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-5xl font-bold text-[#b10202] mb-2 font-mono tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
