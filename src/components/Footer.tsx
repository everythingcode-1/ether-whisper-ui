import { Twitter, Send, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-heading font-bold">
                A
              </div>
              <span className="text-lg font-heading font-bold">AURA</span>
            </div>
            <p className="text-sm text-secondary">
              AI-powered trading intelligence for the modern trader.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-secondary hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#demo" className="text-sm text-secondary hover:text-foreground transition-colors">Demo</a></li>
              <li><a href="#metrics" className="text-sm text-secondary hover:text-foreground transition-colors">Metrics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-secondary">
            © 2025 AURA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
