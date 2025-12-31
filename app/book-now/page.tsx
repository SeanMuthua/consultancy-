"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, CheckCircle, Calendar, FileText, Handshake } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Newsletter } from "@/components/services/newsletter"

export default function BookNowPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <BookNowContent />
        </Suspense>
    )
}

function BookNowContent() {
    const searchParams = useSearchParams()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" })

    // Form state for pre-filling
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "Business Plan Strategy",
        message: ""
    })

    useEffect(() => {
        const service = searchParams.get("service")
        const budget = searchParams.get("budget")
        const scope = searchParams.get("scope")

        if (service || budget || scope) {
            let mappedInterest = "Business Plan Strategy"
            if (service === "web") mappedInterest = "Web App Development"
            if (service === "system") mappedInterest = "System Architecture"
            if (service === "business") mappedInterest = "Business Plan Strategy"

            const formattedBudget = budget ? parseInt(budget).toLocaleString() : ""
            const prefilledMessage = `Interested in ${mappedInterest}${scope ? ` (${scope})` : ""} with estimated budget KES ${formattedBudget}.`

            setFormData(prev => ({
                ...prev,
                interest: mappedInterest,
                message: prefilledMessage
            }))
        }
    }, [searchParams])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    } as any

    return (
        <main className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
            {/* Standardized Hero Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl" ref={ref}>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Book Your <span className="text-red-500">Discovery Call</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Let's discuss your project and explore how we can help bring your vision to life.
                        </p>
                    </motion.div>

                    {/* How It Works */}
                    <motion.div variants={itemVariants} className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { icon: FileText, title: "Fill out the form", description: "Share your project details below" },
                                { icon: Phone, title: "We'll contact you", description: "Within 24 hours to schedule" },
                                { icon: Calendar, title: "10-minute free call", description: "With Steve or our expert team" },
                                { icon: Handshake, title: "Receive tailored proposal", description: "With exact pricing & timeline" }
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="relative group h-full"
                                >
                                    <motion.div
                                        className="h-full bg-[#0A0A0A] border border-white/10 rounded-xl p-6 cursor-default select-none relative z-10 overflow-hidden"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 30px rgba(177, 2, 2, 0.15)",
                                            borderColor: "rgba(177, 2, 2, 0.3)"
                                        }}
                                        transition={{
                                            type: "tween",
                                            ease: "easeOut",
                                            duration: 0.3
                                        }}
                                        style={{
                                            transform: "translateZ(0)",
                                            backfaceVisibility: "hidden",
                                            willChange: "transform, box-shadow"
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        <div className="relative z-10 text-center">
                                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 mx-auto">
                                                <step.icon size={24} />
                                            </div>
                                            <div className="text-xs text-red-400 font-bold mb-2 uppercase tracking-wider">Step {index + 1}</div>
                                            <h3 className="font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-sm text-gray-400">{step.description}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why We Don't Use Auto-Booking */}
                    <motion.div variants={itemVariants} className="mb-16 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-white mb-6">Why We Don't Use Auto-Booking</h2>
                        <p className="text-gray-400 mb-6">
                            As a boutique agency, we believe in a personalized approach. Here's why we manually schedule calls:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Personally review each inquiry",
                                "Align with your goals and timeline",
                                "Prepare for our call to maximize value",
                                "Ensure we're the right fit for your needs"
                            ].map((reason, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-300">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Unified Booking Form */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative group overflow-hidden">
                                {/* Animated Glowing Border */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
                                </div>

                                {/* Corner Glow */}
                                <motion.div
                                    className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/20 blur-[60px] rounded-full"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-6">Request a Call</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Phone</label>
                                            <input
                                                type="tel"
                                                placeholder="+254 XXX XXX XXX"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Interest</label>
                                            <select
                                                value={formData.interest}
                                                onChange={e => setFormData({ ...formData, interest: e.target.value })}
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                                            >
                                                <option>Business Plan Strategy</option>
                                                <option>Web App Development</option>
                                                <option>System Architecture</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Message</label>
                                            <textarea
                                                placeholder="Tell us about your project goals..."
                                                rows={5}
                                                value={formData.message}
                                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300 resize-none"
                                            />
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 shadow-[0_0_20px rgba(177, 2, 2, 0.3)] hover:shadow-[0_0_30px rgba(177, 2, 2, 0.5)] transition-all duration-300">
                                                Submit Request
                                            </Button>
                                        </motion.div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>

                        {/* Alternative Contact Methods */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-xl font-bold text-white mb-4">Alternative Contact Methods</h3>

                            {/* Call Us */}
                            <motion.div
                                className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 group hover:border-blue-500/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.1)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                                        <Phone size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Call Us</h4>
                                    <p className="text-sm text-gray-400 mb-2">+254 791 539 750</p>
                                    <p className="text-sm text-gray-400">+254 358 80 535</p>
                                    <p className="text-xs text-gray-500 mt-2">Mon-Fri, 9AM-6PM EAT</p>
                                </div>
                            </motion.div>

                            {/* WhatsApp */}
                            <motion.div
                                className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 group hover:border-green-500/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 197, 94, 0.1)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                                        <MessageCircle size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">WhatsApp</h4>
                                    <p className="text-sm text-gray-400 mb-2">+254 791 539 750</p>
                                    <p className="text-xs text-gray-500 mt-2">Quick replies during business hours</p>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 group hover:border-red-500/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(177, 2, 2, 0.1)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
                                        <Mail size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Email</h4>
                                    <p className="text-sm text-gray-400 mb-2">hello@crimsonforge.digital</p>
                                    <p className="text-xs text-gray-500 mt-2">For detailed proposals & documents</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="mt-24">
                <Newsletter />
            </div>
        </main>
    )
}
