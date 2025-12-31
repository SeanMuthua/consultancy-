"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, HelpCircle, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Track = "track1" | "track2" | "collaborative"

interface TrackRecommendationProps {
    onComplete: (track: Track) => void
}

export function TrackRecommendation({ onComplete }: TrackRecommendationProps) {
    const [step, setStep] = useState(1)
    const [answers, setAnswers] = useState({
        type: "",
        complexity: "",
        budget: ""
    })

    const handleSelect = (key: string, value: string) => {
        setAnswers(prev => ({ ...prev, [key]: value }))
        if (step < 3) {
            setStep(prev => prev + 1)
        } else {
            calculateRecommendation({ ...answers, [key]: value })
        }
    }

    const calculateRecommendation = (finalAnswers: typeof answers) => {
        let recommendation: Track = "track2" // Default to Modern Web Specialist

        if (finalAnswers.type === "system" || finalAnswers.complexity === "high") {
            recommendation = "track1" // Senior Architect
        }

        if (finalAnswers.type === "web" && finalAnswers.complexity === "high" && finalAnswers.budget === "high") {
            recommendation = "collaborative" // Both
        }

        if (finalAnswers.type === "system" && finalAnswers.budget === "mid") {
            recommendation = "collaborative" // Oversight model perfect here
        }

        onComplete(recommendation)
    }

    const reset = () => {
        setStep(1)
        setAnswers({ type: "", complexity: "", budget: "" })
    }

    return (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-600/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-8 gap-4">
                    <h3 className="text-xl font-bold text-white">Find Your Ideal Engagement Model</h3>
                    <button
                        onClick={reset}
                        className="text-gray-400 hover:text-red-500 transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full"
                        title="Reset Wizard"
                    >
                        <RefreshCcw size={20} strokeWidth={3} />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-red-600"
                        initial={{ width: "33%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg text-white mb-4">What type of project is this?</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { id: "web", label: "Web Application / Website", desc: "Marketing site, e-commerce, or dashboard" },
                                    { id: "mobile", label: "Mobile App", desc: "iOS or Android application" },
                                    { id: "system", label: "Complex System / Architecture", desc: "Enterprise software, cloud infrastructure, legacy migration" }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelect("type", opt.id)}
                                        className="text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-red-500/30 transition-all group"
                                    >
                                        <div className="font-bold text-white group-hover:text-red-400 transition-colors">{opt.label}</div>
                                        <div className="text-sm text-gray-500">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg text-white mb-4">How complex is the requirement?</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { id: "low", label: "Standard / Straightforward", desc: "Clear requirements, standard features" },
                                    { id: "mid", label: "Moderate Complexity", desc: "Custom features, integrations required" },
                                    { id: "high", label: "High Complexity / Unknowns", desc: "Deep technical challenges, strict security/performance needs" }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelect("complexity", opt.id)}
                                        className="text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-red-500/30 transition-all group"
                                    >
                                        <div className="font-bold text-white group-hover:text-red-400 transition-colors">{opt.label}</div>
                                        <div className="text-sm text-gray-500">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg text-white mb-4">Ballpark Budget Range (KES)</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { id: "low", label: "Under 100k KES", desc: "Bootstrapped or MVP" },
                                    { id: "mid", label: "100k - 500k KES", desc: "Professional implementation" },
                                    { id: "high", label: "500k+ KES", desc: "Enterprise grade / Long-term" }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelect("budget", opt.id)}
                                        className="text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-red-500/30 transition-all group"
                                    >
                                        <div className="font-bold text-white group-hover:text-red-400 transition-colors">{opt.label}</div>
                                        <div className="text-sm text-gray-500">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
