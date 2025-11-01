import { useLocation } from 'wouter';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import HorizontalAccordion from '@/components/HorizontalAccordion';
import ImpactSection from '@/components/ImpactSection';
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
      <AboutSection />
      <HorizontalAccordion />
      <ImpactSection />
      <Footer />
    </div>
  );
}
