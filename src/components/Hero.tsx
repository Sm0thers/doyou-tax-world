import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
      
      <div className="container mx-auto text-center max-w-5xl">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 font-medium">
          <TrendingDown className="mr-2 h-4 w-4" />
          International Tax Optimization
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          {t('hero_title')}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          {t('hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero_cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero_cta_secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
