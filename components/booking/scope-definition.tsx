"use client"

import { Sparkles, BrainCircuit, Check } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

const recommendations = [
    { id: "strategy", label: "Strategy Session", icon: Sparkles },
    { id: "audit", label: "UX Audit", icon: Check, active: true },
    { id: "redesign", label: "Full Redesign", icon: Sparkles },
]

// Simple Texture wrapper for standard Textarea
function TextureTextarea(props: any) {
    return (
        <textarea
            {...props}
            className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-black/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10202] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-300 resize-none font-sans"
        />
    )
}

export function ScopeDefinition() {
    return (
        <div className="rounded-2xl border border-white/5 bg-[#0e0e0e] p-6 mb-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-[#b10202]/20 flex items-center justify-center text-[#b10202]">
                    <Sparkles size={16} />
                </div>
                <h3 className="text-lg font-bold text-white">AI Scope Definition</h3>

                {/* Decorative Icon */}
                <div className="absolute top-6 right-6 text-red-900/20">
                    <BrainCircuit size={48} />
                </div>
            </div>

            <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Project Description</label>
                <TextureTextarea
                    placeholder="Describe your challenge here (e.g., 'We need a complete redesign of our fintech mobile app...'). Our AI will suggest the best service package."
                />
            </div>

            <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block flex items-center gap-2">
                    <Sparkles size={10} /> AI Recommendations
                </label>
                <div className="flex flex-wrap gap-3">
                    {recommendations.map(tech => (
                        <button
                            key={tech.id}
                            className={`
                            flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors border
                            ${tech.active
                                    ? "bg-[#b10202]/20 border-[#b10202] text-[#b10202]"
                                    : "bg-black border-white/5 text-gray-500 hover:border-white/10"
                                }
                        `}
                        >
                            {tech.active && <Check size={12} />}
                            {!tech.active && <tech.icon size={12} />}
                            {tech.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
