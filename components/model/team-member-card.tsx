"use client"

import { motion } from "framer-motion"
import { Check, Cpu, Globe, Rocket, Shield, Star, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface TeamMemberCardProps {
    type: "senior" | "developer"
    name: string
    role: string
    image: string
    bio: string
    specializations: string[]
    availability?: string
    stats: {
        label: string
        value: string
    }[]
}

export function TeamMemberCard({
    type,
    name,
    role,
    image,
    bio,
    specializations,
    availability = "Limited Availability",
    stats
}: TeamMemberCardProps) {
    const isSenior = type === "senior"

    return (
        <div className={cn(
            "relative group rounded-2xl p-1",
            isSenior
                ? "bg-gradient-to-br from-red-900/40 via-black to-black"
                : "bg-gradient-to-br from-red-600/40 via-black to-black"
        )}>
            {/* Animated Border Glow */}
            <div className={cn(
                "absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500",
                isSenior
                    ? "bg-gradient-to-br from-red-900/20 via-transparent to-red-900/20"
                    : "bg-gradient-to-br from-red-500/20 via-transparent to-red-500/20 animate-pulse"
            )} />

            <div className="relative h-full bg-[#050505] rounded-xl p-6 md:p-8 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    {isSenior ? <Shield size={120} /> : <Rocket size={120} />}
                </div>

                {/* Header */}
                <div className="relative z-10 mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                        <div className={cn(
                            "px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border",
                            isSenior
                                ? "bg-red-950/30 border-red-900/50 text-red-500"
                                : "bg-red-500/10 border-red-500/30 text-red-400"
                        )}>
                            {isSenior ? "Track 1: Enterprise Architect" : "Track 2: Modern Web Specialist"}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500">
                            <span className={cn(
                                "w-2 h-2 rounded-full animate-pulse",
                                availability.toLowerCase().includes("limited") ? "bg-yellow-500" : "bg-green-500"
                            )} />
                            {availability}
                        </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{name}</h3>
                    <p className={cn(
                        "text-base sm:text-lg font-medium mb-4",
                        isSenior ? "text-red-700" : "text-red-500"
                    )}>{role}</p>

                    <p className="text-gray-400 leading-relaxed text-sm">
                        {bio}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className={cn(
                            "p-3 rounded-lg border",
                            isSenior
                                ? "bg-red-950/10 border-red-900/20"
                                : "bg-white/5 border-white/10"
                        )}>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Specialization */}
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Specialization</h4>
                    <div className="flex flex-wrap gap-2">
                        {specializations.map((spec, idx) => (
                            <span key={idx} className={cn(
                                "text-sm flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-colors",
                                isSenior
                                    ? "bg-[#1a0505] border-red-900/30 text-gray-300 hover:border-red-800"
                                    : "bg-[#111] border-white/10 text-gray-300 hover:border-red-500/30 hover:text-white"
                            )}>
                                {isSenior ? <Cpu size={14} className="text-red-800" /> : <Globe size={14} className="text-red-500" />}
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hover Reveal Overylay for Senior (Optional or Subtle) */}
                {isSenior && (
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50" />
                )}
            </div>
        </div>
    )
}
