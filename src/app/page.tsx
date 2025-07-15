import AboutSection from "@/Component/AboutSection";
import ContactSection from "@/Component/ContactSection";
import CounterSection from "@/Component/CounterSection";
import ExpertiseSection from "@/Component/ExpertiseSection";
import Footer from "@/Component/Footer";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";
import ProjectsSection from "@/Component/ProjectsSection";
import ServicesSection from "@/Component/ServicesSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <CounterSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
  
    </main>
  );
}