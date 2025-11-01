import corporateEventImage from '@assets/generated_images/Corporate_event_production_15e50c25.png';
import royalEventImage from '@assets/generated_images/Saudi_royal_event_ceremony_31477189.png';

export default function WhoWeAreSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-sm font-semibold mb-4 tracking-wide"
              style={{ color: '#8c55b7' }}
              data-testid="text-who-we-are-label"
            >
              About Us
            </p>
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              data-testid="text-who-we-are-heading"
            >
              Who <span style={{ color: '#8c55b7' }}>we are</span>
            </h2>
            <p 
              className="text-lg leading-relaxed text-muted-foreground"
              data-testid="text-who-we-are-description"
            >
              Whether you have ambitious visions or detailed plans, we have the expertise and cultural insight to support every step. RdP Group is your trusted partner in event production, city marketing, and royal ceremonies—ready to guide you through every phase of planning. We work closely with our partners every day to ensure your event runs like a well-oiled machine, no matter the scale. Together, we're a unified team set on making your vision an unforgettable experience.
            </p>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            <div 
              className="absolute w-32 h-32 rounded-sm transform rotate-45"
              style={{ 
                backgroundColor: '#1bc195',
                top: '10%',
                right: '5%'
              }}
            />

            <div 
              className="absolute w-24 h-24 rounded-sm transform rotate-45"
              style={{ 
                backgroundColor: '#024442',
                bottom: '15%',
                left: '0%'
              }}
            />

            <div 
              className="absolute w-20 h-20 rounded-sm transform rotate-45"
              style={{ 
                backgroundColor: '#8c55b7',
                top: '5%',
                left: '20%'
              }}
            />

            <div 
              className="absolute w-16 h-16 rounded-sm transform rotate-45"
              style={{ 
                backgroundColor: '#1bc195',
                bottom: '20%',
                right: '15%'
              }}
            />

            <div 
              className="absolute w-72 h-72 overflow-hidden rounded-sm transform rotate-45 shadow-xl"
              style={{ 
                top: '5%',
                left: '15%'
              }}
              data-testid="diamond-image-1"
            >
              <img 
                src={corporateEventImage}
                alt="Corporate Event"
                className="w-full h-full object-cover transform -rotate-45 scale-150"
              />
            </div>

            <div 
              className="absolute w-48 h-48 overflow-hidden rounded-sm transform rotate-45 shadow-xl"
              style={{ 
                bottom: '5%',
                left: '25%'
              }}
              data-testid="diamond-image-2"
            >
              <img 
                src={royalEventImage}
                alt="Royal Event"
                className="w-full h-full object-cover transform -rotate-45 scale-150"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
