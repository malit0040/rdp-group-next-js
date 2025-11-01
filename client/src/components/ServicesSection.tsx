import ServiceCard from './ServiceCard';
import { Building2, Users, Briefcase, HeartHandshake } from 'lucide-react';

const services = [
  {
    title: "Urban Consulting and Innovation",
    description: "Developing visual and narrative identities that reflect the city's personality and culture",
    icon: Building2
  },
  {
    title: "Smart Promotion and Visitor Experience",
    description: "Designing interactive experiences that introduce visitors to the city in an innovative way",
    icon: Users
  },
  {
    title: "Investment Services",
    description: "Highlighting the city's strengths and investment opportunities to attract investors",
    icon: Briefcase
  },
  {
    title: "Community Engagement",
    description: "Enhancing local community belonging and building bridges of cultural cooperation",
    icon: HeartHandshake
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground" data-testid="text-services-heading">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions that bridge innovation and culture
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
