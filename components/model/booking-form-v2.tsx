"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

interface BookingFormV2Props {
    track: "track1" | "track2" | "collaborative"
}

export function BookingFormV2({ track }: BookingFormV2Props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const getTrackDetails = () => {
        switch (track) {
            case "track1":
                return {
                    title: "Book Enterprise Consultation",
                    subtitle: "Direct strategy session with Steve Ireri",
                    bg: "bg-red-950/20",
                    border: "border-red-900/50",
                    btn: "bg-red-900 hover:bg-red-800",
                    contact: "Steve will review your architecture needs personally."
                }
            case "collaborative":
                return {
                    title: "Book Collaborative Discovery",
                    subtitle: "Hybrid Model: Modern execution with Senior Oversight",
                    bg: "bg-black",
                    border: "border-red-500/50",
                    btn: "bg-gradient-to-r from-red-600 to-red-900 hover:from-red-500 hover:to-red-800",
                    contact: "Both Steve and Sean Muthua will attend the initial call."
                }
            default:
                return {
                    title: "Book Web Development",
                    subtitle: "Modern Web Specialist (Oversight by Steve Ireri)",
                    bg: "bg-[#0A0A0A]",
                    border: "border-white/10",
                    btn: "bg-red-600 hover:bg-red-700",
                    contact: "Sean Muthua will handle the call, with Steve reviewing the plan."
                }
        }
    }

    const details = getTrackDetails()

    return (
        <div className={`rounded-2xl border ${details.border} ${details.bg} p-8 relative overflow-hidden`}>
            {/* Header */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{details.title}</h3>
                <p className="text-red-400 font-medium">{details.subtitle}</p>
            </div>

            <form className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Phone</label>
                        <input
                            type="tel"
                            placeholder="+254 7XX XXX XXX"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Email</label>
                    <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Project Details</label>
                    <textarea
                        rows={4}
                        placeholder="Tell us about your project goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                    <div className="mt-1">
                        <Check size={16} className="text-red-500" />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        {details.contact}
                    </p>
                </div>

                <Button className={`w-full h-12 text-base font-bold text-white shadow-lg ${details.btn}`}>
                    Request Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </form>
        </div>
    )
}
