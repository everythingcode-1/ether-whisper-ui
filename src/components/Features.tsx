import { Brain, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze market trends and provide actionable insights in real-time.",
  },
  {
    icon: TrendingUp,
    title: "Smart Trading Signals",
    description: "Receive precise buy and sell signals based on comprehensive market data and predictive analytics.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Intelligent risk assessment tools help protect your portfolio with automated alerts and recommendations.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Everything you need to make informed trading decisions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="outline-card p-8 glow-hover group backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
