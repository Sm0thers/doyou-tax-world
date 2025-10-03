import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calculator, Map } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BookOpen,
      title: t('service_guides_title'),
      description: t('service_guides_desc'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Calculator,
      title: t('service_simulators_title'),
      description: t('service_simulators_desc'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Map,
      title: t('service_map_title'),
      description: t('service_map_desc'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('services_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-shadow duration-300 bg-card"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
