"use client"

import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

interface MetricCardProps {
    title: string
    value: string | number
    icon: LucideIcon
    trend?: string
    color?: string
}

export function MetricCard({ title, value, icon: Icon, trend, color = "bg-[#b10202]" }: MetricCardProps) {
    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-lg ${color}/10 flex items-center justify-center text-${color.replace("bg-", "")} group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className={color === "bg-[#b10202]" ? "text-[#b10202]" : "text-white"} />
                </div>
                {trend && (
                    <span className="text-[10px] font-bold text-green-500 flex items-center gap-1 bg-green-500/10 px-1.5 py-0.5 rounded">
                        ↗ {trend}
                    </span>
                )}
            </div>

            <div>
                <p className="text-xs text-gray-500 mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-white">{value}</h3>
            </div>
        </div>
    )
}
