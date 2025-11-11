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
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-background py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <span className="text-5xl font-bold text-primary-foreground">J</span>
              </div>
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
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
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
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                    <Music className="h-6 w-6 text-secondary-foreground" />
                  </div>
                </div>
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
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
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
