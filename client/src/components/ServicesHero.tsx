import corporateEventImage from '@assets/generated_images/Corporate_event_production_15e50c25.png';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={corporateEventImage}
          alt="RdP Group Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative w-full">
        <div 
          className="bg-white pt-16 pb-12 px-6"
          style={{
            borderTopLeftRadius: '60px',
            borderTopRightRadius: '60px',
          }}
        >
          <div className="container mx-auto max-w-4xl">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
              style={{ fontFamily: 'Georgia, serif' }}
              data-testid="text-services-hero-heading"
            >
              {t('servicesPage.subtitle')}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
