import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: t('projects.riyadhProjects'),
      description: t('projects.riyadhProjectsDesc'),
      year: '2024',
      status: t('projects.completed'),
    },
    {
      id: 2,
      title: t('projects.riyadhColors'),
      description: t('projects.riyadhColorsDesc'),
      year: '2024',
      status: t('projects.completed'),
    },
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-projects-heading">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <Card key={project.id} className="hover-elevate" data-testid={`card-project-${project.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </CardTitle>
                    <Badge 
                      className="flex items-center gap-1 bg-green-100 text-green-800 hover:bg-green-100"
                      data-testid={`badge-project-status-${project.id}`}
                    >
                      <CheckCircle className="h-3 w-3" />
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm" data-testid={`text-project-year-${project.id}`}>{t('projects.year')}: {project.year}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
