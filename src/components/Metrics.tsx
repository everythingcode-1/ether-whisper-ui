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
    <section id="metrics" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center glow-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-heading font-bold text-gradient mb-2">
                {metric.value}
              </div>
              <div className="text-secondary text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
