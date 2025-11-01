import { Phone, Mail, MapPin, ExternalLink, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import logoImage from '@assets/rdp-group-logo-removebg-preview_1761980239646.png';

export default function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden" style={{ backgroundColor: '#024442' }}>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            currentColor 2px,
            currentColor 4px
          )`,
          color: '#1bc195'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 
              className="text-xl font-semibold mb-6" 
              style={{ color: '#1bc195' }}
              data-testid="text-footer-contact-heading"
            >
              Contact us
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+966555175495" 
                className="flex items-center gap-3 text-white/90 hover-elevate rounded-md px-3 py-2 transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: '#1bc195' }} />
                <span className="text-sm">+966 555 175 495</span>
              </a>
              <a 
                href="mailto:info@rdpgroup.sa" 
                className="flex items-center gap-3 text-white/90 hover-elevate rounded-md px-3 py-2 transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: '#1bc195' }} />
                <span className="text-sm">info@rdpgroup.sa</span>
              </a>
              <div 
                className="flex items-start gap-3 text-white/90 px-3 py-2"
                data-testid="text-footer-address"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#1bc195' }} />
                <span className="text-sm">Riyadh - Kingdom of Saudi Arabia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 
              className="text-xl font-semibold mb-6" 
              style={{ color: '#1bc195' }}
              data-testid="text-footer-platforms-heading"
            >
              Our platforms
            </h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center gap-2 text-white/90 hover-elevate rounded-md px-3 py-2 transition-colors group"
                data-testid="link-footer-events"
              >
                <span className="text-sm">RdP Events Platform</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#1bc195' }} />
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-white/90 hover-elevate rounded-md px-3 py-2 transition-colors group"
                data-testid="link-footer-marketing"
              >
                <span className="text-sm">RdP Marketing Hub</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#1bc195' }} />
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-white/90 hover-elevate rounded-md px-3 py-2 transition-colors group"
                data-testid="link-footer-portfolio"
              >
                <span className="text-sm">Portfolio Showcase</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#1bc195' }} />
              </a>
            </div>
          </div>

          <div>
            <h3 
              className="text-xl font-semibold mb-6" 
              style={{ color: '#1bc195' }}
              data-testid="text-footer-about-heading"
            >
              Who are we?
            </h3>
            <p className="text-white/90 text-sm leading-relaxed mb-6" data-testid="text-footer-about-description">
              RdP Group is a Saudi conglomerate specializing in city marketing, event production, and royal ceremony coordination. We deliver excellence across the Kingdom of Saudi Arabia.
            </p>
            <img 
              src={logoImage} 
              alt="RdP Group" 
              className="h-12 object-contain" 
              style={{ filter: 'brightness(0) invert(1)' }}
              data-testid="img-footer-logo"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/70 text-sm" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} RdP Group. All rights reserved.
            </p>
            
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
