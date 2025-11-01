import marketingDirector from '@assets/generated_images/Marketing_director_headshot_b771cf32.png';
import teamMember from '@assets/generated_images/Saudi_executive_team_member_d0d3e5dc.png';

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container mx-auto px-6">
        <h2 
          className="text-7xl md:text-8xl font-bold text-white text-center mb-16 tracking-wide"
          style={{ 
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.05em'
          }}
          data-testid="text-about-heading"
        >
          ABOUT US
        </h2>

        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: '#333' }}>
          <div className="bg-[#0a0a0a] p-8 md:p-12 flex items-center justify-center">
            <img 
              src={marketingDirector} 
              alt="RdP Group Leadership"
              className="w-full max-w-md object-cover rounded-sm"
              data-testid="img-about-leader"
            />
          </div>

          <div className="bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center">
            <p className="text-white/90 text-lg leading-relaxed mb-4" data-testid="text-about-description-1">
              Award-winning conglomerate that pioneered luxury event production in the Kingdom, focusing on creating unforgettable experiences that blend tradition with innovation.
            </p>
            <p className="text-white/90 text-lg leading-relaxed" data-testid="text-about-description-2">
              Our mission is to transform Saudi Arabia's event landscape, bringing world-class marketing and production excellence to cities, corporations, and royal ceremonies across the Kingdom.
            </p>
          </div>

          <div className="bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center order-last md:order-none">
            <p className="text-white/90 text-lg leading-relaxed mb-4" data-testid="text-about-description-3">
              When you partner with RdP Group, you're choosing a team dedicated to excellence in every detail. From city marketing campaigns to prestigious royal events, we deliver with precision and cultural authenticity.
            </p>
            <p className="text-white/90 text-lg leading-relaxed" data-testid="text-about-description-4">
              We believe in creating experiences that resonate, campaigns that inspire, and events that leave lasting impressions on everyone who attends.
            </p>
          </div>

          <div className="bg-[#0a0a0a] p-8 md:p-12 flex items-center justify-center">
            <img 
              src={teamMember} 
              alt="RdP Group Team"
              className="w-full max-w-md object-cover rounded-sm"
              data-testid="img-about-team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
