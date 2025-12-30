"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const works = [
    {
        title: "Nova Banking App",
        category: "FinTech",
        description: "Redefining banking with secure, seamless biometric flows.",
        image: "bg-gradient-to-br from-blue-900 to-black" // Placeholder for image
    },
    {
        title: "Vitality AI",
        category: "Healthcare",
        description: "Predictive analytics engine for modern preventative medicine.",
        image: "bg-gradient-to-br from-teal-900 to-black" // Placeholder for image
    }
]

export function FeaturedWork() {
    return (
        <section id="work" className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
                    <div className="flex gap-2">
                        <Button size="icon" variant="outline" className="rounded-full border-white/10 text-white hover:bg-white/10">
                            <ArrowLeft size={16} />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full border-white/10 text-white hover:bg-white/10">
                            <ArrowRight size={16} />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl aspect-video border border-white/10"
                        >
                            {/* Image Placeholder */}
                            <div className={`absolute inset-0 ${work.image} transition-transform duration-500 group-hover:scale-105`}></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="mb-2 inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium text-gray-300">
                                    {work.category}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
                                <p className="text-gray-400 text-sm max-w-sm">
                                    {work.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
