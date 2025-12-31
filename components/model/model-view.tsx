"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { TrackRecommendation } from "@/components/model/track-recommendation"
import { BookingFormV2 } from "@/components/model/booking-form-v2"

export function ModelView() {
    const [recommendedTrack, setRecommendedTrack] = useState<"track1" | "track2" | "collaborative" | null>(null)

    return (
        <section className="py-20 px-4 flex flex-col justify-center items-center relative overflow-hidden bg-black border-t border-white/5">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-mono text-sm uppercase tracking-widest">Engagement Model</span>
                    <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Find Your Fit</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Not every project needs a Senior Architect. Not every project can be handled by a junior dev.
                        Use our wizard to find the perfect balance of cost and expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    <TrackRecommendation onComplete={(track) => setRecommendedTrack(track)} />

                    <AnimatePresence>
                        {recommendedTrack && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: 20 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="flex justify-center mb-8">
                                    <ArrowDown className="text-red-500 animate-bounce" />
                                </div>

                                <div className="bg-[#0A0A0A] border border-red-500/20 rounded-2xl p-1">
                                    <BookingFormV2 track={recommendedTrack} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
