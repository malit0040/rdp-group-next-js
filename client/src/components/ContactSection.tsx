import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-heading">
              Contact & Collaboration
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's Build the Next Big Story
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    className="rounded-2xl"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="rounded-2xl"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company"
                    className="rounded-2xl"
                    data-testid="input-company"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project..."
                    className="rounded-2xl min-h-32"
                    required
                    data-testid="input-message"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full rounded-2xl"
                  size="lg"
                  data-testid="button-submit-contact"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Your story deserves a royal stage. We build connections that move cities. From vision to visibility — discover RdP.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start rounded-2xl" 
                  size="lg"
                  onClick={() => console.log('WhatsApp clicked')}
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-3 h-5 w-5 text-[#25D366]" />
                  WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start rounded-2xl" 
                  size="lg"
                  onClick={() => console.log('Phone clicked')}
                  data-testid="button-phone"
                >
                  <Phone className="mr-3 h-5 w-5 text-[#1bc195]" />
                  +966 XX XXX XXXX
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
