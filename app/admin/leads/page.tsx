"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Check, Filter, Mail, Phone, Search, X } from "lucide-react"

// Mock Data for UI demonstration
const MOCK_LEADS = [
    { id: 1, name: "David Kimani", email: "david@techkenya.co.ke", phone: "+254 712 345 678", track: "track1", status: "new", message: "We need a complete overhaul of our banking infrastructure.", date: "2024-01-02" },
    { id: 2, name: "Sarah Omondi", email: "sarah@fashion.com", phone: "+254 722 987 654", track: "track2", status: "contacted", message: "Looking for a high-end e-commerce site for my boutique.", date: "2024-01-01" },
    { id: 3, name: "Enterprises Ltd", email: "info@enterprises.com", phone: "+254 733 111 222", track: "collaborative", status: "qualified", message: "Large scale logistics system with mobile app integration.", date: "2023-12-28" },
]

export default function LeadsPage() {
    const [leads, setLeads] = useState(MOCK_LEADS)
    const [filter, setFilter] = useState("all")

    const getTrackBadge = (track: string) => {
        switch (track) {
            case "track1": return <Badge className="bg-red-950 text-red-200 border-red-900">Enterprise (Steve)</Badge>
            case "track2": return <Badge className="bg-blue-950 text-blue-200 border-blue-900">Modern Web (You)</Badge>
            case "collaborative": return <Badge className="bg-purple-950 text-purple-200 border-purple-900">Collaborative</Badge>
            default: return <Badge variant="outline">Unknown</Badge>
        }
    }

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "new": return "text-green-400 font-bold"
            case "contacted": return "text-yellow-400"
            case "qualified": return "text-blue-400"
            default: return "text-gray-500"
        }
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="flex">
                {/* Simplified Sidebar Placeholder */}
                <aside className="w-64 bg-[#0A0A0A] border-r border-white/5 min-h-screen p-6 hidden md:block">
                    <div className="text-xl font-bold text-white mb-8">Admin Dashboard</div>
                    <nav className="space-y-4">
                        <div className="text-red-500 font-bold">Leads</div>
                        <div className="text-gray-500">Projects</div>
                        <div className="text-gray-500">Team</div>
                        <div className="text-gray-500">Settings</div>
                    </nav>
                </aside>

                <div className="flex-1 p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold">Lead Management</h1>
                        <div className="flex gap-2">
                            <button className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10">
                                <Search size={20} />
                            </button>
                            <button className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10">
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider text-left">
                                <tr>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Name / Contact</th>
                                    <th className="p-4">Track</th>
                                    <th className="p-4">Message Summary</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {leads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-sm text-gray-500 whitespace-nowrap">{lead.date}</td>
                                        <td className="p-4">
                                            <div className="font-bold text-white">{lead.name}</div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                                <Mail size={12} /> {lead.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                                <Phone size={12} /> {lead.phone}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            {getTrackBadge(lead.track)}
                                        </td>
                                        <td className="p-4 text-sm text-gray-400 max-w-xs truncate">
                                            {lead.message}
                                        </td>
                                        <td className="p-4">
                                            <span className={`text-xs uppercase tracking-wider ${getStatusStyle(lead.status)}`}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="p-1 rounded bg-green-500/10 text-green-500 hover:bg-green-500/20" title="Mark as Contacted">
                                                    <Check size={16} />
                                                </button>
                                                <button className="p-1 rounded bg-red-500/10 text-red-500 hover:bg-red-500/20" title="Archive">
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
