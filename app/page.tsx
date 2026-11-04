import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectPorto from "@/components/ProjectPorto";
import Skills from "@/components/Skills";
import EducationAwards from "@/components/EducationAwards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col gap-16 md:gap-24 mb-16 md:mb-24">
        <About />
        <ProjectPorto />
        <Skills />
        <EducationAwards />
      </div>

      <Footer />
    </div>
  );
}
