import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Wifi } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize Google Maps
    const initMap = () => {
      const position = { lat: 50.8533064, lng: 4.3885464 };
      
      const map = new google.maps.Map(mapRef.current!, {
        zoom: 16,
        center: position,
        mapTypeControl: false,
      });

      new google.maps.Marker({
        position: position,
        map: map,
        title: 'JORAN - Cidrothèque',
      });
    };

    // Load Google Maps script
    if (typeof google === 'undefined') {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('contact.address')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rue Jacques Jansen 3<br />
                  1030 Schaerbeek<br />
                  Belgique
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  {t('contact.phone')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+3223150144" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +32 2 315 01 44
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  {t('contact.email')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:joran.cidres@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  joran.cidres@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {t('contact.hours')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground">{t('home.hours.wed-sun')}</div>
                    <div>{t('home.hours.time')}</div>
                  </div>
                  <div className="text-sm">{t('home.hours.closed')}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  {t('contact.wifi')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono font-bold text-lg">mangezdespommes</p>
                <p className="text-sm text-muted-foreground mt-2">{t('contact.blankets')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0">
                <div className="w-full h-[600px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.5895476891777!2d4.386356776902953!3d50.85330647163097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3ef472da281%3A0xd32bac99ee596a00!2sJORAN%20-%20Cidroth%C3%A8que!5e0!3m2!1sen!2sbe!4v1699999999999!5m2!1sen!2sbe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
