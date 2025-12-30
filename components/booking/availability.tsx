"use client"

import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react"

export function Availability() {
    return (
        <div className="rounded-2xl border border-white/5 bg-[#0e0e0e] p-6">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#b10202]/20 flex items-center justify-center text-[#b10202]">
                        <CalendarIcon size={16} />
                    </div>
                    <h3 className="text-lg font-bold text-white">Availability</h3>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-gray-500 hover:text-white"><ChevronLeft size={20} /></button>
                    <span className="text-sm font-bold text-white">October 2023</span>
                    <button className="text-white"><ChevronRight size={20} /></button>
                </div>
            </div>

            {/* Calendar Grid Mockup */}
            <div className="grid grid-cols-7 gap-2 mb-8 text-center">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(day => (
                    <div key={day} className="text-[10px] text-gray-500 font-bold mb-2">{day}</div>
                ))}

                {/* Empty Slots */}
                <div className="h-10 text-gray-700 flex items-center justify-center text-sm">28</div>
                <div className="h-10 text-gray-700 flex items-center justify-center text-sm">29</div>
                <div className="h-10 text-gray-700 flex items-center justify-center text-sm">30</div>

                {/* Days */}
                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">1</div>
                <div className="h-10 text-white flex flex-col items-center justify-center text-sm font-bold relative">
                    2
                    <span className="w-1 h-1 bg-[#b10202] rounded-full mt-1"></span>
                </div>
                <div className="h-10 text-gray-500 flex items-center justify-center text-sm">3</div>
                <div className="h-10 text-gray-500 flex items-center justify-center text-sm">4</div>

                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">5</div>
                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">6</div>
                <div className="h-10 text-white flex flex-col items-center justify-center text-sm font-bold relative">
                    7
                    <span className="w-1 h-1 bg-[#b10202] rounded-full mt-1"></span>
                </div>
                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">8</div>
                <div className="h-10 bg-[#b10202] rounded-lg text-white flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(177,2,2,0.5)]">9</div>
                <div className="h-10 text-gray-500 flex items-center justify-center text-sm">10</div>
                <div className="h-10 text-gray-500 flex items-center justify-center text-sm">11</div>

                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">12</div>
                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">13</div>
                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">14</div>
                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">15</div>
                <div className="h-10 text-white flex items-center justify-center text-sm font-bold">16</div>
                <div className="h-10 text-gray-500 flex items-center justify-center text-sm">17</div>
                <div className="h-10 text-gray-500 flex items-center justify-center text-sm">18</div>
            </div>

            {/* Time Slots */}
            <div className="border-t border-white/5 pt-6">
                <h4 className="text-xs text-white font-bold mb-4">Available Slots for Oct 9</h4>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-gray-500 text-xs font-bold">09:00 AM</button>
                    <button className="px-4 py-2 rounded-lg bg-[#b10202] text-white text-xs font-bold shadow-lg">02:00 PM</button>
                    <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-gray-500 text-xs font-bold">04:30 PM</button>
                </div>
            </div>
        </div>
    )
}
