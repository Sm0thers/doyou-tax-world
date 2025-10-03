import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_home: 'Home',
    nav_guides: 'Guides',
    nav_simulators: 'Simulators',
    nav_map: 'Interactive Map',
    hero_title: 'Navigate International Tax with Confidence',
    hero_subtitle: 'Expert guidance for expatriation, impatriation, and global tax optimization',
    hero_cta: 'Explore Countries',
    hero_cta_secondary: 'Learn More',
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive solutions for international mobility',
    service_guides_title: 'Country Guides',
    service_guides_desc: 'Detailed expatriation guides covering tax systems, residency requirements, and living costs for every country.',
    service_simulators_title: 'Tax Simulators',
    service_simulators_desc: 'Calculate and compare tax obligations across countries. Make informed decisions about your international move.',
    service_map_title: 'Interactive World Map',
    service_map_desc: 'Visualize tax-friendliness globally. Countries are scored and color-coded for easy comparison.',
    map_title: 'Global Tax Landscape',
    map_subtitle: 'Click on any country to view detailed tax information',
    map_legend_excellent: 'Excellent',
    map_legend_good: 'Good',
    map_legend_moderate: 'Moderate',
    map_legend_high: 'High Tax',
    footer_rights: '© 2025 DoYouTax. All rights reserved.',
    tax_rate: 'Tax Rate',
    corporate_tax: 'Corporate Tax',
    vat: 'VAT',
    ease_of_business: 'Ease of Business',
    click_for_details: 'Click for details',
  },
  fr: {
    nav_home: 'Accueil',
    nav_guides: 'Guides',
    nav_simulators: 'Simulateurs',
    nav_map: 'Carte Interactive',
    hero_title: 'Naviguez la Fiscalité Internationale en Toute Confiance',
    hero_subtitle: 'Conseils experts pour l\'expatriation, l\'impatriation et l\'optimisation fiscale mondiale',
    hero_cta: 'Explorer les Pays',
    hero_cta_secondary: 'En Savoir Plus',
    services_title: 'Nos Services',
    services_subtitle: 'Des solutions complètes pour la mobilité internationale',
    service_guides_title: 'Guides par Pays',
    service_guides_desc: 'Guides d\'expatriation détaillés couvrant les systèmes fiscaux, conditions de résidence et coûts de vie.',
    service_simulators_title: 'Simulateurs Fiscaux',
    service_simulators_desc: 'Calculez et comparez les obligations fiscales entre pays. Prenez des décisions éclairées.',
    service_map_title: 'Carte Mondiale Interactive',
    service_map_desc: 'Visualisez l\'attractivité fiscale mondiale. Les pays sont notés et colorés pour une comparaison facile.',
    map_title: 'Paysage Fiscal Mondial',
    map_subtitle: 'Cliquez sur un pays pour voir les informations fiscales détaillées',
    map_legend_excellent: 'Excellent',
    map_legend_good: 'Bon',
    map_legend_moderate: 'Modéré',
    map_legend_high: 'Fiscalité Élevée',
    footer_rights: '© 2025 DoYouTax. Tous droits réservés.',
    tax_rate: 'Taux d\'Imposition',
    corporate_tax: 'Impôt sur Sociétés',
    vat: 'TVA',
    ease_of_business: 'Facilité des Affaires',
    click_for_details: 'Cliquez pour plus de détails',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
