"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe } from "lucide-react"

const team = [
    {
        name: "Steven Ireri",
        role: "IT Consultant & Senior Enterprise Architect",
        bio: "With 15+ years building enterprise systems, I now focus on complex architecture and team leadership. I train and oversee the team to bring modern web development to clients who need senior guidance without enterprise pricing.",
        image: "bg-gradient-to-br from-gray-800 to-gray-900", // Placeholder
        icon: "S",
        links: [
            { label: "Contact", icon: Mail, url: "#" },
            { label: "LinkedIn", icon: Linkedin, url: "#" }
        ]
    },
    {
        name: "Sean Muthua",
        role: "Modern Web Specialist",
        bio: "I specialize in modern web technologies and premium user experiences. Under Steve's architectural oversight, I deliver cutting-edge solutions that combine current best practices with proven enterprise discipline.",
        image: "bg-gradient-to-br from-gray-800 to-gray-900", // Placeholder
        icon: "S",
        links: [
            { label: "GitHub", icon: Github, url: "#" },
            { label: "Portfolio", icon: Globe, url: "#" }
        ]
    }
]

export function Team() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-[#b10202] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                        Leadership
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Meet The Minds</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="group relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-900/30 transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-64 md:h-80 w-full ${member.image} relative flex items-end p-6`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                {/* Icon Badge */}
                                <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#b10202] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                                    {member.icon}
                                </div>
                            </div>

                            <div className="p-8 pt-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-[#b10202] text-xs uppercase tracking-widest font-bold mb-4">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8">
                                    {member.bio}
                                </p>

                                <div className="flex gap-6">
                                    {member.links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-wider font-bold"
                                        >
                                            <link.icon size={14} />
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
