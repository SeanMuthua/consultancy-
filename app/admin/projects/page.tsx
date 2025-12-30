"use client"

import { MetricCard } from "@/components/admin/metric-card"
import { Folder, Zap, CheckCircle, AlertTriangle, Search, Filter, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
    { name: "CyberSec Audit", client: "Nexus Corp", team: ["https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"], count: "+2", progress: 75, status: "In Progress", due: "Oct 24, 2023", color: "red" },
    { name: "RedShift V2 Launch", client: "Internal", team: ["https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=100&q=80"], count: "", progress: 45, status: "Review", due: "Nov 01, 2023", color: "yellow" },
    { name: "Mobile App Redesign", client: "Starlight Inc.", team: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"], count: "", progress: 90, status: "At Risk", due: "Overdue (2 Days)", color: "red-risk" },
    { name: "Database Migration", client: "FinTech Sol.", team: ["https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80"], count: "", progress: 100, status: "Completed", due: "Completed Oct 10", color: "green" },
    { name: "Cloud Infrastructure", client: "Global Logistics", team: [], count: "+", progress: 0, status: "Pending", due: "Dec 15, 2023", color: "gray" },
]

export default function AdminProjectsPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Project Management</h1>
                    <p className="text-gray-400">Overview of all active and completed client engagements.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-white/10 bg-[#111] text-gray-300 hover:text-white">Export</Button>
                    <Button className="bg-[#b10202] hover:bg-[#8f0202] text-white font-bold">
                        <Plus size={16} className="mr-2" /> New Project
                    </Button>
                </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Total Projects" value="24" icon={Folder} color="bg-[#1a1a1a]" trend="+4 this month" />
                <MetricCard title="Active Projects" value="12" icon={Zap} color="bg-[#1a1a1a]" trend="50% capacity" />
                <MetricCard title="Completed (Month)" value="5" icon={CheckCircle} color="bg-[#1a1a1a]" trend="12% vs last mo" />
                <MetricCard title="Action Required" value="2" icon={AlertTriangle} color="bg-[#1a1a1a]" trend="Overdue milestones" />
            </div>

            {/* Filters & Search */}
            <div className="flex items-center gap-4 bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search projects, clients, or tags..."
                        className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#b10202]/50 placeholder:text-gray-600"
                    />
                </div>
                <Button variant="outline" className="border-white/10 bg-[#1a1a1a] text-gray-300 h-10 gap-2">
                    All Statuses <Filter size={14} />
                </Button>
            </div>

            {/* Projects Table */}
            <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-[10px] text-gray-500 uppercase tracking-wider bg-[#1a1a1a] border-b border-white/5">
                            <tr>
                                <th className="font-semibold py-4 px-6 w-1/4">Project Name</th>
                                <th className="font-semibold py-4 px-6">Client</th>
                                <th className="font-semibold py-4 px-6">Team</th>
                                <th className="font-semibold py-4 px-6 w-1/5">Progress</th>
                                <th className="font-semibold py-4 px-6">Status</th>
                                <th className="font-semibold py-4 px-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {projects.map((item) => (
                                <tr key={item.name} className="group hover:bg-[#1a1a1a]/50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#b10202]/10 flex items-center justify-center text-[#b10202]">
                                                <Folder size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-sm">{item.name}</p>
                                                <p className={`text-xs ${item.due.includes("Overdue") ? "text-red-500 font-bold" : "text-gray-500"}`}>{item.due}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">{item.client}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex -space-x-2">
                                            {item.team.map((img, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0e0e0e] bg-gray-700 overflow-hidden">
                                                    <img src={img} alt="Team" className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            {item.team.length === 0 && (
                                                <div className="w-8 h-8 rounded-full border-2 border-[#0e0e0e] bg-[#1a1a1a] flex items-center justify-center text-gray-500 text-xs">
                                                    <Plus size={12} />
                                                </div>
                                            )}
                                            {item.count && (
                                                <div className="w-8 h-8 rounded-full border-2 border-[#0e0e0e] bg-[#1a1a1a] flex items-center justify-center text-white text-[10px] font-bold">
                                                    {item.count}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${item.color === 'green' ? 'bg-green-500' :
                                                            item.color === 'yellow' ? 'bg-yellow-500' :
                                                                item.color === 'red-risk' ? 'bg-red-500' :
                                                                    item.color === 'gray' ? 'bg-gray-600' :
                                                                        'bg-[#b10202]'
                                                        }`}
                                                    style={{ width: `${item.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-gray-400 w-8 text-right">{item.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${item.status === 'Completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                                item.status === 'Review' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                                    item.status === 'At Risk' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                                        item.status === 'Pending' ? 'bg-gray-800 text-gray-400 border-gray-700' :
                                                            'bg-[#b10202]/10 text-[#b10202] border-[#b10202]/20'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="text-gray-500 hover:text-white transition-colors">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Mock */}
                <div className="bg-[#1a1a1a] p-4 flex justify-between items-center border-t border-white/5">
                    <span className="text-xs text-gray-500">Showing 1 to 5 of 24 results</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-[#0e0e0e] border-white/10 text-gray-400 hover:text-white">&lt;</Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-[#b10202] border-[#b10202] text-white">1</Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-[#0e0e0e] border-white/10 text-gray-400 hover:text-white">2</Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-[#0e0e0e] border-white/10 text-gray-400 hover:text-white">3</Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-[#0e0e0e] border-white/10 text-gray-400 hover:text-white">&gt;</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
