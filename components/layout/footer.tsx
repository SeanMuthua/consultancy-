import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-white">
                            Crimson Forge<span className="text-[#b10202]">Digital</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <Link href="#" className="hover:text-red-500 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-red-500 transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-red-500 transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-red-500 transition-colors">LinkedIn</Link>
                    </div>

                    <div className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Crimson Forge Digital Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
