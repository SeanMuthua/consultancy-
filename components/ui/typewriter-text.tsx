"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypewriterTextProps {
    texts: string[]
    delay?: number
}

export function TypewriterText({ texts, delay = 2000 }: TypewriterTextProps) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, delay)

        return () => clearInterval(timer)
    }, [texts, delay])

    return (
        <span className="inline-block min-w-[120px] text-left">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block text-white"
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}
