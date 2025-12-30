"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import Link from "next/link"

export function ServicesHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Accelerate Your <br />
                    <span className="text-red-500">Digital Transformation</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Premium consultancy for the digital age. We build strategic roadmaps, high-performance web apps, and enterprise systems designed for scale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 h-12 px-8">
                        Calculate Project Cost
                    </Button>
                    <Link href="/booking">
                        <Button className="bg-red-600 hover:bg-red-700 text-white h-12 px-8 font-bold flex items-center gap-2">
                            Book Now <ArrowRight size={16} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
