import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const StoreInfo = () => {
  return (
    <section id="visit" className="py-24 bg-background">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-display text-foreground mb-6">Visit Our Soda Shop</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Step off the modern streets and into a sugary time capsule. We're located right in the heart of the Historic District. Come for the candy, stay for a milkshake!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-muted-foreground">123 Penny Lane, Sweetwater Springs, FL 34102</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground">
                    <span>Mon - Thu:</span> <span>10am - 8pm</span>
                    <span>Fri - Sat:</span> <span>10am - 10pm</span>
                    <span>Sunday:</span> <span>12pm - 6pm</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Contact</h4>
                  <p className="text-muted-foreground">(555) 482-3921 • hello@pennylanesweets.com</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto h-16 px-10 rounded-full bg-primary text-primary-foreground text-lg hover:bg-primary/90">
              <Navigation className="mr-2 w-5 h-5" />
              Get Directions
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] -rotate-3 translate-x-4 translate-y-4" />
            <Card className="relative overflow-hidden rounded-[3rem] border-8 border-background shadow-2xl aspect-[4/5]">
              <img 
                src="/images/storefront.png" 
                alt="Penny Lane Sweets Storefront" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/60 to-transparent text-background">
                <p className="text-lg font-medium italic">"The happiest corner in town."</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
