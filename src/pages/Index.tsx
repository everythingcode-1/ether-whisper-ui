import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ChatbotDemo } from "@/components/ChatbotDemo";
import { Metrics } from "@/components/Metrics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ChatbotDemo />
      <Metrics />
      <Footer />
    </div>
  );
};

export default Index;
