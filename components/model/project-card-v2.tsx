"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BarChart3, Layers, User, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardV2Props {
    title: string
    category: string
    description: string
    image: string
    lead: "steve" | "you" | "both"
    metrics: {
        label: string
        value: string
    }[]
    stack: string[]
}

export function ProjectCardV2({
    title,
    category,
    description,
    image,
    lead,
    metrics,
    stack
}: ProjectCardV2Props) {

    const getLeadInfo = () => {
        switch (lead) {
            case "steve":
                return { label: "Led by Steve", icon: User, color: "text-red-800", bg: "bg-red-950/30", border: "border-red-900/50" }
            case "both":
                return { label: "Collaborative Track", icon: Users, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" }
            default:
                return { label: "Led by Web Specialist", icon: User, color: "text-gray-400", bg: "bg-white/5", border: "border-white/10" }
        }
    }

    const leadInfo = getLeadInfo()

    return (
        <motion.div
            className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500"
            whileHover={{ y: -5 }}
        >
            {/* Image Placeholder area */}
            <div className="h-48 bg-gradient-to-b from-[#111] to-[#0A0A0A] relative overflow-hidden">
                <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 z-10">
                    <div className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md",
                        leadInfo.bg, leadInfo.color, leadInfo.border
                    )}>
                        <leadInfo.icon size={12} />
                        {leadInfo.label}
                    </div>
                </div>

                {/* Tech Stack Overlay on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur top-auto ease-out">
                    <div className="flex gap-2 flex-wrap">
                        {stack.map((tech, i) => (
                            <span key={i} className="text-[10px] uppercase font-mono text-gray-400 px-2 py-1 rounded bg-white/5 border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="text-red-500 text-xs font-bold uppercase tracking-widest mb-1">{category}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{title}</h3>
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-red-500 transition-colors" />
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {metrics.map((metric, i) => (
                        <div key={i}>
                            <div className="text-lg font-bold text-white mb-0.5">{metric.value}</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
