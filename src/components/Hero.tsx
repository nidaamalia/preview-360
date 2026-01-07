import { ArrowDown, Rotate3D } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy-dark" />
      
      {/* Animated Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Rotate3D className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">360° Interactive Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-slide-up">
            <span className="text-foreground">Jelajahi Portfolio</span>
            <br />
            <span className="text-foreground">Kami dalam </span>
            <span className="text-gradient-orange">360°</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Lihat hasil pekerjaan kami secara immersive dan interaktif. 
            Platform jasa tukang profesional di Surabaya & Malang.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              onClick={scrollToPortfolio}
              className="bg-primary hover:bg-orange-hover text-primary-foreground font-semibold px-8 py-6 text-lg shadow-orange-glow transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Mulai Jelajahi
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border text-foreground hover:bg-navy-light font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              Konsultasi Gratis
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Respon Cepat 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Garansi Tukang</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Harga Transparan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
