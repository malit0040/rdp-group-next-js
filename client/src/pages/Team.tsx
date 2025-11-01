import Header from '@/components/Header';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function Team() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-6xl font-bold mb-6 text-foreground" data-testid="text-team-page-heading">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            The passionate professionals behind RdP Group, dedicated to bringing your vision to life with royal precision and creative integrity.
          </p>
        </div>
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
}
