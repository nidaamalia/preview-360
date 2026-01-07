import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, Menu, X } from "lucide-react";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import PannellumViewer from "@/components/PannellumViewer";
import ProjectSidebar from "@/components/ProjectSidebar";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Proyek tidak ditemukan
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              to="/#portfolio"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Portfolio 360°
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {project.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 md:pt-32 h-screen flex flex-col">
        <div className="flex-1 flex relative overflow-hidden">
          {/* Viewer Section */}
          <div
            className={`flex-1 relative transition-all duration-300 ${
              isSidebarOpen ? "lg:mr-[400px]" : ""
            }`}
          >
            {/* 360 Viewer */}
            <div className="absolute inset-4 lg:inset-6">
              <PannellumViewer
                imageUrl={project.panoramaUrl}
                title={project.title}
              />
            </div>

            {/* Navigation Arrows */}
            {prevProject && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border border-border shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}
            {nextProject && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="absolute right-7 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border border-border shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}

            {/* Mobile Sidebar Toggle */}
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden absolute top-8 right-8 z-30 bg-background/80 backdrop-blur-sm hover:bg-background border border-border"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed lg:absolute right-0 top-0 bottom-0 w-full lg:w-[400px] z-40 lg:z-20 transform transition-transform duration-300 ${
              isSidebarOpen
                ? "translate-x-0"
                : "translate-x-full"
            }`}
          >
            <ProjectSidebar project={project} />
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-card border-t border-border p-4">
          <div className="container mx-auto">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => navigate(`/project/${p.id}`)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    p.id === project.id
                      ? "border-primary shadow-orange-glow"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default ProjectDetail;
