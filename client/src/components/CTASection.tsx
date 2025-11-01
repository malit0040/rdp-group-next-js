import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden mb-0">
      <div 
        className="relative py-24 px-6"
        style={{
          background: 'linear-gradient(135deg, #024442 0%, #1a5f5c 50%, #024442 100%)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 0%, currentColor 50%, transparent 100%)`,
            color: '#1bc195'
          }}
        />

        <div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #1bc195 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="max-w-xl">
            <h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
              data-testid="text-cta-heading"
            >
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/80 mb-8" data-testid="text-cta-description">
              {t('cta.description')}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-white text-foreground hover:bg-white/90 border-white px-8 group"
              data-testid="button-cta-connect"
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
