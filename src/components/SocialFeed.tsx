import { Instagram } from 'lucide-react';

const INSTA_POSTS = [
  "/images/insta-1.png",
  "/images/insta-2.png",
  "/images/insta-3.png",
  "/images/insta-4.png",
  "/images/insta-5.png",
  "/images/insta-6.png",
];

export const SocialFeed = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-background-400 via-background-500 to-background-500 flex items-center justify-center text-foreground mb-6">
            <Instagram className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-display mb-4">Sugar High Social</h2>
          <p className="text-muted-foreground max-w-xl">
            Join the Penny Lane family! Tag us <span className="text-primary font-bold">@PennyLaneSweets</span> for a chance to be featured on our candy wall.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {INSTA_POSTS.map((img, i) => (
            <div 
              key={i} 
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              <img 
                src={img} 
                alt="Social post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-background font-bold flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  View Post
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
