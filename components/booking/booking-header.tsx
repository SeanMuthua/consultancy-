"use client"

import { motion } from "framer-motion"

export function BookingHeader() {
    return (
        <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Start Your Transformation
            </h1>
            <p className="text-gray-400 mb-8 max-w-2xl">
                Use our AI-assisted booking engine to define your scope and schedule your session. We'll match you with the perfect expert.
            </p>

            <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-white">Setup Progress</span>
                <span className="text-xs font-bold text-[#b10202]">Step 2 of 4</span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "25%" }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-[#b10202]"
                ></motion.div>
            </div>
        </div>
    )
}
