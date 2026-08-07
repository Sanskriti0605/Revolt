import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, BarChart3, Globe2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 sm:p-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto mt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-8 animate-in slide-in-from-bottom-5 duration-700">
          <Globe2 className="w-4 h-4" />
          <span className="text-sm font-medium">AI Powered Second-Life EV Battery Intelligence Platform</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 text-foreground animate-in slide-in-from-bottom-8 duration-1000">
          Give EV Batteries <br /> A <span className="text-primary">Second Life.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in slide-in-from-bottom-10 duration-1000 delay-150">
          Retired EV batteries still retain 70-80% capacity. Our advanced AI diagnostics determine whether they should be reused, repurposed, or recycled, maximizing their value and reducing carbon emissions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Link href="/diagnostics">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full">
              Analyze Battery <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border bg-card/50 backdrop-blur-sm">
              Explore Marketplace
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-32 w-full max-w-5xl">
        <div className="glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-primary/10 rounded-full text-primary">
            <Battery className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-bold">12.5k</h3>
          <p className="text-muted-foreground">Batteries Analyzed</p>
        </div>
        
        <div className="glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-500">
            <Globe2 className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-bold">4.2M</h3>
          <p className="text-muted-foreground">kg CO₂ Saved</p>
        </div>
        
        <div className="glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-amber-500/10 rounded-full text-amber-500">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-bold">$8.4M</h3>
          <p className="text-muted-foreground">Value Recovered</p>
        </div>
      </section>
    </div>
  );
}
