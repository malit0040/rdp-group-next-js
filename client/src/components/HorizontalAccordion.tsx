import { useState } from 'react';
import corporateEventImage from '@assets/generated_images/Corporate_event_production_15e50c25.png';
import royalEventImage from '@assets/generated_images/Saudi_royal_event_ceremony_31477189.png';
import advertisingImage from '@assets/generated_images/Advertising_campaign_production_f6b49896.png';
import cityscapeImage from '@assets/generated_images/Riyadh_modern_cityscape_9ad139d0.png';

const accordionItems = [
  {
    id: 1,
    title: 'City Marketing',
    description: 'Strategic campaigns that elevate cities and create lasting impressions',
    image: cityscapeImage,
  },
  {
    id: 2,
    title: 'Corporate Events',
    description: 'Flawless execution of corporate events that inspire and engage',
    image: corporateEventImage,
  },
  {
    id: 3,
    title: 'Royal Ceremonies',
    description: 'Prestigious ceremonies crafted with precision and elegance',
    image: royalEventImage,
  },
  {
    id: 4,
    title: 'Creative Campaigns',
    description: 'Innovative advertising that connects brands authentically',
    image: advertisingImage,
  },
];

export default function HorizontalAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground" data-testid="text-services-heading">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Excellence in every experience we create
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex h-[600px] gap-2 overflow-hidden">
          {accordionItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative cursor-pointer overflow-hidden group ${
                activeIndex === index ? 'flex-[4]' : 'flex-[0.5]'
              }`}
              style={{
                transition: 'flex 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              data-testid={`accordion-item-${index}`}
            >
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 transition-opacity duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-80'
                  }`}
                />
              </div>

              <div className="relative h-full flex flex-col justify-between p-8">
                {activeIndex === index ? (
                  <div className="flex flex-col justify-end h-full">
                    <div className="mb-4">
                      <div className="text-8xl font-bold text-white/20 mb-2" data-testid={`text-number-${index}`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 
                        className="text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: 'Georgia, serif' }}
                        data-testid={`text-title-${index}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-lg text-white/90 max-w-md" data-testid={`text-description-${index}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="flex items-center justify-center w-full h-full">
                      <h3
                        className="text-3xl font-bold text-white whitespace-nowrap transform -rotate-90 origin-center"
                        style={{ 
                          fontFamily: 'Georgia, serif',
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          transform: 'rotate(180deg)'
                        }}
                        data-testid={`text-collapsed-title-${index}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}

                {activeIndex === index && (
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex gap-2">
                      {accordionItems.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            idx === activeIndex 
                              ? 'w-12 bg-white' 
                              : 'w-8 bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {activeIndex !== index && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="text-6xl font-bold text-white/30"
                    data-testid={`text-collapsed-number-${index}`}
                  >
                    {index + 1}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
