import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Sample tax data for countries (in reality, this would come from a database)
const countryData: Record<string, { 
  name: string; 
  nameFr: string;
  score: number; 
  taxRate: string; 
  corporateTax: string; 
  vat: string; 
  easeOfBusiness: string;
}> = {
  'USA': { name: 'United States', nameFr: 'États-Unis', score: 65, taxRate: '24%', corporateTax: '21%', vat: 'Varies by state', easeOfBusiness: '6/10' },
  'FRA': { name: 'France', nameFr: 'France', score: 45, taxRate: '45%', corporateTax: '25%', vat: '20%', easeOfBusiness: '5/10' },
  'DEU': { name: 'Germany', nameFr: 'Allemagne', score: 55, taxRate: '42%', corporateTax: '30%', vat: '19%', easeOfBusiness: '7/10' },
  'GBR': { name: 'United Kingdom', nameFr: 'Royaume-Uni', score: 70, taxRate: '45%', corporateTax: '19%', vat: '20%', easeOfBusiness: '8/10' },
  'CHE': { name: 'Switzerland', nameFr: 'Suisse', score: 85, taxRate: '22%', corporateTax: '15%', vat: '7.7%', easeOfBusiness: '9/10' },
  'SGP': { name: 'Singapore', nameFr: 'Singapour', score: 90, taxRate: '22%', corporateTax: '17%', vat: '8%', easeOfBusiness: '10/10' },
  'ARE': { name: 'UAE', nameFr: 'EAU', score: 95, taxRate: '0%', corporateTax: '9%', vat: '5%', easeOfBusiness: '9/10' },
  'CAN': { name: 'Canada', nameFr: 'Canada', score: 68, taxRate: '33%', corporateTax: '15%', vat: '5%', easeOfBusiness: '7/10' },
  'ESP': { name: 'Spain', nameFr: 'Espagne', score: 52, taxRate: '47%', corporateTax: '25%', vat: '21%', easeOfBusiness: '6/10' },
  'ITA': { name: 'Italy', nameFr: 'Italie', score: 48, taxRate: '43%', corporateTax: '24%', vat: '22%', easeOfBusiness: '5/10' },
  'JPN': { name: 'Japan', nameFr: 'Japon', score: 60, taxRate: '45%', corporateTax: '30%', vat: '10%', easeOfBusiness: '7/10' },
  'AUS': { name: 'Australia', nameFr: 'Australie', score: 72, taxRate: '45%', corporateTax: '30%', vat: '10%', easeOfBusiness: '8/10' },
};

const getCountryColor = (score: number) => {
  if (score >= 80) return 'hsl(180 77% 47%)'; // Excellent - Teal
  if (score >= 65) return 'hsl(142 71% 45%)'; // Good - Green
  if (score >= 50) return 'hsl(45 93% 47%)'; // Moderate - Yellow
  return 'hsl(0 84% 60%)'; // High Tax - Red
};

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const { language, t } = useLanguage();

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('map_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('map_subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 147,
                  }}
                  className="w-full"
                  height={500}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const countryCode = geo.id;
                        const data = countryData[countryCode];
                        const fillColor = data ? getCountryColor(data.score) : 'hsl(210 40% 96%)';

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={fillColor}
                            stroke="hsl(214 32% 91%)"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: 'none' },
                              hover: { 
                                fill: data ? 'hsl(217 91% 55%)' : fillColor,
                                outline: 'none',
                                cursor: data ? 'pointer' : 'default',
                              },
                              pressed: { outline: 'none' },
                            }}
                            onClick={() => {
                              if (data) {
                                setSelectedCountry(countryCode);
                              }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
              </CardContent>
            </Card>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(180 77% 47%)' }} />
                <span className="text-sm text-muted-foreground">{t('map_legend_excellent')} (80+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(142 71% 45%)' }} />
                <span className="text-sm text-muted-foreground">{t('map_legend_good')} (65-79)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(45 93% 47%)' }} />
                <span className="text-sm text-muted-foreground">{t('map_legend_moderate')} (50-64)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(0 84% 60%)' }} />
                <span className="text-sm text-muted-foreground">{t('map_legend_high')} (&lt;50)</span>
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>
                  {selectedCountry && countryData[selectedCountry]
                    ? language === 'fr' 
                      ? countryData[selectedCountry].nameFr 
                      : countryData[selectedCountry].name
                    : t('click_for_details')}
                </CardTitle>
                {selectedCountry && countryData[selectedCountry] && (
                  <CardDescription>
                    Score: {countryData[selectedCountry].score}/100
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {selectedCountry && countryData[selectedCountry] ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{t('tax_rate')}</p>
                      <p className="text-2xl font-bold text-foreground">{countryData[selectedCountry].taxRate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{t('corporate_tax')}</p>
                      <p className="text-lg font-semibold text-foreground">{countryData[selectedCountry].corporateTax}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{t('vat')}</p>
                      <p className="text-lg font-semibold text-foreground">{countryData[selectedCountry].vat}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{t('ease_of_business')}</p>
                      <p className="text-lg font-semibold text-foreground">{countryData[selectedCountry].easeOfBusiness}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    {language === 'fr' 
                      ? 'Cliquez sur un pays de la carte pour voir ses informations fiscales.'
                      : 'Click on a country on the map to view its tax information.'}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
