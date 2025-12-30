import { ProjectProgress } from "@/components/dashboard/project-progress"
import { Timeline } from "@/components/dashboard/timeline"
import { TeamList, AssetsList } from "@/components/dashboard/lists"
import { ProjectStream } from "@/components/dashboard/project-stream"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <ProjectProgress />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column (Timeline) */}
                <div className="lg:col-span-4">
                    <Timeline />
                </div>

                {/* Middle Column (Team & Stream) */}
                <div className="lg:col-span-4 space-y-8">
                    <TeamList />
                    <ProjectStream />
                </div>

                {/* Right Column (Assets) */}
                <div className="lg:col-span-4">
                    <AssetsList />
                </div>
            </div>
        </div>
    )
}
