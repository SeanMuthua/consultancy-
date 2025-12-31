"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AboutCTA() {
    return (
        <section className="py-32 bg-black flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative z-10 max-w-2xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to <span className="text-[#b10202]">Shift Gears?</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Partner with a team that understands the intersection of luxury and technology. Let's discuss your next breakthrough.
                </p>
                <a href="book-now">
                    <Button className="bg-[#b10202] hover:bg-red-700 text-white h-14 px-8 text-base font-bold shadow-[0_0_20px_rgba(177,2,2,0.3)]">
                        Start Your Project
                    </Button>
                </a>
            </motion.div>
        </section>
    )
}
