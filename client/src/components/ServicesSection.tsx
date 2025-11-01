import ServiceCard from './ServiceCard';
import { Building2, Users, Crown, Megaphone, FileText, Video, BarChart3, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "City Marketing",
    description: "Strategic campaigns that elevate cities and create lasting impressions across the Kingdom.",
    icon: Building2
  },
  {
    title: "Corporate Event Management",
    description: "Flawless execution of corporate events that inspire and engage your audience.",
    icon: Users
  },
  {
    title: "Royal Event Production",
    description: "Prestigious ceremonies crafted with precision, elegance, and cultural resonance.",
    icon: Crown
  },
  {
    title: "Creative Advertising",
    description: "Innovative campaigns that connect brands with their audiences authentically.",
    icon: Megaphone
  },
  {
    title: "Media Content Writing",
    description: "Compelling narratives that resonate with truth, clarity, and vision.",
    icon: FileText
  },
  {
    title: "Visual Production",
    description: "Stunning visuals that capture emotion, movement, and the essence of your story.",
    icon: Video
  },
  {
    title: "Infographics & Design",
    description: "Data-driven design that transforms complex information into visual clarity.",
    icon: BarChart3
  },
  {
    title: "Campaign Management",
    description: "End-to-end campaign orchestration that delivers measurable impact.",
    icon: TrendingUp
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
