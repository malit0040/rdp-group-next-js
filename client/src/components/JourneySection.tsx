import { Target, Lightbulb, FileText, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import directorImage from '@assets/generated_images/Marketing_director_headshot_b771cf32.png';

const journeySteps = [
  {
    icon: Target,
    title: 'Strategy',
    description: 'We learn about your vision and key objectives to develop a winning concept.',
  },
  {
    icon: Lightbulb,
    title: 'Creative',
    description: 'We brainstorm engaging ideas and designs that perfectly match the strategy.',
  },
  {
    icon: FileText,
    title: 'Content',
    description: 'We create ways to highlight you and your mission throughout the messaging and experience.',
  },
  {
    icon: Rocket,
    title: 'Production',
    description: 'We deliver flawless event management and productions that exceed expectations.',
  },
];

export default function JourneySection() {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #024442 0%, #1a5f5c 50%, #1bc195 100%)',
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, transparent 0%, currentColor 50%, transparent 100%)`,
          color: '#1bc195'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <h2 
          className="text-5xl md:text-6xl font-bold text-white text-center mb-16"
          data-testid="text-journey-heading"
        >
          Your Journey With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                  data-testid={`icon-journey-${index}`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  data-testid={`text-journey-title-${index}`}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-white/90 text-sm leading-relaxed"
                  data-testid={`text-journey-description-${index}`}
                >
                  {step.description}
                </p>
              </div>
              {index < journeySteps.length - 1 && (
                <div 
                  className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/30"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            data-testid="button-our-process"
          >
            Our Process
          </Button>
        </div>

        <div 
          className="bg-white rounded-3xl p-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
          data-testid="container-testimonial"
        >
          <div>
            <blockquote className="text-2xl md:text-3xl font-serif text-foreground mb-6 leading-relaxed">
              "The greatest work comes from a unified team, and that team includes our clients, where we ideate, design, and deliver together."
            </blockquote>
            <div className="border-t pt-6">
              <p className="font-bold text-lg text-foreground" data-testid="text-testimonial-name">
                Ahmed Al-Rashid
              </p>
              <p className="text-muted-foreground" data-testid="text-testimonial-title">
                Managing Director, RdP Group
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              className="mt-6 rounded-full"
              style={{ backgroundColor: '#024442' }}
              data-testid="button-about-rdp"
            >
              About RdP Group
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src={directorImage}
              alt="Ahmed Al-Rashid"
              className="rounded-2xl w-full max-w-sm object-cover shadow-lg"
              data-testid="img-testimonial"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
