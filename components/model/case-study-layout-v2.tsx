"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check, User, Users } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface CaseStudyLayoutV2Props {
    title: string
    client: string
    lead: "steve" | "you" | "both"
    overview: string
    architecture: string
    results: string[]
    stack: string[]
    children?: React.ReactNode
}

export function CaseStudyLayoutV2({
    title,
    client,
    lead,
    overview,
    architecture,
    results,
    stack,
    children
}: CaseStudyLayoutV2Props) {

    const getLeadBadge = () => {
        switch (lead) {
            case "steve":
                return <Badge className="bg-red-900 border-red-800 text-white">Led by Senior Architect</Badge>
            case "both":
                return <Badge className="bg-gradient-to-r from-red-600 to-red-900 text-white">Collaborative Oversight Model</Badge>
            default:
                return <Badge variant="outline" className="border-red-500 text-red-400">Led by Web Specialist</Badge>
        }
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                {/* Header */}
                <Link href="/work" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Work
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-red-500 font-mono text-sm uppercase tracking-widest">{client}</span>
                        {getLeadBadge()}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">{overview}</p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Users className="text-red-500" size={24} />
                                The Team Model
                            </h2>
                            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                                {lead === 'steve' && (
                                    <p className="text-gray-400">
                                        This project required significant enterprise architecture planning. Steve Ireri led the technical design, ensuring scalability and security compliance, while overseeing the implementation team.
                                    </p>
                                )}
                                {lead === 'both' && (
                                    <p className="text-gray-400">
                                        Leveraging our collaborative model, Steve provided the high-level architectural blueprint and security audit, while the execution was handled by our Modern Web Specialist to speed up delivery without compromising quality.
                                    </p>
                                )}
                                {lead === 'you' && (
                                    <p className="text-gray-400">
                                        Executed by our Modern Web Specialist with strategic oversight from Steve. This model ensured the client received a cutting-edge frontend experience backed by solid engineering principles.
                                    </p>
                                )}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line border-l-2 border-red-500/30 pl-6">
                                {architecture}
                            </p>
                        </section>

                        {children}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Results */}
                        <div className="bg-red-950/10 border border-red-900/30 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Key Results</h3>
                            <ul className="space-y-3">
                                {results.map((res, i) => (
                                    <li key={i} className="flex items-start gap-3 text-red-200/80 text-sm">
                                        <Check size={16} className="shrink-0 mt-0.5 text-red-500" />
                                        {res}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Tech Starck</h3>
                            <div className="flex flex-wrap gap-2">
                                {stack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
