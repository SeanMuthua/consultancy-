"use client"

import { motion } from "framer-motion"
import { TrendingUp, Globe, Smartphone, Cpu, ArrowRight } from "lucide-react"

const services = [
    {
        icon: TrendingUp,
        title: "Business Planning",
        description: "Strategic business plans and data-driven roadmaps designed to secure market dominance and funding."
    },
    {
        icon: Globe,
        title: "Web Apps & Websites",
        description: "High-performance websites and progressive web apps featuring premium aesthetics and interactions."
    },
    {
        icon: Smartphone,
        title: "Application Dev",
        description: "Custom software solutions and mobile applications engineered for seamless performance on any device."
    },
    {
        icon: Cpu,
        title: "System Architecture",
        description: "Robust, scalable backend systems and infrastructure built to support complex enterprise needs."
    }
]

import Link from "next/link"

export function Services() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-tight">
                            Comprehensive solutions <span className="text-gray-500">designed for exponential growth.</span>
                        </h2>
                    </div>
                    <Link href="/services" className="text-sm text-white flex items-center gap-2 hover:text-red-500 transition-colors group">
                        View all services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/5 rounded-xl bg-white/5 hover:border-red-500/50 hover:bg-black/50 transition-all duration-300 group cursor-default"
                        >
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <service.icon size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{service.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
