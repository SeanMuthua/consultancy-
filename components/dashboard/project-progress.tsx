"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectProgress() {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-950/30 text-red-500 border border-red-900/50 text-[10px] uppercase font-bold px-2 py-1 rounded">In Progress</span>
                        <span className="text-gray-500 text-xs font-mono">#RD-2023-884</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Project: Alpha Redesign</h1>
                    <p className="text-gray-400 max-w-2xl">Global website overhaul for Alpha Corp focusing on improved UX and conversion funnel optimization.</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">Due Date</p>
                        <p className="text-lg font-bold text-white">Oct 24, 2024</p>
                    </div>
                    <Button variant="outline" className="border-white/10 bg-[#1a1a1a] text-gray-300 hover:text-white hover:bg-[#252525]">
                        <Calendar size={16} className="mr-2" /> Book Review Meeting
                    </Button>
                </div>
            </div>

            {/* Big Progress Bar */}
            <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h3 className="text-sm font-bold text-white mb-1">Overall Completion</h3>
                        <p className="text-xs text-gray-500">Project is currently on track for Phase 2 delivery.</p>
                    </div>
                    <span className="text-3xl font-bold text-[#b10202]">65%</span>
                </div>

                <div className="h-4 bg-gray-800 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#b10202] w-[65%] rounded-full shadow-[0_0_20px_rgba(177,2,2,0.5)]"></div>
                </div>
            </div>
        </div>
    )
}
