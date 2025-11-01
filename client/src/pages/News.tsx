import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import royalEventImage from '@assets/generated_images/Saudi_royal_event_ceremony_31477189.png';
import cityscapeImage from '@assets/generated_images/Riyadh_modern_cityscape_9ad139d0.png';
import corporateEventImage from '@assets/generated_images/Corporate_event_production_15e50c25.png';

const newsItems = [
  {
    id: 1,
    title: "RdP Group Delivers Historic Royal Ceremony",
    excerpt: "Successfully orchestrated one of the Kingdom's most prestigious events with over 1,000 distinguished guests.",
    date: "October 28, 2024",
    image: royalEventImage,
    category: "Events"
  },
  {
    id: 2,
    title: "Launch of Riyadh Vision 2030 Campaign",
    excerpt: "Partnering with city leadership to showcase the future of Saudi Arabia's capital through innovative marketing.",
    date: "October 15, 2024",
    image: cityscapeImage,
    category: "Campaigns"
  },
  {
    id: 3,
    title: "Award-Winning Corporate Summit Production",
    excerpt: "Recognized for excellence in event management at the Middle East Business Awards.",
    date: "September 30, 2024",
    image: corporateEventImage,
    category: "Awards"
  },
  {
    id: 4,
    title: "Expanding Our Creative Team",
    excerpt: "Welcome to five new talented professionals joining our marketing and production divisions.",
    date: "September 12, 2024",
    image: royalEventImage,
    category: "Company News"
  },
  {
    id: 5,
    title: "New Partnership with Leading Saudi Brands",
    excerpt: "Strategic collaborations to deliver innovative advertising campaigns across the Kingdom.",
    date: "August 25, 2024",
    image: cityscapeImage,
    category: "Partnerships"
  },
  {
    id: 6,
    title: "RdP Group Anniversary: 5 Years of Excellence",
    excerpt: "Celebrating five years of building connections that move cities and shape the future.",
    date: "August 10, 2024",
    image: corporateEventImage,
    category: "Milestones"
  },
];

export default function News() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-news-page-heading">
              Latest News
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Stay updated with our latest projects, achievements, and insights from the world of event management and creative advertising.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:scale-105 transition-all duration-300 hover-elevate cursor-pointer"
                data-testid={`card-news-${item.id}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                    <span className="ml-auto text-[#1bc195] font-medium">{item.category}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
