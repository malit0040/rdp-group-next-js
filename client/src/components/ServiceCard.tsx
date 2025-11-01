import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card 
      className="transition-all duration-300 hover:scale-105 hover:border-[#1bc195] hover-elevate cursor-pointer"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader className="pb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#024442] to-[#1bc195] flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
