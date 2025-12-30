import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-[#050505]">
            <DashboardHeader />
            <main className="container mx-auto px-4 md:px-6 py-8">
                {children}
            </main>
        </div>
    )
}
