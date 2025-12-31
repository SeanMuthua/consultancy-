"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, ShieldCheck } from "lucide-react"

export function Newsletter() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >

                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Forge?</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Our calendar fills up quickly. Secure your slot for a consultation and let's start building the future of your business today.
                        </p>

                        <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-1.5 flex max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent flex-1 px-4 text-white focus:outline-none placeholder:text-gray-600"
                            />
                            <Button className="bg-[#b10202] hover:bg-red-700 text-white">
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="w-10 h-10 rounded-lg bg-[#111] flex items-center justify-center text-white border border-white/10">
                                <Calendar size={20} />
                            </div>
                            <h3 className="font-bold text-white">Weekly Strategy Calls</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Consistent alignment with your business goals through dedicated advisory sessions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-10 h-10 rounded-lg bg-[#111] flex items-center justify-center text-white border border-white/10">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="font-bold text-white">No-Nonsense Policy</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Transparent pricing, clear timelines, and a focus on shipping value, not just code.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
