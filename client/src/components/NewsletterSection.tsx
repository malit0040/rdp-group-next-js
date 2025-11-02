import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsletterSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-foreground" data-testid="text-newsletter-heading">
            {t('newsletter.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-newsletter-description">
            {t('newsletter.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="pl-12 h-12 rounded-full"
                data-testid="input-newsletter-email"
              />
            </div>
            <Button
              size="lg"
              className="rounded-full bg-[#024442] hover:bg-[#024442]/90 px-8"
              data-testid="button-newsletter-submit"
            >
              {t('newsletter.button')}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <p className="text-sm text-muted-foreground" data-testid="text-newsletter-experts">
              {t('footer.aboutDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
