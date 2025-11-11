import { useLanguage } from '@/contexts/LanguageContext';

const galleryImages = [
  {
    src: '/gallery-bar-interior.jpg',
    alt: 'Interior of JORAN Cidrothèque',
    titleFr: 'Notre bar chaleureux',
    titleEn: 'Our cozy bar',
  },
  {
    src: '/gallery-cider-taps.jpg',
    alt: 'Cider taps at the bar',
    titleFr: 'Cidres à la pression',
    titleEn: 'Draft ciders',
  },
  {
    src: '/gallery-galettes.jpg',
    alt: 'Breton galette',
    titleFr: 'Galettes bretonnes',
    titleEn: 'Breton galettes',
  },
  {
    src: '/gallery-cheese-board.jpg',
    alt: 'Cheese and charcuterie board',
    titleFr: 'Planche de fromages',
    titleEn: 'Cheese board',
  },
  {
    src: '/gallery-cider-bottles.jpg',
    alt: 'Collection of cider bottles',
    titleFr: 'Plus de 150 références',
    titleEn: 'Over 150 references',
  },
  {
    src: '/gallery-terrace.jpg',
    alt: 'Terrace at JORAN',
    titleFr: 'Notre terrasse',
    titleEn: 'Our terrace',
  },
  {
    src: '/gallery-music-session.jpg',
    alt: 'Irish music session',
    titleFr: 'Sessions musicales',
    titleEn: 'Music sessions',
  },
];

export default function Gallery() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'fr' ? 'Découvrez notre univers' : 'Discover our world'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {language === 'fr' ? image.titleFr : image.titleEn}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
