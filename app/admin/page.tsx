"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MetricCard } from "@/components/admin/metric-card"
import { VelocityChart, BillableChart } from "@/components/admin/charts"
import { ActiveDeployments, TaskQueue } from "@/components/admin/widgets"
import { Folder, CheckSquare, Clock, Calendar } from "lucide-react"

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Welcome Block */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Alex</h1>
                    <p className="text-gray-400">Here's what's happening with your projects today.</p>
                </div>
                <Button className="bg-[#b10202] hover:bg-[#8f0202] text-white font-bold">
                    <Plus size={16} className="mr-2" /> New Project
                </Button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Active Projects" value="12" icon={Folder} color="bg-blue-500" trend="+12%" />
                <MetricCard title="Pending Tasks" value="5" icon={CheckSquare} color="bg-orange-500" />
                <MetricCard title="Hours Logged" value="34.5" icon={Clock} color="bg-red-600" trend="+5%" />
                <MetricCard title="Next Deadline" value="2 Days" icon={Calendar} color="bg-purple-500" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[250px] md:h-[350px]">
                <VelocityChart />
                <BillableChart />
            </div>

            {/* Tables Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[400px]">
                <div className="lg:col-span-2">
                    <ActiveDeployments />
                </div>
                <div className="lg:col-span-1">
                    <TaskQueue />
                </div>
            </div>
        </div>
    )
}
