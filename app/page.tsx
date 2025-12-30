import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { FeaturedWork } from "@/components/home/featured-work";
import { Contact } from "@/components/home/contact";

import { AboutPreview } from "@/components/home/about-preview";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutPreview />
      <Services />
      <Process />
      <FeaturedWork />
      <Contact />
    </main>
  );
}
