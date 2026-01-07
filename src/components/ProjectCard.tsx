import { Link } from "react-router-dom";
import { MapPin, Maximize2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Renovasi":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Bangun Rumah":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Interior & Kitchen Set":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "Tukang Atap dan Plafon":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    default:
      return "bg-primary/20 text-primary border-primary/30";
  }
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative block overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] hover:border-primary/30"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* 360° Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-primary px-3 py-1.5 rounded-full text-xs font-semibold text-primary-foreground shadow-lg">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          360° VIEW
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 className="w-7 h-7 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className={`px-2.5 py-1 rounded-full border text-xs font-medium ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{project.area}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
