import { MapPin, Ruler, Calendar, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { toast } from "@/hooks/use-toast";
import { WHATSAPP_CONFIG, getWhatsAppUrl } from "@/lib/constants";

interface ProjectSidebarProps {
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

const ProjectSidebar = ({ project }: ProjectSidebarProps) => {
  const handleConsultation = () => {
    toast({
      title: "Terima kasih atas minat Anda!",
      description: "Tim kami akan segera menghubungi Anda untuk konsultasi.",
    });
    window.open(
      getWhatsAppUrl(WHATSAPP_CONFIG.projectMessage(project.title)),
      "_blank"
    );
  };

  const infoItems = [
    { icon: MapPin, label: "Lokasi", value: project.location },
    { icon: Ruler, label: "Luas", value: project.area },
    { icon: Calendar, label: "Durasi", value: project.duration },
    { icon: User, label: "Klien", value: project.client },
  ];

  return (
    <div className="h-full flex flex-col bg-card border-l border-border">
      <div className="flex-1 overflow-y-auto p-6 flex flex-col">
        {/* Title */}
        <h1 className="text-2xl font-bold text-foreground mb-4 leading-tight">
          {project.title}
        </h1>

        {/* Category Badge */}
        <div className="mb-6">
          <span
            className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium border ${getCategoryColor(
              project.category
            )}`}
          >
            {project.category}
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-4 border border-border"
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <item.icon className="w-4 h-4" />
                <span className="text-xs">{item.label}</span>
              </div>
              <p className="font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Description Section */}
        <div className="space-y-4 flex-1">
          <h3 className="text-lg font-semibold text-foreground tracking-tight">
            Mengenai Portfolio ini
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed break-words">
            {project.description}
          </p>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="p-6 border-t border-border bg-card">
        <Button
          onClick={handleConsultation}
          className="w-full bg-primary hover:bg-orange-hover text-primary-foreground font-semibold py-6 shadow-orange-glow transition-all duration-300 hover:shadow-lg"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Konsultasi Sekarang
        </Button>
      </div>
    </div>
  );
};

export default ProjectSidebar;
