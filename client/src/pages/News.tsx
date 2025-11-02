import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function News() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  
  const newsItems = [
    {
      id: 1,
      categoryKey: 'news.category.companyNews',
      titleKey: 'news.item1.title',
      excerptKey: 'news.item1.excerpt',
      dateKey: 'news.item1.date',
      featured: true,
    },
    {
      id: 2,
      categoryKey: 'news.category.partnerships',
      titleKey: 'news.item2.title',
      excerptKey: 'news.item2.excerpt',
      dateKey: 'news.item2.date',
      featured: true,
    },
    {
      id: 3,
      categoryKey: 'news.category.events',
      titleKey: 'news.item3.title',
      excerptKey: 'news.item3.excerpt',
      dateKey: 'news.item3.date',
      featured: false,
    },
    {
      id: 4,
      categoryKey: 'news.category.achievements',
      titleKey: 'news.item4.title',
      excerptKey: 'news.item4.excerpt',
      dateKey: 'news.item4.date',
      featured: false,
    },
    {
      id: 5,
      categoryKey: 'news.category.events',
      titleKey: 'news.item5.title',
      excerptKey: 'news.item5.excerpt',
      dateKey: 'news.item5.date',
      featured: false,
    },
    {
      id: 6,
      categoryKey: 'news.category.awards',
      titleKey: 'news.item6.title',
      excerptKey: 'news.item6.excerpt',
      dateKey: 'news.item6.date',
      featured: false,
    },
  ];
  
  const getCategoryColor = (categoryKey: string) => {
    const colors: Record<string, string> = {
      'news.category.companyNews': 'bg-blue-100 text-blue-800',
      'news.category.partnerships': 'bg-purple-100 text-purple-800',
      'news.category.events': 'bg-green-100 text-green-800',
      'news.category.achievements': 'bg-yellow-100 text-yellow-800',
      'news.category.awards': 'bg-red-100 text-red-800',
    };
    return colors[categoryKey] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-news-heading">
              {t('news.heading')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('news.subtitle')}
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
                        className={getCategoryColor(item.categoryKey)}
                        data-testid={`badge-news-category-${item.id}`}
                      >
                        {t(item.categoryKey)}
                      </Badge>
                      {item.featured && (
                        <Badge 
                          className="bg-amber-100 text-amber-800 flex items-center gap-1"
                          data-testid={`badge-news-featured-${item.id}`}
                        >
                          <Star className="h-3 w-3 fill-current" />
                          {t('news.featured')}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span data-testid={`text-news-date-${item.id}`}>{t(item.dateKey)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mt-4" data-testid={`text-news-title-${item.id}`}>
                    {t(item.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed" data-testid={`text-news-excerpt-${item.id}`}>
                    {t(item.excerptKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="group px-0"
                    data-testid={`button-news-read-${item.id}`}
                  >
                    {t('news.readMore')}
                    {isRTL ? (
                      <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
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
