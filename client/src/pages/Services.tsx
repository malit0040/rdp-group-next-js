import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-services-page-heading">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive solutions that bridge innovation and culture, delivering excellence across the Kingdom of Saudi Arabia.
          </p>
        </div>
        <ServicesSection />
        <ImpactSection />
      </div>
      <Footer />
    </div>
  );
}
