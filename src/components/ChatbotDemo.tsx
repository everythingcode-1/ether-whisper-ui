import { Button } from "@/components/ui/button";
import { Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export const ChatbotDemo = () => {
  const [message, setMessage] = useState("");

  const sampleMessages = [
    { role: "user", text: "What's the current market sentiment for BTC?" },
    { role: "bot", text: "Based on current analysis, BTC shows bullish momentum with strong support at $43,500. Volume indicators suggest continued upward pressure. Recommended strategy: Hold with tight stop-loss at $42,800." },
  ];

  return (
    <section id="demo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Experience AURA AI
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Interact with our AI chatbot for instant market insights
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">AURA Trading Assistant</h3>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            
            <div className="space-y-4 min-h-[300px]">
              {sampleMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "glass-card"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3 pt-4 border-t border-border/50">
              <input
                type="text"
                placeholder="Ask AURA about trading strategies..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-background-secondary border border-input rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground">Try asking:</span>
              <button className="text-xs glass-card px-3 py-1 rounded-full hover:bg-primary/10 transition-colors">
                Market analysis for ETH
              </button>
              <button className="text-xs glass-card px-3 py-1 rounded-full hover:bg-primary/10 transition-colors">
                Risk assessment
              </button>
              <button className="text-xs glass-card px-3 py-1 rounded-full hover:bg-primary/10 transition-colors">
                Portfolio optimization
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
