"use client"

import { TeamMemberCard } from "@/components/model/team-member-card"

export function TwoTrackSection() {
    return (
        <section className="py-20 px-4 bg-black border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <span className="text-red-500 font-mono text-sm uppercase tracking-widest">Our Structure</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">The Two-Track Model</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We combine 15+ years of enterprise discipline with modern web innovation.
                        Choose the level of seniority that fits your project needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Track 1: Steve */}
                    <div>
                        <div className="mb-6 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-red-600">Track 1: Enterprise</h2>
                            <p className="text-gray-500 text-sm mt-1">For complex systems & critical infrastructure</p>
                        </div>
                        <TeamMemberCard
                            type="senior"
                            name="Steve Ireri"
                            role="Senior Enterprise Architect"
                            image="/steve.jpg"
                            bio="With 15+ years building enterprise systems, I now focus on complex architecture and team leadership. I train and oversee the team to bring modern web development to clients who need senior guidance without enterprise pricing."
                            specializations={["System Architecture", "Cloud Infrastructure", "Legacy Migration", "Security Audit"]}
                            stats={[
                                { label: "Years Exp", value: "15+" },
                                { label: "Enterprise Projects", value: "40+" }
                            ]}
                        />
                    </div>

                    {/* Track 2: You */}
                    <div className="mt-12 md:mt-24">
                        <div className="mb-6 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-red-400">Track 2: Modern Web</h2>
                            <p className="text-gray-500 text-sm mt-1">For high-performance websites & apps</p>
                        </div>
                        <TeamMemberCard
                            type="developer"
                            name="Sean Muthua"
                            role="Modern Web Specialist"
                            image="/you.jpg"
                            bio="I specialize in modern web technologies and premium user experiences. Under Steve's architectural oversight, I deliver cutting-edge solutions that combine current best practices with proven enterprise discipline."
                            specializations={["Next.js / React", "UI/UX Design", "Performance Optimization", "Interactive 3D"]}
                            stats={[
                                { label: "Projects Delivered", value: "50+" },
                                { label: "Avg. Lighthouse", value: "98/100" }
                            ]}
                            availability="Available for new projects"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
