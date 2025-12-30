import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { CaseStudyHero } from "@/components/work/case-study-hero"
import { CaseStudyContent } from "@/components/work/case-study-content"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-black">
            <CaseStudyHero
                title={project.title}
                category={project.category}
                client={project.client}
                year={project.year}
                description={project.fullDescription}
                stats={project.stats}
            />

            {/* Hero Image */}
            <div className="container mx-auto px-4 md:px-6 mb-24">
                <div className={`w-full aspect-video rounded-3xl overflow-hidden ${project.image} relative shadow-2xl shadow-red-900/10`}>
                    {/* Placeholder for actual screenshot */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <CaseStudyContent
                    challenge={project.challenge}
                    solution={project.solution}
                    approach={project.approach}
                    results={project.results}
                    technologies={project.technologies}
                />

                {/* Next Steps CTA */}
                <div className="bg-[#111] border border-white/5 rounded-3xl p-12 text-center mb-24">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your business?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">We bring the same level of engineering excellence and strategic thinking to every project.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/booking">
                            <Button className="bg-[#b10202] hover:bg-[#8f0202] text-white font-bold h-12 px-8">
                                Start Your Project <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </Link>
                        <Link href="/work">
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 h-12 px-8">
                                View Other Work
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
