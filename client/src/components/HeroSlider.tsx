import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import royalEventImage from '@assets/generated_images/Saudi_royal_event_ceremony_31477189.png';
import cityscapeImage from '@assets/generated_images/Riyadh_modern_cityscape_9ad139d0.png';
import corporateEventImage from '@assets/generated_images/Corporate_event_production_15e50c25.png';
import advertisingImage from '@assets/generated_images/Advertising_campaign_production_f6b49896.png';

const slides = [
  { image: royalEventImage, alt: "Royal Event Ceremony" },
  { image: cityscapeImage, alt: "Riyadh Cityscape" },
  { image: corporateEventImage, alt: "Corporate Event" },
  { image: advertisingImage, alt: "Advertising Campaign" },
];

interface HeroSliderProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export default function HeroSlider({ onExploreClick, onContactClick }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="mb-8 animate-in fade-in duration-1000">
            <div className="inline-block mb-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                Experiences that empower your vision to thrive
              </h1>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl animate-in fade-in duration-1000 delay-200">
            A pioneering step towards a promising future
          </p>

          <p className="text-lg text-white/80 mb-10 max-w-2xl animate-in fade-in duration-1000 delay-300">
            Building experiences, campaigns, and stories that move cities across the Kingdom of Saudi Arabia.
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in duration-1000 delay-500">
            <Button
              size="lg"
              className="bg-white text-[#024442] hover:bg-white/90 border-2 border-white px-8 py-6 text-lg rounded-full min-h-14"
              onClick={onExploreClick}
              data-testid="button-explore-work"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-6 text-lg rounded-full min-h-14"
              onClick={onContactClick}
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
