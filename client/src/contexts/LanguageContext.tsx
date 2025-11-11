import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.about': 'À propos',
    'nav.events': 'Événements',
    'nav.contact': 'Contact',
    
    // Home
    'home.hero.title': 'JORAN - Cidrothèque',
    'home.hero.subtitle': 'Le premier bar et caviste dédié aux cidres en Belgique',
    'home.hero.cta': 'Découvrir le menu',
    'home.about.title': 'Bienvenue à la Cidrothèque',
    'home.about.description': 'JORAN – Cidrothèque est le premier bar et caviste dédié aux cidres en Belgique ! Venez découvrir plus de 150 références de cidres et poirés en bouteille et au fût.',
    'home.hours.title': 'Horaires',
    'home.hours.wed-sun': 'Mercredi - Dimanche',
    'home.hours.time': '17h30 - 01h00',
    'home.hours.closed': 'Fermé lundi et mardi',
    'home.events.title': 'Événements musicaux',
    'home.events.irish': 'Les 1er et 3ème dimanches de chaque mois de 16h à 19h : Irish Music Session (Jam ouverte)',
    'home.events.oldtime': 'Le dernier dimanche de chaque mois de 16h à 19h : Old Time Music Session (Jam ouverte)',
    
    // Menu
    'menu.title': 'Notre Menu',
    'menu.draft': 'Cidres et poirés à la pression',
    'menu.draft.description': 'Nous avons 14 cidres et poirés différents à la pression. La sélection change souvent, rendez-vous au bar pour découvrir les cuvées du moment sur le tableau.',
    'menu.draft.price': 'De 3.5€ à 7€ pour 25cl, nous servons aussi des verres de 33cl ou 50cl.',
    'menu.tasting': 'Plateaux dégustation',
    'menu.bottles': 'Cidres et poirés en bouteilles',
    'menu.bottles.description': 'Plus de 100 références disponibles en 33cl, 50cl et 75cl. Demandez conseil.',
    'menu.bottles.note': 'Les prix indiqués sur l\'étagère sont pour emporter. Pour consommer sur place, il y a un supplément : +3€ en 33cl, +4,5€ en 50cl, +7€ en 75cl.',
    'menu.beers': 'Bières',
    'menu.wines': 'Vins',
    'menu.nonalcoholic': 'Boissons sans alcool',
    'menu.ratafia': 'Ratafia',
    'menu.spirits': 'Eaux-de-vie et Calvados',
    'menu.food': 'Snacks et petite restauration',
    'menu.galettes': 'Galettes bretonnes',
    'menu.galettes.description': '100% farine de sarrasin bio d\'Alain Roger (Bourgogne, FR)',
    'menu.galettes.ingredients': 'Ingrédients au choix : œuf, jambon, comté, champignons',
    'menu.dessert': 'Dessert',
    
    // About
    'about.title': 'À propos de JORAN',
    'about.story.title': 'Notre histoire',
    'about.story.text': 'JORAN - Cidrothèque est né de la passion pour le cidre et la culture bretonne. Premier bar et caviste dédié aux cidres en Belgique, nous proposons une sélection exceptionnelle de plus de 150 références de cidres et poirés provenant de toute l\'Europe.',
    'about.philosophy.title': 'Notre philosophie',
    'about.philosophy.text': 'Nous croyons en la qualité artisanale et le soutien aux producteurs locaux. Chaque cidre et poiré de notre carte est soigneusement sélectionné pour offrir une expérience authentique et découvrir la richesse des terroirs cidricoles.',
    'about.location.title': 'Notre lieu',
    'about.location.text': 'Situé au cœur de Schaerbeek, notre bar chaleureux vous accueille dans une ambiance conviviale. Venez déguster nos cidres, savourer nos galettes bretonnes et profiter de nos sessions musicales.',
    
    // Events
    'events.title': 'Événements',
    'events.music.title': 'Sessions musicales',
    'events.irish.title': 'Irish Music Session',
    'events.irish.schedule': '1er et 3ème dimanches du mois',
    'events.irish.time': '16h - 19h',
    'events.irish.description': 'Jam session ouverte de musique irlandaise. Apportez vos instruments et rejoignez-nous !',
    'events.oldtime.title': 'Old Time Music Session',
    'events.oldtime.schedule': 'Dernier dimanche du mois',
    'events.oldtime.time': '16h - 19h',
    'events.oldtime.description': 'Jam session ouverte de musique old-time américaine. Tous les musiciens sont les bienvenus !',
    
    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.hours': 'Horaires d\'ouverture',
    'contact.wifi': 'Mot de passe WiFi',
    'contact.blankets': 'Un peu froid en terrasse ? Nous avons des plaids.',
    
    // Footer
    'footer.address': 'Rue Jacques Jansen 3, 1030 Schaerbeek, Belgique',
    'footer.rights': 'Tous droits réservés',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    
    // Home
    'home.hero.title': 'JORAN - Cidrothèque',
    'home.hero.subtitle': 'The first bar and bottle shop dedicated to cider in Belgium',
    'home.hero.cta': 'Discover the menu',
    'home.about.title': 'Welcome to Cidrothèque',
    'home.about.description': 'JORAN – Cidrothèque is the first bar and bottle shop dedicated to cider in Belgium! Discover more than 150 ciders and perries in bottles and on tap.',
    'home.hours.title': 'Opening Hours',
    'home.hours.wed-sun': 'Wednesday - Sunday',
    'home.hours.time': '5:30 PM - 1:00 AM',
    'home.hours.closed': 'Closed Monday and Tuesday',
    'home.events.title': 'Musical Events',
    'home.events.irish': 'Every 1st and 3rd Sundays of the month, from 4pm to 7pm: Irish music session (open jam)',
    'home.events.oldtime': 'Every last Sunday of the month, from 4pm to 7pm: Old-time music session (open jam)',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.draft': 'Draft ciders and perries',
    'menu.draft.description': 'We have 14 different ciders and perries on tap. The selection changes often, please come to the bar to discover today\'s list on the blackboard.',
    'menu.draft.price': 'From 3.5€ to 7€ for a 25cl. We also serve 33cl and 50cl glasses.',
    'menu.tasting': 'Tasting flights',
    'menu.bottles': 'Ciders and perries in bottles',
    'menu.bottles.description': 'More than 100 references are available in 33cl, 50cl and 75cl bottles. Please ask for recommendations.',
    'menu.bottles.note': 'Prices written on the shelf are for takeaway. The bottles are also available to drink in, with an extra cost of 3€ for 33cl, 4.5€ for 50cl and 7€ for 75cl.',
    'menu.beers': 'Beers',
    'menu.wines': 'Wines',
    'menu.nonalcoholic': 'Non-alcoholic drinks',
    'menu.ratafia': 'Ratafia',
    'menu.spirits': 'Spirits and Calvados',
    'menu.food': 'Snacks and food',
    'menu.galettes': 'Breton buckwheat crepes',
    'menu.galettes.description': '100% organic buckwheat flour from Alain Roger (Burgundy, FR)',
    'menu.galettes.ingredients': 'Choice of ingredients: egg, ham, comté cheese, mushrooms',
    'menu.dessert': 'Dessert',
    
    // About
    'about.title': 'About JORAN',
    'about.story.title': 'Our story',
    'about.story.text': 'JORAN - Cidrothèque was born from a passion for cider and Breton culture. As the first bar and bottle shop dedicated to cider in Belgium, we offer an exceptional selection of more than 150 ciders and perries from all over Europe.',
    'about.philosophy.title': 'Our philosophy',
    'about.philosophy.text': 'We believe in artisanal quality and supporting local producers. Each cider and perry on our menu is carefully selected to offer an authentic experience and discover the richness of cider-making regions.',
    'about.location.title': 'Our place',
    'about.location.text': 'Located in the heart of Schaerbeek, our warm bar welcomes you in a friendly atmosphere. Come taste our ciders, enjoy our Breton crepes and take part in our music sessions.',
    
    // Events
    'events.title': 'Events',
    'events.music.title': 'Music sessions',
    'events.irish.title': 'Irish Music Session',
    'events.irish.schedule': '1st and 3rd Sundays of the month',
    'events.irish.time': '4pm - 7pm',
    'events.irish.description': 'Open Irish music jam session. Bring your instruments and join us!',
    'events.oldtime.title': 'Old Time Music Session',
    'events.oldtime.schedule': 'Last Sunday of the month',
    'events.oldtime.time': '4pm - 7pm',
    'events.oldtime.description': 'Open American old-time music jam session. All musicians are welcome!',
    
    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Opening hours',
    'contact.wifi': 'WiFi password',
    'contact.blankets': 'A bit cold on the terrace? We have blankets.',
    
    // Footer
    'footer.address': 'Rue Jacques Jansen 3, 1030 Schaerbeek, Belgium',
    'footer.rights': 'All rights reserved',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
