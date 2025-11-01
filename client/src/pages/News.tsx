import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Star } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: 'Company News',
    title: 'Launching a New Urban Identity Initiative',
    excerpt: 'We are proud to announce the launch of our new initiative to develop the urban identity of Saudi cities, which aims to...',
    date: 'January 15, 2025',
    featured: true,
  },
  {
    id: 2,
    category: 'Partnerships',
    title: 'Tourism Promotion Event Success',
    excerpt: 'Our latest tourism promotion event achieved great success with the participation of more than 500 visitors from around the world...',
    date: 'January 10, 2025',
    featured: true,
  },
  {
    id: 3,
    category: 'Events',
    title: 'New Strategic Partnership',
    excerpt: 'We announce our new strategic partnership with several government and private entities to enhance investment in Saudi cities...',
    date: 'January 5, 2025',
    featured: false,
  },
  {
    id: 4,
    category: 'Achievements',
    title: 'Digital Transformation Success in Historic Jeddah',
    excerpt: 'Completion of an interactive digital platform project that introduces visitors to the history and culture of historic Jeddah through augmented reality technologies',
    date: 'December 28, 2024',
    featured: false,
  },
  {
    id: 5,
    category: 'Events',
    title: 'Workshop: The Future of Urban Marketing in the Kingdom',
    excerpt: 'Organizing a specialized workshop for those interested in urban marketing and innovation in city development',
    date: 'December 20, 2024',
    featured: false,
  },
  {
    id: 6,
    category: 'Awards',
    title: 'Excellence Award in Urban Marketing 2024',
    excerpt: 'The company wins the Excellence Award in Urban Marketing from the Arab Towns Organization for 2024',
    date: 'December 15, 2024',
    featured: false,
  },
];

export default function News() {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Company News': 'bg-blue-100 text-blue-800',
      'Partnerships': 'bg-purple-100 text-purple-800',
      'Events': 'bg-green-100 text-green-800',
      'Achievements': 'bg-yellow-100 text-yellow-800',
      'Awards': 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-news-heading">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about our latest projects, achievements, and industry insights
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {newsItems.map((item) => (
              <Card 
                key={item.id} 
                className={`hover-elevate ${item.featured ? 'border-2 border-primary' : ''}`}
                data-testid={`card-news-${item.id}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Badge 
                        className={getCategoryColor(item.category)}
                        data-testid={`badge-news-category-${item.id}`}
                      >
                        {item.category}
                      </Badge>
                      {item.featured && (
                        <Badge 
                          className="bg-amber-100 text-amber-800 flex items-center gap-1"
                          data-testid={`badge-news-featured-${item.id}`}
                        >
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span data-testid={`text-news-date-${item.id}`}>{item.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mt-4" data-testid={`text-news-title-${item.id}`}>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed" data-testid={`text-news-excerpt-${item.id}`}>
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="group px-0"
                    data-testid={`button-news-read-${item.id}`}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
