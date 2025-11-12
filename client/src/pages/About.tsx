import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero */}
        <div className="relative mb-12">
          <div className="h-64 md:h-96 overflow-hidden rounded-lg flex items-center justify-center">
            <img src="/real-bar-interior.webp" alt="Cider collection" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t('about.title')}</h1>
          </div>
        </div>

        {/* Story Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('about.story.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.story.text')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('about.philosophy.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.philosophy.text')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('about.location.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.location.text')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Références de cidres et poirés</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">14</div>
            <div className="text-muted-foreground">Cidres et poirés à la pression</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">1er</div>
            <div className="text-muted-foreground">Bar dédié aux cidres en Belgique</div>
          </div>
        </div>
      </div>
    </div>
  );
}
