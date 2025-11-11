import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { Clock, Music, MapPin } from "lucide-react";


export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
       {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-background via-secondary/5 to-accent/10">
        <div className="container text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <img src="/logo-hero.png" alt="JORAN Cidrothèque Logo" className="w-64 h-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('home.hero.title')}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/menu">
            <Button size="lg" className="text-lg px-8">
              {t('home.hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.about.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('home.about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours Card */}
            <Card className="text-center overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src="/real-bar-interior.webp" alt="Bar interior" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{t('home.hours.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <div className="font-semibold">{t('home.hours.wed-sun')}</div>
                    <div className="text-muted-foreground">{t('home.hours.time')}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{t('home.hours.closed')}</div>
                </div>
              </CardContent>
            </Card>

            {/* Events Card */}
            <Card className="text-center overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src="/real-cider-tasting.webp" alt="Cider tasting" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{t('home.events.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{t('home.events.irish')}</p>
                  <p>{t('home.events.oldtime')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="text-center overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src="/real-terrace-exterior.webp" alt="Terrace" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{t('contact.address')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rue Jacques Jansen 3<br />
                  1030 Schaerbeek<br />
                  Belgique
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Venez nous découvrir !</h2>
          <p className="text-lg mb-8 opacity-90">Plus de 150 références de cidres et poirés vous attendent</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t('nav.menu')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                {t('nav.contact')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
