import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-12 flex items-center justify-center bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
            <div 
              className="p-12 text-white relative overflow-hidden"
              style={{ backgroundColor: '#024442' }}
            >
              <div 
                className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20"
                style={{ backgroundColor: '#1bc195', transform: 'translate(30%, 30%)' }}
              />
              <div 
                className="absolute bottom-32 right-12 w-48 h-48 rounded-full opacity-30"
                style={{ backgroundColor: '#8c55b7' }}
              />

              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4" data-testid="text-contact-heading">
                  {t('contact.heading')}
                </h2>
                <p className="text-white/90 mb-12" data-testid="text-contact-description">
                  {t('contact.description')}
                </p>

                <div className="space-y-6 mb-16">
                  <a 
                    href="tel:+966112345678" 
                    className="flex items-center gap-4 text-white/90 hover-elevate rounded-lg p-3 transition-colors"
                    data-testid="link-contact-phone"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+966 11 234 5678</span>
                  </a>

                  <a 
                    href="mailto:support@rdp-ksa.com" 
                    className="flex items-center gap-4 text-white/90 hover-elevate rounded-lg p-3 transition-colors"
                    data-testid="link-contact-email-support"
                  >
                    <Mail className="h-5 w-5" />
                    <span>support@rdp-ksa.com</span>
                  </a>

                  <a 
                    href="mailto:ceo@rdp-ksa.com" 
                    className="flex items-center gap-4 text-white/90 hover-elevate rounded-lg p-3 transition-colors"
                    data-testid="link-contact-email-ceo"
                  >
                    <Mail className="h-5 w-5" />
                    <span>ceo@rdp-ksa.com</span>
                  </a>

                  <div 
                    className="flex items-start gap-4 text-white/90 p-3"
                    data-testid="text-contact-address"
                  >
                    <MapPin className="h-5 w-5 mt-1" />
                    <span>Riyadh, Saudi Arabia</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                    aria-label="Facebook"
                    data-testid="link-contact-facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                    aria-label="Twitter"
                    data-testid="link-contact-twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                    aria-label="Instagram"
                    data-testid="link-contact-instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover-elevate flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                    data-testid="link-contact-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-12 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold mb-2 block">
                      {t('contact.firstName')}
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Ahmed"
                      className="rounded-lg"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold mb-2 block">
                      {t('contact.lastName')}
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Al-Rashid"
                      className="rounded-lg"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold mb-2 block">
                      {t('contact.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@company.com"
                      className="rounded-lg"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold mb-2 block">
                      {t('contact.phone')}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+966 50 123 4567"
                      className="rounded-lg"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-4 block">
                    {t('contact.service')}
                  </Label>
                  <RadioGroup defaultValue="urban" className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="urban" id="urban" data-testid="radio-urban" />
                      <Label htmlFor="urban" className="cursor-pointer">{t('contact.urbanConsulting')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="promotion" id="promotion" data-testid="radio-promotion" />
                      <Label htmlFor="promotion" className="cursor-pointer">{t('contact.smartPromotion')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="investment" id="investment" data-testid="radio-investment" />
                      <Label htmlFor="investment" className="cursor-pointer">{t('contact.investmentServices')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="community" id="community" data-testid="radio-community" />
                      <Label htmlFor="community" className="cursor-pointer">{t('contact.communityEngagement')}</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold mb-2 block">
                    {t('contact.message')}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.messagePlaceholder')}
                    rows={6}
                    className="rounded-lg resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-lg"
                  style={{ backgroundColor: '#024442' }}
                  data-testid="button-send-message"
                >
                  {t('contact.send')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
