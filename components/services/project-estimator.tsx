"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, AlertTriangle, RotateCcw, Briefcase, Code, Database, MessageCircle } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// --- DATA DEFINITIONS ---

// 1. Web App Development (Existing)
const WEB_SCOPES = [
    { id: "basic", title: "Basic", subtitle: "Landing / Portfolio", price: 5000, description: "Basic landing page or portfolio website." },
    { id: "standard", title: "Standard", subtitle: "Static Website", price: 15000, description: "Static website for any business(Can only be viewed on desktop)." },
    { id: "advanced", title: "Advanced", subtitle: "Responsive Website", price: 25000, description: "Responsive website that can be viewed on any device." },
    { id: "complex", title: "Complex", subtitle: "Dynamic Web Application", price: 50000, description: "Dynamic website with database and CMS." },
    { id: "enterprise", title: "Enterprise", subtitle: "Enterprise Web Application", price: 100000, description: "Enterprise-grade web application with custom workflows." }
]
const WEB_TIMELINES = [
    { id: "standard", title: "Standard", multiplier: 1.0, description: "Balanced pace. Best value.", label: "Recommended" },
    { id: "priority", title: "Accelerated", multiplier: 1.5, description: "30% faster. High availability required.", label: "Priority" }
]
const WEB_ADDONS = [
    { id: "maintenance", title: "Maintenance Plan (Monthly)", price: 5000 },
    { id: "seo", title: "SEO & Marketing Setup", price: 45000 },
    { id: "design", title: "UI/UX Design Package", price: 20000 },
    { id: "hosting", title: "Hosting & Support (Monthly)", price: 15000 }
]

// 2. Business Plans
const BUS_SCOPES = [
    { id: "startup", title: "Startup", subtitle: "Lean Canvas", price: 15000, description: "One-page business model canvas and executive summary." },
    { id: "standard", title: "Standard", subtitle: "Full Business Plan", price: 35000, description: "Detailed plan with market research and 3-year financials." },
    { id: "growth", title: "Growth", subtitle: "Invest Ready", price: 60000, description: "Comprehensive pitch deck, deep analysis, and 5-year projections." },
    { id: "corporate", title: "Corporate", subtitle: "Strategy Doc", price: 120000, description: "Enterprise-grade strategic roadmap and operational framework." }
]
const BUS_TIMELINES = [
    { id: "standard", title: "Standard", multiplier: 1.0, description: "5-7 Weeks turnaround.", label: "Recommended" },
    { id: "express", title: "Express", multiplier: 1.3, description: "3-5 Days. Priority delivery.", label: "Express" }
]
const BUS_ADDONS = [
    { id: "pitch", title: "Investor Pitch Deck (PPT)", price: 20000 },
    { id: "financial", title: "Advanced Financial Model (XLS)", price: 25000 },
    { id: "market", title: "Competitor Deep Dive", price: 15000 },
    { id: "consult", title: "Strategy Session (2hr)", price: 10000 }
]

// 3. System Architecture
const SYS_SCOPES = [
    { id: "audit", title: "Audit", subtitle: "System Review", price: 40000, description: "Codebase/Infrastructure analysis and optimization report." },
    { id: "design", title: "Design", subtitle: "Architecture Blueprint", price: 80000, description: "Detailed system diagrams, stack selection, and scalability plan." },
    { id: "implementation", title: "Build", subtitle: "MVP Infrastructure", price: 150000, description: "Setting up CI/CD, Cloud environment, and core backend." },
    { id: "enterprise", title: "Enterprise", subtitle: "Full Scale", price: 300000, description: "Microservices transition, high-availability cluster setup." }
]
const SYS_TIMELINES = [
    { id: "standard", title: "Standard", multiplier: 1.0, description: "Thorough analysis and testing.", label: "Recommended" },
    { id: "urgent", title: "Urgent", multiplier: 1.5, description: "Emergency resource allocation.", label: "Urgent" }
]
const SYS_ADDONS = [
    { id: "security", title: "Security Compliance Audit", price: 50000 },
    { id: "load", title: "Load Testing & Optimization", price: 40000 },
    { id: "docs", title: "Technical Documentation", price: 30000 },
    { id: "train", title: "Dev Team Training", price: 25000 }
]

type CalculatorType = "web" | "business" | "system"

export function ProjectEstimator() {
    const [activeTab, setActiveTab] = useState<CalculatorType>("web")

    // State
    const [scope, setScope] = useState(WEB_SCOPES[1])
    const [timeline, setTimeline] = useState(WEB_TIMELINES[0])
    const [addons, setAddons] = useState<string[]>([])
    const [total, setTotal] = useState(0)
    const [showWarning, setShowWarning] = useState(false)
    const [showNextSteps, setShowNextSteps] = useState(false)

    // Current Data Source
    const currentData = {
        web: { scopes: WEB_SCOPES, timelines: WEB_TIMELINES, addonsData: WEB_ADDONS },
        business: { scopes: BUS_SCOPES, timelines: BUS_TIMELINES, addonsData: BUS_ADDONS },
        system: { scopes: SYS_SCOPES, timelines: SYS_TIMELINES, addonsData: SYS_ADDONS }
    }[activeTab]

    // Reset when tab changes
    useEffect(() => {
        setScope(currentData.scopes[1])
        setTimeline(currentData.timelines[0])
        setAddons([])
    }, [activeTab]) // eslint-disable-line react-hooks/exhaustive-deps

    // Calculate Total
    useEffect(() => {
        let base = scope.price
        const addonTotal = addons.reduce((acc, id) => {
            const item = currentData.addonsData.find(a => a.id === id)
            return acc + (item ? item.price : 0)
        }, 0)

        // Applying multiplier to base scope
        const scopePrice = base * timeline.multiplier

        setTotal(scopePrice + addonTotal)

        // Warning for accelerated timelines
        if (timeline.multiplier > 1.2) {
            setShowWarning(true)
        } else {
            setShowWarning(false)
        }
    }, [scope, timeline, addons, currentData])

    const toggleAddon = (id: string) => {
        setAddons(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        )
    }

    const handleReset = () => {
        setScope(currentData.scopes[1])
        setTimeline(currentData.timelines[0])
        setAddons([])
        setShowNextSteps(false)
    }

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden" id="estimator">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4 block">Cost Calculator</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Project <span className="text-gray-500">Estimator</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Select a service category to configure your estimate.
                    </p>

                    {/* Service Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab("web")}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
                                activeTab === "web" ? "bg-[#b10202] border-[#b10202] text-white shadow-[0_0_20px_rgba(177,2,2,0.4)]" : "bg-[#0A0A0A] border-white/10 text-gray-400 hover:border-white/30"
                            )}
                        >
                            <Code size={18} />
                            <span className="font-bold">Web Apps</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("business")}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
                                activeTab === "business" ? "bg-[#b10202] border-[#b10202] text-white shadow-[0_0_20px_rgba(177,2,2,0.4)]" : "bg-[#0A0A0A] border-white/10 text-gray-400 hover:border-white/30"
                            )}
                        >
                            <Briefcase size={18} />
                            <span className="font-bold">Business Plans</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("system")}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
                                activeTab === "system" ? "bg-[#b10202] border-[#b10202] text-white shadow-[0_0_20px_rgba(177,2,2,0.4)]" : "bg-[#0A0A0A] border-white/10 text-gray-400 hover:border-white/30"
                            )}
                        >
                            <Database size={18} />
                            <span className="font-bold">System Architecture</span>
                        </button>
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
                >

                    {/* Controls Column */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* 1. Project Scope */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-red-600/20 text-red-500 text-xs flex items-center justify-center border border-red-600/30">1</span>
                                Project Scope
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentData.scopes.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => setScope(s)}
                                        className={cn(
                                            "text-left p-6 rounded-xl border transition-all duration-300 relative group",
                                            scope.id === s.id
                                                ? "bg-[#b10202]/5 border-[#b10202] ring-1 ring-[#b10202]/50"
                                                : "bg-[#0A0A0A] border-white/5 hover:border-white/10 hover:bg-[#111]"
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-bold text-white">{s.title}</span>
                                            {scope.id === s.id && (
                                                <Check size={16} className="text-[#b10202]" />
                                            )}
                                        </div>
                                        <p className="text-xs font-mono text-red-400 mb-2 uppercase tracking-wider">{s.subtitle}</p>
                                        <p className="text-sm text-gray-500 leading-snug">{s.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 2. Timeline */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-red-600/20 text-red-500 text-xs flex items-center justify-center border border-red-600/30">2</span>
                                Timeline Urgency
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentData.timelines.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTimeline(t)}
                                        className={cn(
                                            "flex items-center justify-between p-4 rounded-xl border transition-all duration-300",
                                            timeline.id === t.id
                                                ? "bg-white text-black border-white"
                                                : "bg-[#0A0A0A] border-white/5 text-gray-400 hover:border-white/20"
                                        )}
                                    >
                                        <div className="text-left">
                                            <div className="font-bold">{t.title}</div>
                                            <div className={cn("text-xs", timeline.id === t.id ? "text-gray-600" : "text-gray-500")}>
                                                {t.description}
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "px-2 py-1 rounded text-xs font-bold uppercase tracking-wider",
                                            timeline.id === t.id ? "bg-black/10 text-black" : "bg-white/5 text-gray-500"
                                        )}>
                                            {t.multiplier}x
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. Add-ons */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-red-600/20 text-red-500 text-xs flex items-center justify-center border border-red-600/30">3</span>
                                Additional Services
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {currentData.addonsData.map((addon) => (
                                    <button
                                        key={addon.id}
                                        onClick={() => toggleAddon(addon.id)}
                                        className={cn(
                                            "flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 hover:bg-[#111]",
                                            addons.includes(addon.id)
                                                ? "bg-[#111] border-red-500/50"
                                                : "bg-[#0A0A0A] border-white/5"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-5 h-5 rounded flex items-center justify-center border transition-colors",
                                            addons.includes(addon.id) ? "bg-red-600 border-red-600 text-white" : "border-gray-700 bg-transparent"
                                        )}>
                                            {addons.includes(addon.id) && <Check size={12} />}
                                        </div>
                                        <span className={cn("text-sm transition-colors", addons.includes(addon.id) ? "text-white" : "text-gray-400")}>
                                            {addon.title}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Results Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                                {/* Decorative Glow */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-[60px] rounded-full pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Estimated cost</h3>
                                        <button
                                            onClick={handleReset}
                                            className="text-gray-600 hover:text-white transition-colors p-2"
                                            title="Reset Calculator"
                                        >
                                            <RotateCcw size={16} />
                                        </button>
                                    </div>

                                    <div className="mb-6 flex items-baseline gap-1 text-white">
                                        <span className="text-2xl font-bold text-[#b10202]">KES</span>
                                        <motion.span
                                            key={total}
                                            initial={{ opacity: 0.5, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-5xl font-bold tracking-tighter"
                                        >
                                            {total.toLocaleString()}
                                        </motion.span>
                                    </div>

                                    {/* Summary List */}
                                    <div className="space-y-4 mb-8 border-t border-white/5 pt-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Base Scope</span>
                                            <span className="text-gray-300">{scope.title}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Timeline</span>
                                            <span className={cn("text-gray-300", timeline.id.includes("priority") || timeline.id.includes("urgent") ? "text-red-400 font-bold" : "")}>
                                                {timeline.title} ({timeline.multiplier}x)
                                            </span>
                                        </div>
                                        {addons.length > 0 && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Add-ons</span>
                                                <span className="text-gray-300">{addons.length} selected</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Warnings/Notes */}
                                    <AnimatePresence>
                                        {showWarning && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mb-8 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                                            >
                                                <div className="flex gap-2 text-red-400 text-xs leading-relaxed">
                                                    <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                                                    <p>Warning: Accelerated timeline requires daily client availability and finalized requirements before start.</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {!showNextSteps ? (
                                        <Button
                                            onClick={() => setShowNextSteps(true)}
                                            className="w-full bg-[#b10202] hover:bg-red-700 text-white h-14 text-base shadow-[0_0_20px_rgba(177,2,2,0.3)]"
                                        >
                                            Book Strategy Call
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="space-y-6 pt-6 border-t border-white/5"
                                        >
                                            <div className="space-y-4">
                                                <h4 className="text-xl font-bold text-white">Ready to Move Forward?</h4>
                                                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                                                    <p className="text-sm text-gray-400 mb-1">Your Estimated Range:</p>
                                                    <p className="text-2xl font-bold text-white">
                                                        KES {total.toLocaleString()} - KES {(total * 1.3).toLocaleString()}
                                                    </p>
                                                    <p className="text-[10px] text-gray-500 mt-2 italic leading-tight">
                                                        This estimate is based on your selections. For a precise quote and project plan:
                                                    </p>
                                                </div>

                                                <div className="space-y-3">
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded border border-red-500/50 flex items-center justify-center shrink-0 mt-0.5 bg-red-500">
                                                            <Check size={12} className="text-white" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-white">Schedule Discovery Call (Recommended)</p>
                                                            <p className="text-xs text-gray-400">10-minute free consultation with our strategist</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-white">Request Proposal</p>
                                                            <p className="text-xs text-gray-400">Detailed proposal with exact pricing & brief</p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="https://wa.me/254791539750"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex gap-3 group/wa"
                                                    >
                                                        <div className="w-5 h-5 rounded border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/wa:border-green-500/50 group-hover/wa:bg-green-500/10 transition-colors">
                                                            <MessageCircle size={10} className="text-gray-500 group-hover/wa:text-green-500" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-white group-hover/wa:text-green-500 transition-colors">WhatsApp Quick Chat</p>
                                                            <p className="text-xs text-gray-400">Clarifying questions before booking</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="py-4 space-y-3">
                                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Next Steps:</p>
                                                    <ul className="text-xs text-gray-400 space-y-2 pl-2 border-l border-red-500/30">
                                                        <li>• We'll contact you within 24 hours</li>
                                                        <li>• Schedule 10-minute discovery call</li>
                                                        <li>• Receive detailed proposal</li>
                                                        <li>• Begin project with clear expectations</li>
                                                    </ul>
                                                </div>

                                                <div className="grid grid-cols-1 gap-3">
                                                    <Button
                                                        asChild
                                                        className="w-full bg-[#b10202] hover:bg-red-700 text-white h-12 text-sm shadow-[0_0_20px_rgba(177,2,2,0.2)]"
                                                    >
                                                        <Link href={`/book-now?service=${activeTab}&budget=${total}&scope=${scope.title}`}>
                                                            Schedule Discovery Call
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full border-white/10 text-white hover:bg-white/5 h-12 text-sm"
                                                    >
                                                        Receive Detailed Proposal
                                                    </Button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* PROMINENT DISCLAIMER */}
                                    <div className="mt-8 text-center bg-red-950/20 border border-red-900/30 p-3 rounded-lg">
                                        <p className="text-xs font-bold text-red-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                            <AlertTriangle size={12} fill="currentColor" />
                                            Estimate only
                                        </p>
                                        <p className="text-[10px] text-red-300/70 mt-1">
                                            Final quote provided after detailed consultation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
