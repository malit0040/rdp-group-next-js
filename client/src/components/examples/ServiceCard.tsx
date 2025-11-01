import ServiceCard from '../ServiceCard';
import { Building2 } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <ServiceCard 
        title="City Marketing"
        description="Strategic campaigns that elevate cities and create lasting impressions across the Kingdom."
        icon={Building2}
      />
    </div>
  );
}
