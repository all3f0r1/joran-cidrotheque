import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-joran.png" alt="JORAN Logo" className="w-12 h-12" />
              <div>
                <div className="text-xl font-bold text-primary leading-none">JORAN</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Cidrothèque</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('home.hero.subtitle')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rue Jacques Jansen 3<br />1030 Schaerbeek, Belgique</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+3223150144" className="hover:text-primary transition-colors">
                  +32 2 315 01 44
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:joran.cidres@gmail.com" className="hover:text-primary transition-colors">
                  joran.cidres@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact.hours')}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <div className="font-medium text-foreground">{t('home.hours.wed-sun')}</div>
                <div>{t('home.hours.time')}</div>
              </div>
              <div className="text-xs">{t('home.hours.closed')}</div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} JORAN - Cidrothèque. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
