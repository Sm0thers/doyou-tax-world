import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import InteractiveMap from '@/components/InteractiveMap';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <InteractiveMap />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
