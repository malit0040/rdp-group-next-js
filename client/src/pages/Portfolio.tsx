import Header from '@/components/Header';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-portfolio-page-heading">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our collection of transformative campaigns, prestigious events, and creative excellence across the Kingdom.
          </p>
        </div>
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
}
