"use client"

import { Check, CircleDashed, ArrowRightLeft, Clock } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Phase 1: Strategy",
        date: "Completed on Sept 15",
        status: "complete",
        icon: Check
    },
    {
        id: 2,
        title: "Phase 2: UI Design",
        date: "Currently in High Fidelity Review",
        status: "active",
        icon: ArrowRightLeft,
        details: [
            { id: "wf", label: "Wireframes", status: "complete" },
            { id: "hifi", label: "High Fidelity Mocks", status: "review", note: "Review feedback from Oct 20th meeting pending implementation.", actions: ["Homepage", "Dashboard"] },
            { id: "proto", label: "Prototype Review", status: "pending" }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Development",
        date: "Starts Nov 1",
        status: "pending",
        icon: CircleDashed
    }
]

export function Timeline() {
    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 h-full">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-8">
                <span className="text-[#b10202]">⚡</span> Project Timeline
            </h3>

            <div className="relative pl-4 space-y-12">
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-2 bottom-4 w-px bg-white/10"></div>

                {steps.map((step) => (
                    <div key={step.id} className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 ${step.status === 'complete' ? 'bg-[#b10202] border-[#b10202] text-white' :
                                    step.status === 'active' ? 'bg-transparent border-[#b10202] text-[#b10202]' :
                                        'bg-transparent border-gray-700 text-gray-700'
                                }`}>
                                <step.icon size={12} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className={`text-sm font-bold ${step.status === 'pending' ? 'text-gray-500' : 'text-white'}`}>{step.title}</h4>
                                        <p className="text-xs text-gray-500">{step.date}</p>
                                    </div>
                                    {step.status === 'active' && (
                                        <span className="px-2 py-0.5 rounded bg-[#b10202]/20 text-[#b10202] text-[10px] font-bold uppercase">Active</span>
                                    )}
                                </div>

                                {/* Active Phase Details */}
                                {step.details && (
                                    <div className="mt-4 space-y-3 pl-2">
                                        {step.details.map((detail: any) => (
                                            <div key={detail.id} className={`rounded-xl border p-3 ${detail.status === 'review' ? 'bg-[#b10202]/5 border-[#b10202]/30' :
                                                    'bg-black/20 border-white/5'
                                                }`}>
                                                <div className="flex items-center gap-2 mb-1">
                                                    {detail.status === 'complete' ? (
                                                        <div className="w-4 h-4 rounded-full bg-[#b10202] flex items-center justify-center text-white"><Check size={8} /></div>
                                                    ) : detail.status === 'review' ? (
                                                        <div className="w-4 h-4 rounded-full border border-[#b10202] border-t-transparent animate-spin"></div>
                                                    ) : (
                                                        <div className="w-4 h-4 rounded-full border border-gray-700"></div>
                                                    )}
                                                    <span className={`text-xs font-bold ${detail.status === 'pending' ? 'text-gray-500' : 'text-white'}`}>{detail.label}</span>
                                                </div>

                                                {detail.note && (
                                                    <div className="ml-6">
                                                        <p className="text-[10px] text-gray-400 mb-2">{detail.note}</p>
                                                        <div className="flex gap-2">
                                                            {detail.actions.map((action: string) => (
                                                                <span key={action} className="px-2 py-1 rounded bg-[#1a1a1a] text-gray-400 text-[10px] border border-white/5">{action}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
