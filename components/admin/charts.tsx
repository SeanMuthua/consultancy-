"use client"

export function VelocityChart() {
    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-start mb-8 z-10">
                <div>
                    <h3 className="text-lg font-bold text-white">Team Velocity</h3>
                    <p className="text-xs text-gray-500">Sprint 4 Performance</p>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-bold text-white">140 pts</p>
                    <p className="text-[10px] text-green-500 font-bold uppercase">Above average</p>
                </div>
            </div>

            {/* CSS Mock Chart */}
            <div className="flex-1 flex items-end justify-between gap-1 mt-auto relative z-10 px-2">
                {/* Simple Line Path Simulation with CSS Clip Path or SVG */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#b10202]/20 to-transparent opacity-50 blur-xl"></div>

                <svg className="w-full h-[150px] overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradientRed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#b10202" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#b10202" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,90 C30,85 50,60 80,60 C110,60 130,40 160,40 C190,40 210,40 240,60 C270,80 300,50 300,50"
                        fill="none"
                        stroke="#b10202"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M0,90 C30,85 50,60 80,60 C110,60 130,40 160,40 C190,40 210,40 240,60 C270,80 300,50 300,50 V100 H0 Z"
                        fill="url(#gradientRed)"
                        opacity="0.5"
                    />
                </svg>
            </div>

            <div className="flex justify-between text-[10px] text-gray-600 font-medium mt-4 z-10">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
        </div>
    )
}

export function BillableChart() {
    return (
        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-lg font-bold text-white">Billable Hours</h3>
                    <p className="text-xs text-gray-500">vs Internal time</p>
                </div>
                <div className="flex gap-3 text-[10px]">
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span> Billable
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-gray-700"></span> Internal
                    </div>
                </div>
            </div>

            <div className="flex-1 flex items-end justify-between gap-4">
                {[
                    { bill: 40, int: 20, label: "Wk 1" },
                    { bill: 65, int: 15, label: "Wk 2" },
                    { bill: 35, int: 35, label: "Wk 3" },
                    { bill: 55, int: 25, label: "Wk 4" },
                ].map((week, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full group">
                        {/* Internal Bar */}
                        <div className="w-full bg-[#1a1a1a] rounded-t-sm hover:bg-[#252525] transition-all" style={{ height: `${week.int}%` }}></div>
                        {/* Billable Bar */}
                        <div className="w-full bg-red-600 rounded-b-sm hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]" style={{ height: `${week.bill}%` }}></div>
                        <span className="text-[10px] text-gray-600 text-center mt-2">{week.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
