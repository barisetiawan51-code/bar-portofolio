import Hero from "@/components/Hero";
import ProjectPorto from "@/components/ProjectPorto";
import Skills from "@/components/Skills";
import EducationAwards from "@/components/EducationAwards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 space-y-24 mb-24">
        <ProjectPorto />
        <Skills />
        <EducationAwards />
      </div>

      <Footer />
    </div>
  );
}
