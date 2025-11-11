import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { menuData } from '@/lib/menuData';

export default function Menu() {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="h-64 md:h-80 overflow-hidden rounded-lg">
            <img src="/real-terrace-exterior.webp" alt="JORAN exterior" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('menu.title')}</h1>
            <p className="text-lg max-w-2xl mx-auto px-4">
              {t('menu.draft.description')}
            </p>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-12">
          {/* Draft Ciders */}
          <section>
            <div className="bg-card border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-3">{t('menu.draft')}</h2>
              <p className="text-muted-foreground mb-2">{t('menu.draft.description')}</p>
              <p className="text-sm font-medium text-primary">{t('menu.draft.price')}</p>
            </div>
          </section>

          {/* Tasting Flights */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.tasting')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuData.tastingFlights.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{item.price}€</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bottles */}
          <section>
            <div className="bg-card border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-3">{t('menu.bottles')}</h2>
              <p className="text-muted-foreground mb-2">{t('menu.bottles.description')}</p>
              <p className="text-sm text-muted-foreground italic">{t('menu.bottles.note')}</p>
            </div>
          </section>

          {/* Beers */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.beers')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.beers.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base flex justify-between items-start">
                      <span>{item.name}</span>
                      <span className="text-primary font-bold">{item.price}€</span>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Wines */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.wines')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.wines.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span>Verre (12.5cl)</span>
                      <span className="font-bold text-primary">{item.glassPrice}€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bouteille (75cl)</span>
                      <span className="font-bold text-primary">{item.bottlePrice}€</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Non-Alcoholic */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.nonalcoholic')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuData.nonAlcoholic.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-sm flex justify-between items-start">
                      <span>{item.name}</span>
                      <span className="text-primary font-bold">{item.price}€</span>
                    </CardTitle>
                    {item.size && <CardDescription>{item.size}</CardDescription>}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Ratafia */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.ratafia')}</h2>
            <p className="text-sm text-muted-foreground mb-6 italic">
              Le jus frais de la pomme ou de la poire est mélangé avec de l'eau-de-vie du même fruit, puis vieilli. Le sucre du fruit est conservé.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.ratafia.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base flex justify-between items-start">
                      <span>{item.name}</span>
                      <span className="text-primary font-bold">{item.price}€</span>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Spirits */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.spirits')}</h2>
            <p className="text-sm text-muted-foreground mb-6 italic">
              Produit de la distillation du cidre ou du poiré
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.spirits.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base flex justify-between items-start">
                      <span>{item.name}</span>
                      <span className="text-primary font-bold">{item.price}€</span>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Food */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.food')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.food.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base flex justify-between items-start">
                      <span>{item.name}</span>
                      <span className="text-primary font-bold">{item.price}€</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Galettes */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.galettes')}</h2>
            <p className="text-sm text-muted-foreground mb-2">{t('menu.galettes.description')}</p>
            <p className="text-sm text-muted-foreground mb-6 italic">{t('menu.galettes.ingredients')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {menuData.galettes.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base flex justify-between items-start">
                      <span>{item.name}</span>
                      <span className="text-primary font-bold">{item.price}€</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Dessert */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('menu.dessert')}</h2>
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle className="text-base flex justify-between items-start">
                  <span>{menuData.dessert.name}</span>
                  <span className="text-primary font-bold">{menuData.dessert.price}€</span>
                </CardTitle>
              </CardHeader>
            </Card>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-secondary/30 rounded-lg text-center space-y-2">
          <p className="text-sm font-medium">Mot de passe WiFi : <span className="font-bold">mangezdespommes</span></p>
          <p className="text-sm text-muted-foreground">{t('contact.blankets')}</p>
        </div>
      </div>
    </div>
  );
}
