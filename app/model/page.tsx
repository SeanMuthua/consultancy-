import { Metadata } from "next"
import { ModelView } from "@/components/model/model-view"

export const metadata: Metadata = {
    title: "Engagement Model | Crimson Forge Digital",
    description: "Compare our engagement tracks: Senior Enterprise Architect oversight vs. Modern Web Specialist execution.",
}

export default function ModelPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <ModelView />
        </main>
    )
}
