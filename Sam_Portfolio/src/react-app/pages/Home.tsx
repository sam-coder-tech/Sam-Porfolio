import ParticleBackground from '@/react-app/components/ParticleBackground';
import Header from '@/react-app/components/Header';
import HeroSection from '@/react-app/components/HeroSection';
import EducationSection from '@/react-app/components/EducationSection';
import SkillsSection from '@/react-app/components/SkillsSection';
import ProjectsSection from '@/react-app/components/ProjectsSection';
import CertificatesSection from '@/react-app/components/CertificatesSection';
import AboutSection from '@/react-app/components/AboutSection';
import ContactSection from '@/react-app/components/ContactSection';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}
