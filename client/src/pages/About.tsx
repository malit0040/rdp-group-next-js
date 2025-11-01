import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <ServicesSection />
        <ImpactSection />
      </div>
      <Footer />
    </div>
  );
}
