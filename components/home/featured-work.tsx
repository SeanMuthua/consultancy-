"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { projects } from "@/lib/data"
import Link from "next/link"

export function FeaturedWork() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0) // 1 for right, -1 for left

    const nextProject = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)"
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)"
        })
    }

    return (
        <section id="work" className="py-24 bg-black border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Portfolio Showcase</h2>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">Engineering Excellence // {projects.length} Total Projects</p>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={prevProject}
                            className="rounded-full border-white/10 text-white hover:bg-white/10 w-12 h-12"
                        >
                            <ArrowLeft size={20} />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={nextProject}
                            className="rounded-full border-white/10 text-white hover:bg-white/10 w-12 h-12"
                        >
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>

                <div className="relative h-[400px] md:h-[500px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.5 },
                                filter: { duration: 0.5 }
                            }}
                            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                        >
                            {/* Visual Side */}
                            <div className="lg:col-span-7 h-full">
                                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/5 group shadow-2xl shadow-red-950/20">
                                    <div className={`absolute inset-0 ${projects[currentIndex].image} opacity-60 transition-transform duration-700 group-hover:scale-110`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                    {/* Project Meta overlay */}
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        {projects[currentIndex].scope.slice(0, 2).map((s) => (
                                            <span key={s} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-[#b10202] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                                        {projects[currentIndex].category}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                        {projects[currentIndex].title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {projects[currentIndex].description}
                                    </p>

                                    <div className="flex flex-wrap gap-8 mb-10 border-l border-white/10 pl-6">
                                        {projects[currentIndex].stats.slice(0, 2).map((stat) => (
                                            <div key={stat.label}>
                                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/work/${projects[currentIndex].slug}`}>
                                        <Button className="group bg-[#b10202] hover:bg-red-700 text-white h-14 px-8 text-base font-bold shadow-[0_0_20px_rgba(177,2,2,0.3)] transition-all duration-300">
                                            View project <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
