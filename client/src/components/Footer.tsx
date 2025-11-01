import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import logoImage from '@assets/rdp-group-logo-removebg-preview_1761980239646.png';

export default function Footer() {
  return (
    <footer className="py-12 border-t" style={{ backgroundColor: '#f6f7ed' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img 
              src={logoImage} 
              alt="RdP Group" 
              className="h-14 object-contain mx-auto md:mx-0 mb-3" 
              style={{ filter: 'invert(1)' }}
            />
            <p className="text-sm text-muted-foreground">
              A pioneering step towards a promising future
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 hover-elevate flex items-center justify-center transition-all"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 hover-elevate flex items-center justify-center transition-all"
              aria-label="Twitter"
              data-testid="link-twitter"
            >
              <Twitter className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 hover-elevate flex items-center justify-center transition-all"
              aria-label="Instagram"
              data-testid="link-instagram"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 hover-elevate flex items-center justify-center transition-all"
              aria-label="Facebook"
              data-testid="link-facebook"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RdP Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
