import Header from '@/components/Header';
import ServicesHero from '@/components/ServicesHero';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Briefcase, HeartHandshake, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Urban Consulting and Innovation",
    description: "Developing visual and narrative identities that reflect the city's personality and culture",
    icon: Building2,
    offerings: [
      "Preparing long-term strategic plans for cities",
      "Developing comprehensive visual identity for the city",
      "Urban studies and future planning",
      "City branding strategies"
    ]
  },
  {
    id: 2,
    title: "Smart Promotion and Visitor Experience",
    description: "Designing interactive experiences that introduce visitors to the city in an innovative way",
    icon: Users,
    offerings: [
      "Designing visitor and resident journeys",
      "Seasonal promotional campaigns",
      "Interactive events",
      "Organizing local events and festivals"
    ]
  },
  {
    id: 3,
    title: "Investment Services",
    description: "Highlighting the city's strengths and investment opportunities to attract investors",
    icon: Briefcase,
    offerings: [
      "Marketing investment opportunities",
      "Strategic partnerships and international cooperation",
      "Organizing introductory tours for investors",
      "Targeted promotional campaigns"
    ]
  },
  {
    id: 4,
    title: "Community Engagement and Cultural Exchange Services",
    description: "Enhancing local community belonging and building bridges of cultural cooperation",
    icon: HeartHandshake,
    offerings: [
      "Designing community engagement programs",
      "Activating local and creative communities",
      "Organizing cultural and social events",
      "International events and cultural exchange"
    ]
  }
];

export default function Services() {
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
                      <CardTitle className="text-3xl mb-3" data-testid={`text-service-title-${service.id}`}>
                        {service.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground mb-6" data-testid={`text-service-description-${service.id}`}>
                        {service.description}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        What We Offer:
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
