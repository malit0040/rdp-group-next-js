import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-12">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
