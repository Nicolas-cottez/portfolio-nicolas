"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import NeuralBackground3D from "@/components/NeuralBackground3D";
import Sidebar from "@/components/Sidebar";
import RightColumn from "@/components/RightColumn";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen overflow-x-hidden text-neutral-100">
        <NeuralBackground3D />
        <Navbar />
        <ScrollProgress />
        <Sidebar />
        <RightColumn />

        <section id="home" className="relative z-10">
          <HeroSection />
        </section>

        <section id="about" className="relative z-10">
          <AboutSection />
        </section>

        <section id="experience" className="relative z-10">
          <ExperienceSection />
        </section>

        <section id="projects" className="relative z-10">
          <ProjectsSection />
        </section>

        <section id="contact" className="relative z-10">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
