import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[url('/images/hero-bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      
      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-accent text-accent-foreground rounded-full">
            Est. 1954 • Handcrafted Daily
          </span>
          <h1 className="text-7xl md:text-9xl font-display text-foreground mb-8 leading-tight">
            Sweetness that <span className="text-primary italic">Stays</span> with You.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
            Step back into the golden age of confectionery. Experience the magic of small-batch taffy, artisanal chocolates, and vintage sodas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-primary-foreground">
              Browse the Catalog
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full bg-background/50 border-primary/20 hover:bg-background">
              Our Store Hours
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Candies */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 hidden lg:block"
      >
        <img src="/images/candy-float-1.png" alt="" className="w-full h-full object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-32 h-32 hidden lg:block"
      >
        <img src="/images/candy-float-2.png" alt="" className="w-full h-full object-contain" />
      </motion.div>
    </section>
  );
};

export default Hero;
