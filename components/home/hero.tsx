"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ParticleBackground } from "@/components/ui/particle-background"
import { TypewriterText } from "@/components/ui/typewriter-text"
import { Hero3D } from "@/components/ui/hero-3d"

export function Hero() {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const y = useTransform(scrollY, [0, 300], [0, 100])

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* 1. Particle Background (R3F) */}
            <ParticleBackground />

            {/* 2. 3D Morphing Shapes (R3F) */}
            <Hero3D />

            {/* Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] z-1 pointer-events-none"></div>

            {/* Red Glow Pillars (Enhanced) */}
            <div className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-red-600/50 to-transparent blur-[1px] opacity-50"></div>
            <div className="absolute right-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-red-600/50 to-transparent blur-[1px] opacity-50"></div>

            {/* Content */}
            <motion.div
                style={{ opacity, y }}
                className="relative z-10 text-center container mx-auto px-4 flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                {/* Status Badge */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-950/10 px-5 py-2 text-xs uppercase tracking-widest text-red-500 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Accepting New Ventures
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    viewport={{ once: false }}
                    className="text-6xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tight text-white mb-8 leading-[0.95]"
                >
                    Accelerating <br />
                    Digital <span className="text-gray-600">Velocity</span>
                </motion.h1>

                {/* Typewriter Subtitle */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-12 flex items-center justify-center gap-2"
                >
                    <span>We specialize in</span>
                    <span className="text-red-500 font-bold">
                        <TypewriterText texts={["Business Plans", "Web Applications", "System Architecture"]} delay={2500} />
                    </span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Button
                        size="lg"
                        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#b10202] hover:bg-red-700 text-white min-w-[220px] h-16 text-lg font-bold shadow-[0_0_40px_rgba(177,2,2,0.4)] hover:shadow-[0_0_60px_rgba(177,2,2,0.6)] transition-all duration-300 border border-red-500/50"
                    >
                        View Our Services <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                onClick={() => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" })}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] text-gray-500 uppercase tracking-[0.2em] group cursor-pointer z-50 hover:text-white transition-colors"
            >
                <span className="group-hover:tracking-[0.3em] transition-all duration-300">Explore</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-red-600 via-red-900 to-transparent group-hover:h-20 transition-all duration-300"></div>
            </motion.button>
        </section>
    )
}
