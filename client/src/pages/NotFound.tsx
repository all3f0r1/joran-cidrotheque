import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-5xl font-bold text-primary">?</span>
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-2">
          {language === 'fr' ? 'Page introuvable' : 'Page not found'}
        </p>
        <p className="text-muted-foreground mb-8">
          {language === 'fr' 
            ? "La page que vous recherchez n'existe pas ou a été déplacée."
            : "The page you are looking for doesn't exist or has been moved."}
        </p>
        <Button asChild size="lg">
          <Link href="/">
            {language === 'fr' ? "Retour à l'accueil" : "Go home"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
