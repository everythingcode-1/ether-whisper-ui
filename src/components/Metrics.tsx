import { TrendingUp, Users, Zap, Database } from "lucide-react";

const metrics = [
  {
    icon: Database,
    value: "10M+",
    label: "Tokens Analyzed",
  },
  {
    icon: TrendingUp,
    value: "5,000+",
    label: "Trading Strategies",
  },
  {
    icon: Zap,
    value: "1M+",
    label: "API Calls Daily",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
  },
];

export const Metrics = () => {
  return (
    <section id="metrics" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="outline-card p-8 text-center glow-hover backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-5 border border-primary/10">
                <metric.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-heading font-bold text-gradient mb-2">
                {metric.value}
              </div>
              <div className="text-foreground/60 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
