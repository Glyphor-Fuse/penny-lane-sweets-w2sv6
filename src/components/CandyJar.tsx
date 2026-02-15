import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CANDIES = [
  { id: 1, name: "Sea Salt Taffy", price: "$4.99", color: "bg-primary", image: "/images/taffy.png", desc: "Whipped to perfection with Atlantic sea salt." },
  { id: 2, name: "Blue Raspberry Fizz", price: "$3.50", color: "bg-secondary", image: "/images/soda.png", desc: "Our signature retro soda with a tart kick." },
  { id: 3, name: "Minty Clouds", price: "$5.25", color: "bg-accent", image: "/images/marshmallows.png", desc: "Hand-spun peppermint marshmallow puffs." },
  { id: 4, name: "Gold-Wrapped Caramels", price: "$6.00", color: "bg-background-100", image: "/images/caramel.png", desc: "Slow-cooked butter caramels in vintage foil." },
];

export const CandyJar = () => {
  const [bag, setBag] = useState<typeof CANDIES>([]);

  const handleDragEnd = (event: any, info: any, candy: typeof CANDIES[0]) => {
    // Drop detection - if dropped towards the right side of the container
    if (info.point.x > window.innerWidth / 2) {
      if (!bag.find(item => item.id === candy.id)) {
        setBag([...bag, candy]);
      }
    }
  };

  return (
    <section id="jar" className="py-24 bg-background overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-display text-foreground mb-4">Scoop Your Favorites</h2>
            <p className="text-muted-foreground text-lg">
              Drag your favorites into the Penny Lane paper bag to see what's in stock today at our storefront.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-card p-4 rounded-full border border-border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="pr-4 font-bold text-sm uppercase tracking-wider">{bag.length} Items Scooped</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Candy Shelf */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CANDIES.map((candy) => (
              <motion.div
                key={candy.id}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, i) => handleDragEnd(e, i, candy)}
                whileDrag={{ scale: 1.1, zIndex: 50 }}
                className="cursor-grab active:cursor-grabbing"
              >
                <Card className={`relative group overflow-hidden border-none shadow-xl bg-card h-80 flex flex-col items-center justify-center p-8 transition-transform hover:scale-[1.02]`}>
                  <div className={`absolute inset-0 opacity-20 ${candy.color}`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-transparent" />
                  <img 
                    src={candy.image} 
                    alt={candy.name} 
                    className="w-48 h-48 object-contain mb-4 drop-shadow-2xl"
                  />
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold mb-1">{candy.name}</h3>
                    <p className="text-primary font-bold">{candy.price} / bag</p>
                  </div>
                  
                  {/* Tooltip on Hover */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-border"
                  >
                    <p className="text-xs text-muted-foreground flex items-start gap-2">
                      <Info className="w-3 h-3 mt-0.5 shrink-0" />
                      {candy.desc}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Paper Bag Drop Zone */}
          <div className="lg:col-span-4 sticky top-32">
            <motion.div 
              className={`relative bg-muted/20 border-4 border-dashed border-muted rounded-[2rem] p-8 min-h-[500px] flex flex-col transition-colors ${bag.length > 0 ? 'border-primary/40 bg-primary/5' : ''}`}
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-background rounded-full mx-auto flex items-center justify-center shadow-md mb-4 border border-border">
                  <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-2xl">Your Paper Bag</h3>
                <p className="text-sm text-muted-foreground">Drop candies here</p>
              </div>

              <div className="flex-1 space-y-4">
                <AnimatePresence>
                  {bag.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex items-center justify-center text-muted-foreground/60 italic"
                    >
                      Empty Bag...
                    </motion.div>
                  ) : (
                    bag.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ scale: 0.8, opacity: 0, x: 20 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-4 bg-background p-3 rounded-xl shadow-sm border border-border"
                      >
                        <img src={item.image} alt="" className="w-12 h-12 object-contain" />
                        <div className="flex-1">
                          <p className="font-bold text-sm">{item.name}</p>
                          <Badge variant="outline" className="text-[10px] uppercase bg-accent/20 text-accent-foreground border-accent/30">In Stock</Badge>
                        </div>
                        <button 
                          onClick={() => setBag(bag.filter(i => i.id !== item.id))}
                          className="text-muted-foreground hover:text-destructive text-xs font-bold"
                        >
                          Remove
                        </button>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {bag.length > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8">
                  <Button className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-xl h-12 font-bold uppercase tracking-widest text-xs">
                    Get Store Directions
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandyJar;
