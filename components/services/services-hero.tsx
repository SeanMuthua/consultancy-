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
                    initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: false }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Accelerate Your <br />
                    <span className="text-[#b10202]">Digital Transformation</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Premium consultancy for the digital age. We build strategic roadmaps, high-performance web apps, and enterprise systems designed for scale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        variant="outline"
                        onClick={() => document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" })}
                        className="border-white/10 text-white hover:bg-white/10 h-12 px-8"
                    >
                        Calculate Project Cost
                    </Button>
                    <Link href="/book-now">
                        <Button className="bg-[#b10202] hover:bg-red-700 text-white h-12 px-8 font-bold flex items-center gap-2">
                            Book Now <ArrowRight size={16} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
