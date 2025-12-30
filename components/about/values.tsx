"use client"

import { motion } from "framer-motion"
import { Target, Zap, ShieldCheck } from "lucide-react"

const values = [
    {
        icon: Target,
        title: "Precision",
        description: "Pixel-perfect execution. We don't believe in \"good enough.\" Every interaction is calculated for maximum impact."
    },
    {
        icon: Zap,
        title: "Speed",
        description: "Rapid deployment cycles. We optimize for performance, ensuring your users never wait."
    },
    {
        icon: ShieldCheck,
        title: "Security",
        description: "Fortress-level protection. We built resilient architectures that safeguard your data assets."
    }
]

export function Values() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The RedShift Standard</h2>
                    <p className="text-gray-400 max-w-2xl">Three pillars that define every line of code we write and every pixel we place.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#0A0A0A] border border-white/5 p-8 rounded-xl hover:border-red-900/50 transition-colors duration-300 group"
                        >
                            <div className="w-12 h-12 bg-red-950/20 border border-red-900/30 rounded-lg flex items-center justify-center text-[#E60000] mb-6 group-hover:bg-[#E60000] group-hover:text-white transition-colors duration-300">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
