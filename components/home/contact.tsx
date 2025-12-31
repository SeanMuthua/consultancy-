"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, MessageCircle, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <section id="contact" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-4 md:px-6" ref={ref}>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                    {/* Left Column - Information */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Start Your <span className="text-red-500">Project</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Choose the best way to connect with our team and let's bring your vision to life.
                            </p>
                        </motion.div>

                        {/* Three Ways to Connect */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-xl font-bold text-white mb-4">Three Ways to Connect:</h3>

                            {/* 1. Schedule Discovery Call */}
                            <motion.div
                                className="bg-black/30 border border-red-500/20 rounded-xl p-5 relative group hover:border-red-500/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(177, 2, 2, 0.15)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="flex items-start gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                                            <Calendar size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white mb-1">
                                                Schedule a Discovery Call <span className="text-xs text-red-400 font-normal">(Recommended)</span>
                                            </h4>
                                            <ul className="text-sm text-gray-400 space-y-1">
                                                <li>• 10-minute free consultation</li>
                                                <li>• Get expert advice on your project</li>
                                                <li>• No commitment required</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2. WhatsApp */}
                            <motion.div
                                className="bg-black/30 border border-white/10 rounded-xl p-5 relative group hover:border-green-500/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 197, 94, 0.1)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="flex items-start gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mt-1">
                                            <MessageCircle size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white mb-1">Message on WhatsApp</h4>
                                            <ul className="text-sm text-gray-400 space-y-1">

                                                <li>• Quick questions</li>
                                                <li>• Share files/images</li>
                                                <li>• Instant response during business hours</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 3. Call Directly */}
                            <motion.div
                                className="bg-black/30 border border-white/10 rounded-xl p-5 relative group hover:border-blue-500/40 transition-all duration-300"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.1)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="flex items-start gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mt-1">
                                            <Phone size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white mb-1">Call Us Directly</h4>
                                            <ul className="text-sm text-gray-400 space-y-1">
                                                <li>• For urgent matters</li>
                                                <li>• Existing clients</li>
                                                <li>• 9 AM - 6 PM EAT, Mon-Fri</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-white/5">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Contact Info:</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-sm">hello@crimsonforge.digital</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                        <Phone size={18} />
                                    </div>
                                    <div className="text-sm">
                                        <div>+254 791 539 750</div>
                                        <div className="text-gray-500">+254 358 80 535</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="text-sm">Nairobi, Kenya (Remote-first agency)</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                        <Clock size={18} />
                                    </div>
                                    <span className="text-sm">Response time: Within 24 hours</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Booking Form */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-black/50 p-8 rounded-2xl border border-white/5 relative group overflow-hidden">
                            {/* Animated Glowing Border Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
                            </div>

                            {/* Subtle Corner Glow */}
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
                                        <motion.div
                                            className="space-y-2"
                                            whileFocus={{ scale: 1.02 }}
                                        >
                                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                                            />
                                        </motion.div>
                                        <motion.div
                                            className="space-y-2"
                                            whileFocus={{ scale: 1.02 }}
                                        >
                                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Email</label>
                                            <input
                                                type="email"
                                                placeholder="john@company.com"
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Interest</label>
                                        <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300">
                                            <option>Business Plan Strategy</option>
                                            <option>Web App Development</option>
                                            <option>System Architecture</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Message</label>
                                        <textarea
                                            placeholder="Tell us about your project goals..."
                                            rows={4}
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
                </motion.div>
            </div>
        </section>
    )
}
