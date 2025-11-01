import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useState } from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export default function TeamMemberCard({ name, role, image, linkedinUrl }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card 
      className="p-6 text-center hover-elevate transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative inline-block mb-4">
        <Avatar className="w-32 h-32 border-4 border-white">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">{initials}</AvatarFallback>
        </Avatar>
        
        {isHovered && linkedinUrl && (
          <div className="absolute inset-0 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer">
            <Linkedin className="h-8 w-8 text-white" />
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {name}
      </h3>
      <p className="text-muted-foreground" data-testid={`text-role-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {role}
      </p>
    </Card>
  );
}
