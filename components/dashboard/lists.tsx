"use client"

import { Download, FolderOpen, FileText, Image as ImageIcon, MoreHorizontal } from "lucide-react"

export function TeamList() {
    const team = [
        { name: "Sarah Jenkins", role: "Project Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
        { name: "Mike Ross", role: "Lead Developer", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" },
        { name: "Elena Rodriguez", role: "UI Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" },
    ]

    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Project Team</h3>
                <span className="text-xs text-[#b10202] font-bold cursor-pointer hover:underline">Manage</span>
            </div>

            <div className="space-y-4">
                {team.map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden relative">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            {member.name.includes("Mike") || member.name.includes("Sarah") ? (
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0e0e0e]"></div>
                            ) : null}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function AssetsList() {
    const assets = [
        { name: "Contract_Signed.pdf", size: "2.4 MB", date: "Sept 01", type: "pdf", icon: FileText, color: "bg-red-500/10 text-red-500" },
        { name: "Brand_Guidelines.pdf", size: "1.1 MB", date: "Sept 15", type: "doc", icon: FileText, color: "bg-blue-500/10 text-blue-500" },
        { name: "Homepage_Mocks.fig", size: "4.5 MB", date: "2 hrs ago", type: "fig", icon: ImageIcon, color: "bg-purple-500/10 text-purple-500" },
        { name: "Icons_Pack.zip", size: "12 MB", date: "Sept 18", type: "zip", icon: FolderOpen, color: "bg-yellow-500/10 text-yellow-500" },
    ]

    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                    <FolderOpen size={18} className="text-[#b10202]" /> Assets
                </h3>
                <span className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded text-gray-400 border border-white/5 cursor-pointer">View All</span>
            </div>

            {/* Upload Zone */}
            <div className="border border-dashed border-white/10 rounded-xl bg-black/20 p-6 text-center mb-6 hover:border-[#b10202]/30 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-2 group-hover:bg-[#b10202]/20 group-hover:text-[#b10202] transition-colors">
                    <Download size={14} className="rotate-180" />
                </div>
                <p className="text-xs text-gray-500">Drag files here or click to upload</p>
            </div>

            <div className="space-y-3">
                {assets.map((asset) => (
                    <div key={asset.name} className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1a1a] border border-white/5 hover:bg-[#202020] transition-colors group">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${asset.color}`}>
                            <asset.icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate">{asset.name}</p>
                            <p className="text-[10px] text-gray-500">{asset.size} • {asset.date}</p>
                        </div>
                        <button className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                            <Download size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
