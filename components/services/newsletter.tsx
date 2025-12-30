"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ShieldCheck } from "lucide-react"

export function Newsletter() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Shift?</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Our calendar fills up quickly. Secure your slot for a consultation and let's start building the future of your business today.
                        </p>

                        <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-1.5 flex max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent flex-1 px-4 text-white focus:outline-none placeholder:text-gray-600"
                            />
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
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
                            <p className="text-sm text-gray-400 text-sm leading-relaxed">
                                Consistent alignment with your business goals through dedicated advisory sessions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-10 h-10 rounded-lg bg-[#111] flex items-center justify-center text-white border border-white/10">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="font-bold text-white">No-Nonsense Policy</h3>
                            <p className="text-sm text-gray-400 text-sm leading-relaxed">
                                Transparent pricing, clear timelines, and a focus on shipping value, not just code.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        <span className="font-bold text-white">RedShift Digital</span>
                    </div>
                    <div>
                        &copy; 2024 RedShift Digital. All rights reserved.
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
