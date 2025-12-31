"use client";

import { motion } from "framer-motion";

export const CrimsonLogo = () => {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Ring */}
                <motion.div
                    className="absolute inset-1 rounded-full border border-primary/40 group-hover:border-primary transition-colors"
                    animate={{ rotate: -180 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                {/* Core */}
                <motion.div
                    className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all"
                />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
                Crimson <span className="text-primary">Forge</span>
            </span>
        </div>
    );
};
