import PortfolioCard from '../PortfolioCard';
import eventImage from '@assets/generated_images/Saudi_royal_event_ceremony_31477189.png';

export default function PortfolioCardExample() {
  return (
    <div className="p-8 bg-background">
      <PortfolioCard 
        image={eventImage}
        title="Royal Ceremony 2024"
        category="Events"
      />
    </div>
  );
}
