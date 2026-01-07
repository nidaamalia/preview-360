import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const PortfolioPreview = () => {
  // Show only first 3 projects as preview
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio <span className="text-gradient-orange">360°</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi hasil pekerjaan tim profesional kami secara interaktif
          </p>
        </div>

        {/* Projects Grid - Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {previewProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-orange-glow hover:shadow-orange-glow-lg"
          >
            Lihat Semua Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
