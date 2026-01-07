import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioPreview from "@/components/PortfolioPreview";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PortfolioPreview />
      <StatsSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
