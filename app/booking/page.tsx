import { BookingHeader } from "@/components/booking/booking-header"
import { ScopeDefinition } from "@/components/booking/scope-definition"
import { ProjectBrief } from "@/components/booking/project-brief"
import { Availability } from "@/components/booking/availability"
import { BookingSummary } from "@/components/booking/booking-summary"

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        <BookingHeader />
                        <ScopeDefinition />
                        <ProjectBrief />
                        <Availability />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <BookingSummary />
                    </div>

                </div>
            </div>
        </main>
    )
}
