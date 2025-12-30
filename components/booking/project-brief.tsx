"use client"

import { CloudUpload, Folder } from "lucide-react"

export function ProjectBrief() {
    return (
        <div className="rounded-2xl border border-white/5 bg-[#0e0e0e] p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-[#b10202]/20 flex items-center justify-center text-[#b10202]">
                    <Folder size={16} />
                </div>
                <h3 className="text-lg font-bold text-white">Project Brief & Assets</h3>
            </div>

            <div className="border-2 border-dashed border-white/10 rounded-xl bg-black/50 p-12 text-center group hover:border-[#b10202]/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors">
                    <CloudUpload size={24} />
                </div>
                <p className="text-white font-bold mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PDF, DOCX, or PPTX (Max 15MB)</p>
            </div>
        </div>
    )
}
