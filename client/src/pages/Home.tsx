import { useLocation } from 'wouter';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import HorizontalAccordion from '@/components/HorizontalAccordion';
import ImpactSection from '@/components/ImpactSection';
import NewsletterSection from '@/components/NewsletterSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider 
        onExploreClick={() => setLocation('/portfolio')}
        onContactClick={() => setLocation('/contact')}
      />
      <ImpactSection />
      <HorizontalAccordion />
      <WhoWeAreSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
