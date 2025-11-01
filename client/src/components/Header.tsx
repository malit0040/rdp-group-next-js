import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useState } from "react";
import logoImage from '@assets/rdp-group-logo-removebg-preview_1761980239646.png';

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    console.log('Language toggled to:', language === 'en' ? 'ar' : 'en');
  };

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
            <Button
              variant="outline"
              className="hidden md:inline-flex rounded-full"
              data-testid="button-sign-in"
            >
              Sign In
            </Button>
            <Button
              className="rounded-full bg-[#024442] hover:bg-[#024442]/90"
              data-testid="button-request-demo"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
