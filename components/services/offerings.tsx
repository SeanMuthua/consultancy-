"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Briefcase, Code, Database } from "lucide-react"

const offerings = [
    {
        icon: Briefcase,
        title: "Business Plans",
        description: "Strategic roadmaps engineered with deep market analysis and precise ROI projection. We don't just plan, we architect success.",
        features: [
            "Market & Competitor Analysis",
            "Financial Modeling & Projections",
            "Investor Pitch Decks",
            "Go-to-Market Strategy",
            "Operational Efficiency Audits",
            "Risk Assessment & Mitigation",
            "Strategic Partnership Planning"
        ]
    },
    {
        icon: Code,
        title: "Web App Development",
        description: "High-performance interfaces using Next.js and scalable cloud infrastructure. Beautifully designed, ruthlessly efficient.",
        features: [
            "React / Next.js Development",
            "Scalable Cloud Architecture",
            "Advanced UI/UX Design",
            "PWA Implementation",
            "Serverless Backend Solutions",
            "Real-time Data Synchronization",
            "DevOps & CI/CD Pipelines",
            "Post-Launch Support"
        ]
    },
    {
        icon: Database,
        title: "System Creation",
        description: "Enterprise architecture with automation and custom CRM integration. Streamline operations with bespoke digital nervous systems.",
        features: [
            "Custom CRM Development",
            "Workflow Automation Pipelines",
            "Third-Party API Integration",
            "Legacy System Migration",
            "Data Warehousing & ETL",
            "Enterprise Resource Planning",
            "Security & Compliance Audits"
        ]
    }
]

export function Offerings() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl font-bold text-white mb-4">Premium Offerings</h2>
                    <p className="text-gray-400">Expertly crafted solutions designed for scalability and impact.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="group bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-[#b10202]/50 hover:bg-[#111] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#b10202]/10 flex items-center justify-center text-[#b10202] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <offering.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">{offering.title}</h3>
                            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                                {offering.description}
                            </p>

                            <ul className="space-y-3">
                                {offering.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 size={16} className="text-[#b10202] mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
