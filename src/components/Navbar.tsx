import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, Clock } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="bg-background/80 backdrop-blur-md border border-border px-8 py-3 rounded-full flex items-center gap-12 shadow-lg shadow-primary/5">
        <div className="flex items-center gap-6">
          <a href="#jar" className="text-sm font-medium hover:text-primary transition-colors">The Candy Jar</a>
          <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">Our Story</a>
        </div>
        
        <div className="text-2xl font-display text-primary px-4">Penny Lane Sweets</div>
        
        <div className="flex items-center gap-6">
          <a href="#visit" className="text-sm font-medium hover:text-primary transition-colors">Visit Us</a>
          <div className="flex items-center gap-2 text-sm font-bold bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full">
            <MapPin className="w-4 h-4" />
            Find Us
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
