"use client"

import { MoreHorizontal, Circle } from "lucide-react"

export function ActiveDeployments() {
    const deployments = [
        { name: "Cyberpunk Overhaul", client: "Arasaka Corp", status: "Active", due: "Oct 30", progress: 75 },
        { name: "Neon Grid Expansion", client: "Militech", status: "In Review", due: "Nov 12", progress: 90 },
        { name: "Orbital Data Mining", client: "Biotechnica", status: "Pending", due: "Dec 01", progress: 20 },
    ]

    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Active Deployments</h3>
                <span className="text-xs text-[#b10202] font-bold cursor-pointer hover:underline">View All</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="text-[10px] text-gray-500 uppercase tracking-wider border-b border-white/5">
                        <tr>
                            <th className="font-semibold pb-3 w-1/3">Project Name</th>
                            <th className="font-semibold pb-3">Client</th>
                            <th className="font-semibold pb-3">Status</th>
                            <th className="font-semibold pb-3">Due</th>
                            <th className="font-semibold pb-3 w-1/5">Progress</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {deployments.map((item) => (
                            <tr key={item.name} className="group">
                                <td className="py-4 font-bold text-white text-sm">{item.name}</td>
                                <td className="py-4 text-gray-400 text-xs">{item.client}</td>
                                <td className="py-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${item.status === 'Active' ? 'bg-[#b10202]/20 text-[#b10202]' :
                                            item.status === 'In Review' ? 'bg-yellow-500/10 text-yellow-500' :
                                                'bg-gray-800 text-gray-400'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-4 text-white text-xs font-mono">{item.due}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${item.status === 'In Review' ? 'bg-yellow-500' : 'bg-[#b10202]'}`}
                                                style={{ width: `${item.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-[10px] text-gray-400">{item.progress}%</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export function TaskQueue() {
    const tasks = [
        { id: 1, title: "Review API Docs for v2.0", due: "Due Today", sub: "Cyberpunk Project", active: true },
        { id: 2, title: "Fix Grid Layout Bug", due: "Due Tomorrow", sub: "Neon Grid" },
        { id: 3, title: "Client Meeting Prep", due: "Oct 28", sub: "General" },
        { id: 4, title: "Server Migration", due: "Nov 01", sub: "Internal" },
    ]

    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">My Task Queue</h3>
                <button className="text-gray-500 hover:text-white"><MoreHorizontal size={16} /></button>
            </div>

            <div className="space-y-3">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`p-4 rounded-xl border flex items-start gap-4 transition-colors cursor-pointer ${task.active
                                ? "bg-[#1a1a1a] border-[#b10202]/50"
                                : "bg-[#111] border-white/5 hover:border-white/10"
                            }`}
                    >
                        <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${task.active ? "border-[#b10202]" : "border-gray-600"
                            }`}>
                            {task.active && <div className="w-2 h-2 rounded-full bg-[#b10202]"></div>}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-white mb-0.5">{task.title}</h4>
                            <p className="text-[10px] text-gray-500">{task.due} • {task.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
