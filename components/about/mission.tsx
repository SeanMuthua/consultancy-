"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Mission3D } from "@/components/about/mission-3d"

export function Mission() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">

                    {/* Text Content */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-[#E60000]">
                                <MapPin size={20} fill="currentColor" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We believe that software should be as beautiful as it is functional. In a world of digital noise, clarity is power. Our mission is to strip away the unessential and amplify the impact of your digital presence through precision engineering and elite design.
                        </p>

                        <div className="flex gap-4">
                            {["Strategy", "Design", "Development"].map((tag) => (
                                <span key={tag} className="px-4 py-2 rounded-full border border-red-900/30 bg-red-950/20 text-[#E60000] text-xs font-bold uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 3D Visual */}
                    <div className="relative h-[400px] w-full flex items-center justify-center">
                        {/* Gradient glow behind sphere */}
                        <div className="absolute inset-0 bg-radial-gradient from-red-600/10 to-transparent blur-2xl"></div>
                        <Mission3D />
                    </div>

                </div>
            </div>
        </section>
    )
}
