"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const navItems = [
    { name: "Dashboard", href: "/dashboard", active: true },
    { name: "Projects", href: "/dashboard/projects" },
    { name: "Invoices", href: "/dashboard/invoices" },
    { name: "Settings", href: "/dashboard/settings" },
]

export function DashboardHeader() {
    return (
        <header className="border-b border-white/5 bg-[#050505] py-4">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full border-2 border-red-600 relative flex items-center justify-center overflow-hidden group-hover:border-red-500 transition-colors">
                        <div className="w-2 h-2 bg-red-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors">
                        Crimson Forge<span className="text-red-600">.</span>
                    </span>
                </Link>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${item.active ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button className="bg-[#b10202] hover:bg-[#8f0202] text-white font-bold h-9">
                        <Plus size={16} className="mr-2" /> New Project
                    </Button>
                    <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=100&q=80"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
