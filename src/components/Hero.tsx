import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 outline-card px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm">AI-Powered Trading Intelligence</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Trade Smarter with{" "}
              <span className="text-gradient">AURA AI</span>
            </h1>
            
            <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
              Advanced AI trading insights at your fingertips. Seamlessly integrated with Telegram & Discord for real-time market intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="outline-card p-8 space-y-6 glow-hover backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">AI Analysis</p>
                  <p className="font-semibold text-lg">Real-time Insights</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="outline-card p-5 rounded-2xl border-l-2 border-primary backdrop-blur-sm">
                  <p className="text-xs text-muted-foreground mb-2">Market Signal</p>
                  <p className="text-sm leading-relaxed text-foreground/80">BTC showing strong bullish momentum with increasing volume. Recommended action: Monitor for breakout above $45,000.</p>
                </div>
                
                <div className="outline-card p-5 rounded-2xl border-l-2 border-primary-glow backdrop-blur-sm">
                  <p className="text-xs text-muted-foreground mb-2">Risk Assessment</p>
                  <p className="text-sm leading-relaxed text-foreground/80">Current portfolio risk level: Moderate. Consider diversification across 3-4 key assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
