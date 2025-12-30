"use client"

import { Receipt, Calendar, Clock, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BookingSummary() {
    return (
        <div className="sticky top-24">
            <div className="rounded-2xl border border-white/5 bg-[#0e0e0e] p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white">Booking Summary</h3>
                    <Receipt size={16} className="text-[#b10202]" />
                </div>

                {/* Selected Item */}
                <div className="bg-[#1a1a1a] rounded-xl p-3 flex gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-black rounded-lg flex items-center justify-center shrink-0">
                        {/* Mock Spectrum Audio Visualizer */}
                        <div className="flex gap-0.5 items-end h-4">
                            {[3, 5, 2, 6, 4, 7, 3].map((h, i) => (
                                <div key={i} className="w-0.5 bg-[#b10202]" style={{ height: `${h}px` }}></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white mb-0.5">UX Audit & Strategy</p>
                        <p className="text-[10px] text-gray-400">Full comprehensive review of your digital product.</p>
                    </div>
                </div>

                {/* Details List */}
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-xs">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={12} /> Date
                        </div>
                        <span className="text-white font-bold">Oct 9, 2023</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Clock size={12} /> Time
                        </div>
                        <span className="text-white font-bold">02:00 PM (EST)</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Clock size={12} /> Duration
                        </div>
                        <span className="text-white font-bold">1 Hour</span>
                    </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6 pt-6 border-t border-white/5">
                    <span className="text-sm text-gray-400">Estimated Total</span>
                    <span className="text-3xl font-bold text-white">$850</span>
                </div>

                <Button className="w-full bg-[#b10202] hover:bg-[#8f0202] text-white font-bold h-12 mb-4">
                    Confirm Booking
                </Button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500">
                    <Lock size={10} /> Secure payment processing via Stripe
                </div>
            </div>

            {/* Chat Widget */}
            <div className="rounded-xl border border-white/5 bg-[#0e0e0e] p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                        alt="Sarah"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-[10px] text-gray-400">Need help scoping?</p>
                    <p className="text-xs font-bold text-white">Chat with Sarah</p>
                </div>
            </div>
        </div>
    )
}
