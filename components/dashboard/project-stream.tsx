"use client"

import { Send, FileText, Image as ImageIcon, Mic, MoreVertical } from "lucide-react"

export function ProjectStream() {
    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-0 flex flex-col h-[500px]">
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#b10202]/10 flex items-center justify-center text-[#b10202]">
                        <span className="font-bold">#</span>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white">Project Stream</h3>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Live Updates</span>
                        </div>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-white"><MoreVertical size={16} /></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-6">
                <div className="flex justify-center">
                    <span className="bg-[#1a1a1a] border border-white/5 px-3 py-1 rounded-full text-[10px] text-gray-500 font-bold uppercase tracking-wider">Today</span>
                </div>

                {/* Sarah Message */}
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Sarah" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-xs font-bold text-white">Sarah Jenkins</span>
                            <span className="text-[10px] text-gray-500">10:42 AM</span>
                        </div>
                        <div className="bg-[#1a1a1a] border border-white/5 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl inline-block max-w-[90%] text-sm text-gray-300">
                            <p className="mb-3">Homepage mockups are ready for review. I've uploaded the PDF to the assets folder.</p>
                            {/* Attachment */}
                            <div className="flex items-center gap-3 bg-black/30 p-2 rounded-lg border border-white/5">
                                <div className="w-8 h-8 bg-red-500/10 text-red-500 rounded flex items-center justify-center">
                                    <FileText size={16} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">Homepage_v1.pdf</p>
                                    <p className="text-[10px] text-gray-500">2.4 MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-[10px] text-gray-600 italic">
                    Mike Ross viewed the file
                </div>

                {/* User Message (Right) */}
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-[10px] text-gray-500">10:45 AM</span>
                        <span className="text-xs font-bold text-white">You</span>
                    </div>
                    <div className="bg-[#b10202]/10 border border-[#b10202]/20 p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-sm text-gray-300">
                        Thanks Sarah! I'll take a look this afternoon.
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-700 overflow-hidden border border-white/10 mt-1">
                        <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=100&q=80" alt="You" />
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full bg-[#050505] border border-white/10 rounded-xl pl-10 pr-12 py-3 text-sm text-white focus:outline-none focus:border-[#b10202]/50 placeholder:text-gray-600"
                    />
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                        <ImageIcon size={16} />
                    </button>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#b10202] rounded-lg flex items-center justify-center text-white shadow-[0_0_10px_rgba(177,2,2,0.4)] hover:bg-[#8f0202]">
                        <Send size={14} />
                    </button>
                </div>
                <div className="flex gap-4 mt-3 px-1">
                    <button className="flex items-center gap-1.5 text-[10px] text-gray-500 hover:text-gray-300">
                        <ImageIcon size={12} /> Image
                    </button>
                    <button className="flex items-center gap-1.5 text-[10px] text-gray-500 hover:text-gray-300">
                        <Mic size={12} /> Voice
                    </button>
                </div>
            </div>
        </div>
    )
}
