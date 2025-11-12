import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Music } from 'lucide-react';

export default function Events() {
  const { t } = useLanguage();

  const events = [
    {
      title: t('events.irish.title'),
      schedule: t('events.irish.schedule'),
      time: t('events.irish.time'),
      description: t('events.irish.description'),
      icon: Music,
    },
    {
      title: t('events.oldtime.title'),
      schedule: t('events.oldtime.schedule'),
      time: t('events.oldtime.time'),
      description: t('events.oldtime.description'),
      icon: Music,
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero */}
        <div className="relative mb-12">
          <div className="h-64 md:h-96 overflow-hidden rounded-lg flex items-center justify-center">
            <img src="/real-cider-tasting.webp" alt="Cider tasting" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('events.title')}</h1>
            <p className="text-lg max-w-2xl mx-auto px-4">
              {t('events.music.title')}
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center">{event.title}</CardTitle>
                  <CardDescription className="text-center">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.schedule}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="bg-secondary/20 border-secondary">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <p className="font-semibold text-lg">Sessions ouvertes à tous !</p>
                <p className="text-muted-foreground">
                  Que vous soyez musicien débutant ou confirmé, venez partager votre passion de la musique dans une ambiance conviviale autour d'un bon cidre.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
