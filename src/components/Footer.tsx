import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 md:mb-0">
            DoYouTax
          </div>
          <p className="text-muted-foreground text-sm">
            {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
