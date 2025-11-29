import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/about', label: t('nav.about') },
    { path: '/events', label: t('nav.events') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur supports-[backdrop-filter]:bg-amber-50/90 dark:from-slate-900 dark:to-slate-800 dark:border-slate-700">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/logo-joran.png" alt="JORAN Logo" className="w-10 h-10" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary leading-none">JORAN</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Cidrothèque</div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === item.path ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="font-medium"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-card">
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === item.path ? 'text-primary' : 'text-foreground/80'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
