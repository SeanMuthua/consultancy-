"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0F0F0F]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to <span className="text-red-500">Shift?</span>
                        </h2>
                        <p className="text-gray-400 mb-12 text-lg">
                            Schedule a discovery call with our senior strategists. No commitment, just clarity.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                    <Mail size={18} />
                                </div>
                                <span>hello@redshift.digital</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                    <MapPin size={18} />
                                </div>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/50 p-8 rounded-2xl border border-white/5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Email</label>
                                    <input type="email" placeholder="john@company.com" className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Interest</label>
                                <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors">
                                    <option>Business Plan Strategy</option>
                                    <option>Web App Development</option>
                                    <option>System Architecture</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Message</label>
                                <textarea placeholder="Tell us about your project goals..." rows={4} className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"></textarea>
                            </div>

                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12">
                                Book Discovery Call
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
