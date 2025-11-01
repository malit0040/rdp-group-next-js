import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { Button } from './ui/button';
import royalEventImage from '@assets/generated_images/Saudi_royal_event_ceremony_31477189.png';
import cityscapeImage from '@assets/generated_images/Riyadh_modern_cityscape_9ad139d0.png';
import corporateEventImage from '@assets/generated_images/Corporate_event_production_15e50c25.png';
import advertisingImage from '@assets/generated_images/Advertising_campaign_production_f6b49896.png';

const portfolioItems = [
  { id: 1, image: royalEventImage, title: "Royal Ceremony 2024", category: "Events" },
  { id: 2, image: cityscapeImage, title: "Riyadh Vision Campaign", category: "Advertising" },
  { id: 3, image: corporateEventImage, title: "Corporate Summit", category: "Events" },
  { id: 4, image: advertisingImage, title: "Brand Launch Campaign", category: "Advertising" },
  { id: 5, image: royalEventImage, title: "Heritage Festival", category: "Production" },
  { id: 6, image: corporateEventImage, title: "Annual Conference", category: "Events" },
  { id: 7, image: advertisingImage, title: "Digital Campaign", category: "Media" },
  { id: 8, image: cityscapeImage, title: "City Development", category: "Advertising" },
];

const categories = ['All', 'Events', 'Advertising', 'Production', 'Media'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground" data-testid="text-portfolio-heading">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our portfolio of transformative campaigns and unforgettable experiences
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-2xl"
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <PortfolioCard 
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
