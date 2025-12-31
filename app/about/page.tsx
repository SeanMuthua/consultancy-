import { AboutHero } from "@/components/about/about-hero"
import { Stats } from "@/components/about/stats"
import { Mission } from "@/components/about/mission"
import { Values } from "@/components/about/values"
import { Team } from "@/components/about/team"
import { AboutCTA } from "@/components/about/about-cta"
import { Newsletter } from "@/components/services/newsletter"
import { TwoTrackSection } from "@/components/model/two-track-section"
import { ModelView } from "@/components/model/model-view"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <AboutHero />
            <Stats />
            <Mission />
            <Values />
            <Team />
            <TwoTrackSection />
            <ModelView />
            <AboutCTA />
            <Newsletter />
        </main>
    )
}
