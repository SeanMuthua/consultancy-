"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Stats } from "@/components/about/stats"
import Link from "next/link"

export function AboutPreview() {
    return (
        <section id="explore" className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 mb-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <span className="text-[#E60000] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                                The Agency
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Architects of the <br />
                                <span className="text-gray-500">Digital Future</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                                RedShift Digital combines premium aesthetics with ruthless efficiency. We strip away the unessential to build systems that scale, brands that resonate, and products that perform.
                            </p>

                            <Link href="/about">
                                <Button className="bg-transparent border border-[#E60000] text-[#E60000] hover:bg-[#E60000] hover:text-white px-8 h-12">
                                    More About Us <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-md aspect-square bg-[#111] rounded-2xl border border-white/5 overflow-hidden group">
                            {/* Placeholder Image using Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="RedShift Team"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reuse Stats Component */}
            <Stats />
        </section>
    )
}
