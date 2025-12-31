"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Folder, CheckSquare, FileText, MessageSquare, Settings, LogOut } from "lucide-react"

const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: Folder },
    { name: "Tasks", href: "/admin/tasks", icon: CheckSquare, badge: 5 },
    { name: "Documents", href: "/admin/documents", icon: FileText },
    { name: "Team Chat", href: "/admin/chat", icon: MessageSquare },
]

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050505] border-r border-white/5 flex flex-col z-50">
            {/* Logo */}
            <div className="p-6 mb-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b10202] flex items-center justify-center text-white">
                        <span className="font-bold">C</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-white leading-none">CRIMSON FORGE</h1>
                        <p className="text-[10px] text-gray-500 tracking-wider">ADMIN CONSOLE</p>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? "bg-[#b10202]/10 text-[#b10202]"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={18} />
                                {item.name}
                            </div>
                            {item.badge && (
                                <span className="bg-[#b10202] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* Footer / Settings */}
            <div className="p-3 mt-auto mb-4 space-y-1">
                <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                    <Settings size={18} />
                    Settings
                </Link>

                <div className="border-t border-white/5 my-4 mx-3"></div>

                {/* User Profile */}
                <div className="bg-[#111] rounded-xl p-3 flex items-center gap-3 mx-2 border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Admin" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-black"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">Alex Morgan</p>
                        <p className="text-[10px] text-gray-500">Lead Developer</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
