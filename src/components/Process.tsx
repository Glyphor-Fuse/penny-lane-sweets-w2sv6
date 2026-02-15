import { motion } from 'framer-motion';
import { Timeline } from '@/components/ui/timeline';

export const Process = () => {
  const data = [
    {
      title: "The Copper Kettle",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            We still use the original copper kettles from the 1950s. Their superior heat conductivity ensures every batch of sugar caramelizes to that precise amber hue.
          </p>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
            <img src="/images/process-1.png" alt="Copper kettle cooking" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "The Hand-Pull",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Aeration is the secret to the perfect taffy. Our candy makers pull and stretch the warm mixture by hand until it achieves its signature airy and soft texture.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/process-2.png" alt="Taffy pulling" className="rounded-xl shadow-lg border-4 border-background aspect-[4/3] object-cover" />
            <img src="/images/process-3.png" alt="Candy shapes" className="rounded-xl shadow-lg border-4 border-background aspect-[4/3] object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "Vintage Wrapping",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Every piece is wrapped in wax paper using machines that have been humming along since the Eisenhower administration. It's the snap of the paper that lets you know it's fresh.
          </p>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
            <img src="/images/process-4.png" alt="Vintage wrapping machine" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="py-24 bg-accent/5">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display text-foreground mb-4">How We Make the Magic</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Traditional methods, timeless ingredients, and a whole lot of love go into every single piece of Penny Lane candy.
          </p>
        </div>
        
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Process;
