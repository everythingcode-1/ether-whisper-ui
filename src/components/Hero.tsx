import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Trading Intelligence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Trade Smarter with{" "}
              <span className="text-gradient">AURA AI</span>
            </h1>
            
            <p className="text-lg text-secondary leading-relaxed max-w-xl">
              Advanced AI trading insights at your fingertips. Seamlessly integrated with Telegram & Discord for real-time market intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="glass" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 space-y-6 glow-hover">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">AI Analysis</p>
                  <p className="font-semibold">Real-time Insights</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="glass-card p-4 rounded-xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground mb-1">Market Signal</p>
                  <p className="text-sm">BTC showing strong bullish momentum with increasing volume. Recommended action: Monitor for breakout above $45,000.</p>
                </div>
                
                <div className="glass-card p-4 rounded-xl border-l-4 border-primary-glow">
                  <p className="text-sm text-muted-foreground mb-1">Risk Assessment</p>
                  <p className="text-sm">Current portfolio risk level: Moderate. Consider diversification across 3-4 key assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
