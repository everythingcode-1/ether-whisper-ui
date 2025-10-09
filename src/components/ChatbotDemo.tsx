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
    <section id="demo" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight">
            Experience AURA AI
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Interact with our AI chatbot for instant market insights
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="outline-card p-8 space-y-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 pb-6 border-b border-border/50">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AURA Trading Assistant</h3>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            
            <div className="space-y-4 min-h-[320px]">
              {sampleMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-5 rounded-3xl ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "outline-card backdrop-blur-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3 pt-6 border-t border-border/50">
              <input
                type="text"
                placeholder="Ask AURA about trading strategies..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-transparent border border-border rounded-3xl px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm placeholder:text-foreground/40"
              />
              <Button variant="hero" size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-xs text-muted-foreground">Try asking:</span>
              <button className="text-xs outline-card px-4 py-1.5 rounded-full hover:bg-foreground/5 transition-all duration-300 backdrop-blur-sm">
                Market analysis for ETH
              </button>
              <button className="text-xs outline-card px-4 py-1.5 rounded-full hover:bg-foreground/5 transition-all duration-300 backdrop-blur-sm">
                Risk assessment
              </button>
              <button className="text-xs outline-card px-4 py-1.5 rounded-full hover:bg-foreground/5 transition-all duration-300 backdrop-blur-sm">
                Portfolio optimization
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
