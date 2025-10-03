import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DoYouTax
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav_home')}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav_guides')}
            </a>
            <a href="#map" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav_map')}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span className="font-semibold">{language === 'en' ? 'FR' : 'EN'}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
