import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CandyJar } from "@/components/CandyJar";
import { Process } from "@/components/Process";
import { StoreInfo } from "@/components/StoreInfo";
import { SocialFeed } from "@/components/SocialFeed";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
          <Navbar />
          <Hero />
          <CandyJar />
          <Process />
          <StoreInfo />
          <SocialFeed />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
