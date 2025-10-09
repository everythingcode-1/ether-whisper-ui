import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-heading font-bold text-lg">
              A
            </div>
            <span className="text-lg font-heading font-bold tracking-tight">AURA</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#demo" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Demo
            </a>
            <a href="#metrics" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Metrics
            </a>
          </div>

          <Button variant="outline" size="default" className="gap-2">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};
