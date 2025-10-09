import { Twitter, Send, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-heading font-bold text-lg">
                A
              </div>
              <span className="text-lg font-heading font-bold tracking-tight">AURA</span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              AI-powered trading intelligence for the modern trader.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#demo" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Demo</a></li>
              <li><a href="#metrics" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Metrics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 outline-card rounded-2xl flex items-center justify-center hover:bg-foreground/5 transition-all duration-300 backdrop-blur-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 outline-card rounded-2xl flex items-center justify-center hover:bg-foreground/5 transition-all duration-300 backdrop-blur-sm">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 outline-card rounded-2xl flex items-center justify-center hover:bg-foreground/5 transition-all duration-300 backdrop-blur-sm">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-foreground/50">
            © 2025 AURA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
