import { Card } from "@/components/ui/card";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
}

export default function PortfolioCard({ image, title, category }: PortfolioCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 border-0"
      data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#024442]/95 via-[#024442]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <div className="text-sm text-[#1bc195] font-medium mb-2">{category}</div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </Card>
  );
}
