import Header from '@/components/Header';
import ServicesHero from '@/components/ServicesHero';
import ServicesSection from '@/components/ServicesSection';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <div className="bg-white py-12">
        <ServicesSection />
        <ImpactSection />
      </div>
      <Footer />
    </div>
  );
}
