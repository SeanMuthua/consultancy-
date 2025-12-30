import { ServicesHero } from "@/components/services/services-hero";
import { Offerings } from "@/components/services/offerings";
import { ProjectEstimator } from "@/components/services/project-estimator";
import { Newsletter } from "@/components/services/newsletter";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black">
            <ServicesHero />
            <Offerings />
            <ProjectEstimator />
            <Newsletter />
        </main>
    );
}
