import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Languages, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImage from '@assets/rdp-group-logo-removebg-preview_1761980239646.png';

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  const navItems = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.services'), path: "/services" },
    { label: t('nav.projects'), path: "/projects" },
    { label: t('nav.news'), path: "/news" },
    { label: t('nav.contact'), path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-2 hover-elevate rounded-lg px-2 py-1 cursor-pointer" data-testid="link-home-logo">
              <img 
                src={logoImage} 
                alt="RdP Group" 
                className="h-10 object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2 bg-secondary/30 rounded-full px-4 py-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                    location === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover-elevate"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
            >
              <Languages className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden rounded-full"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>{t('nav.menu')}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <div
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-6 py-3 rounded-lg transition-all cursor-pointer text-lg ${
                          location === item.path
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover-elevate"
                        }`}
                        data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
