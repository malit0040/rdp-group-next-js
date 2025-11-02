import Header from '@/components/Header';
import ServicesHero from '@/components/ServicesHero';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Briefcase, HeartHandshake, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 1,
      title: t('services.urban.title'),
      description: t('services.urban.desc'),
      icon: Building2,
      offerings: [
        t('servicesPage.urban.offering1'),
        t('servicesPage.urban.offering2'),
        t('servicesPage.urban.offering3'),
        t('servicesPage.urban.offering4'),
      ]
    },
    {
      id: 2,
      title: t('services.promotion.title'),
      description: t('services.promotion.desc'),
      icon: Users,
      offerings: [
        t('servicesPage.promotion.offering1'),
        t('servicesPage.promotion.offering2'),
        t('servicesPage.promotion.offering3'),
        t('servicesPage.promotion.offering4'),
      ]
    },
    {
      id: 3,
      title: t('services.investment.title'),
      description: t('services.investment.desc'),
      icon: Briefcase,
      offerings: [
        t('servicesPage.investment.offering1'),
        t('servicesPage.investment.offering2'),
        t('servicesPage.investment.offering3'),
        t('servicesPage.investment.offering4'),
      ]
    },
    {
      id: 4,
      title: t('services.community.title'),
      description: t('services.community.desc'),
      icon: HeartHandshake,
      offerings: [
        t('servicesPage.community.offering1'),
        t('servicesPage.community.offering2'),
        t('servicesPage.community.offering3'),
        t('servicesPage.community.offering4'),
      ]
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="hover-elevate" data-testid={`card-service-${service.id}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#024442' }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3" data-testid={`text-service-title-${service.id}`}>
                        {service.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground mb-6" data-testid={`text-service-description-${service.id}`}>
                        {service.description}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {t('servicesPage.whatWeOffer')}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 ml-20">
                    {service.offerings.map((offering, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3"
                        data-testid={`text-service-offering-${service.id}-${index}`}
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1bc195' }} />
                        <span className="text-base text-foreground">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
