"use client"

import { AdminSidebar } from "@/components/admin/sidebar"
import { Search, Bell, HelpCircle } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-[#000000]">
            <AdminSidebar />

            {/* Main Content */}
            <div className="pl-64">
                {/* Top Bar */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#050505]">
                    {/* Breadcrumbs / Title */}
                    <div className="text-sm text-gray-400">
                        <span>Admin</span> <span className="mx-2">›</span> <span className="text-white font-medium">Dashboard Overview</span>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <div className="relative w-64">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search projects, tasks..."
                                className="w-full bg-[#111] border border-white/10 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-[#b10202]/50 placeholder:text-gray-600"
                            />
                        </div>

                        <button className="text-gray-400 hover:text-white relative">
                            <Bell size={18} />
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-[#050505]"></span>
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <HelpCircle size={18} />
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
