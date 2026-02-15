import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-display text-primary mb-6">Penny Lane Sweets</h3>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Keeping the retro dream alive since 1954. Handcrafted sweets made the old-fashioned way.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Private Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-accent">Join the Club</h4>
            <p className="text-muted-foreground mb-4">Get sweet updates and secret recipes.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="sugar@sweet.com"
                className="bg-background/10 border border-background/20 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-bold">Join</button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-background/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Penny Lane Sweets. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
