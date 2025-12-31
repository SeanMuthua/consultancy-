"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },

    // { name: "Insights", href: "#insights" },
]

export function Navigation() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full border-2 border-red-600 relative flex items-center justify-center overflow-hidden group-hover:border-red-500 transition-colors">
                        <div className="w-2 h-2 bg-red-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors">
                        RedShift<span className="text-red-600">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#b10202] transition-all group-hover:w-full"></span>
                        </Link>
                    ))}

                    <Link href="/book-now">
                        <Button className="bg-[#b10202] hover:bg-[#8f0202] text-white font-bold px-6 h-10 shadow-[0_0_15px_rgba(177,2,2,0.4)]">
                            Book Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/book-now" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                        <Button variant="red" className="w-full mt-4">
                            Book Consultation
                        </Button>
                    </Link>
                </motion.div>
            )}
        </header>
    )
}
