import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-vertex-bg text-vertex-silver">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
