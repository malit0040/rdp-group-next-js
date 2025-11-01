import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Riyadh Projects Counter',
    description: 'A media platform interested in publishing the latest developments of Riyadh city projects, their news and details',
    year: '2024',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Riyadh Colors',
    description: 'A platform that cares about publishing all events and exhibitions and focusing on small and medium projects in the capital',
    year: '2024',
    status: 'Completed',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-projects-heading">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our commitment to transforming urban experiences across the Kingdom
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
                    <span className="text-sm" data-testid={`text-project-year-${project.id}`}>{project.year}</span>
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
