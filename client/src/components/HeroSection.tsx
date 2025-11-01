import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export default function HeroSection({ onExploreClick, onContactClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#024442] via-[#024442] to-[#1bc195]"
        style={{
          backgroundImage: 'linear-gradient(135deg, #024442 0%, #024442 50%, #1bc195 100%)'
        }}
      />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-12 animate-in fade-in duration-1000">
          <div className="inline-block p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight">
              RdP Group
            </h1>
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl text-white/95 font-light mb-4 animate-in fade-in duration-1000 delay-200">
          A pioneering step towards a promising future
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-in fade-in duration-1000 delay-300">
          Building experiences, campaigns, and stories that move cities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in duration-1000 delay-500">
          <Button 
            size="lg"
            className="bg-white text-[#024442] hover:bg-white/90 border-2 border-white px-8 py-6 text-lg rounded-2xl min-h-14"
            onClick={onExploreClick}
            data-testid="button-explore-work"
          >
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-6 text-lg rounded-2xl min-h-14"
            onClick={onContactClick}
            data-testid="button-contact-us"
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
