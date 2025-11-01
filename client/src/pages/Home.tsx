import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ImpactSection from '@/components/ImpactSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection 
        onExploreClick={() => scrollToSection('portfolio')}
        onContactClick={() => scrollToSection('contact')}
      />
      <div id="about">
        <AboutSection />
      </div>
      <ServicesSection />
      <ImpactSection />
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <TeamSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
