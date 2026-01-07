import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PannellumViewerProps {
  imageUrl: string;
  title: string;
}

declare global {
  interface Window {
    pannellum: {
      viewer: (
        container: string | HTMLElement,
        config: {
          type: string;
          panorama: string;
          autoLoad?: boolean;
          autoRotate?: number;
          compass?: boolean;
          showZoomCtrl?: boolean;
          showFullscreenCtrl?: boolean;
          mouseZoom?: boolean;
          hfov?: number;
          pitch?: number;
          yaw?: number;
        }
      ) => {
        getHfov: () => number;
        setHfov: (hfov: number) => void;
        startAutoRotate: (speed?: number) => void;
        stopAutoRotate: () => void;
        toggleFullscreen: () => void;
        destroy: () => void;
      };
    };
  }
}

const PannellumViewer = ({ imageUrl, title }: PannellumViewerProps) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const pannellumInstance = useRef<ReturnType<typeof window.pannellum.viewer> | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Pannellum CSS
    if (!document.querySelector('link[href*="pannellum.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.css";
      document.head.appendChild(link);
    }

    // Load Pannellum JS
    const loadPannellum = () => {
      return new Promise<void>((resolve) => {
        if (window.pannellum) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.js";
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    const initViewer = async () => {
      await loadPannellum();
      
      if (viewerRef.current && window.pannellum) {
        // Destroy existing instance
        if (pannellumInstance.current) {
          pannellumInstance.current.destroy();
        }

        pannellumInstance.current = window.pannellum.viewer(viewerRef.current, {
          type: "equirectangular",
          panorama: imageUrl,
          autoLoad: true,
          autoRotate: 0,
          compass: false,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          mouseZoom: true,
          hfov: 100,
          pitch: 0,
          yaw: 0,
        });

        // Set loaded state after a delay
        setTimeout(() => setIsLoaded(true), 1000);
      }
    };

    initViewer();

    return () => {
      if (pannellumInstance.current) {
        pannellumInstance.current.destroy();
      }
    };
  }, [imageUrl]);

  const handleZoomIn = () => {
    if (pannellumInstance.current) {
      const currentHfov = pannellumInstance.current.getHfov();
      pannellumInstance.current.setHfov(Math.max(currentHfov - 10, 50));
    }
  };

  const handleZoomOut = () => {
    if (pannellumInstance.current) {
      const currentHfov = pannellumInstance.current.getHfov();
      pannellumInstance.current.setHfov(Math.min(currentHfov + 10, 120));
    }
  };

  const toggleAutoRotate = () => {
    if (pannellumInstance.current) {
      if (isAutoRotating) {
        pannellumInstance.current.stopAutoRotate();
      } else {
        pannellumInstance.current.startAutoRotate(2);
      }
      setIsAutoRotating(!isAutoRotating);
    }
  };

  const toggleFullscreen = () => {
    if (pannellumInstance.current) {
      pannellumInstance.current.toggleFullscreen();
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className="relative w-full h-full bg-navy-dark rounded-xl overflow-hidden">
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4 mx-auto" />
            <p className="text-muted-foreground">Memuat tampilan 360°...</p>
          </div>
        </div>
      )}

      {/* Pannellum Container */}
      <div ref={viewerRef} className="w-full h-full" />

      {/* Custom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomIn}
          className="bg-background/80 backdrop-blur-sm hover:bg-background border border-border"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomOut}
          className="bg-background/80 backdrop-blur-sm hover:bg-background border border-border"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-4 flex gap-2 z-20">
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleAutoRotate}
          className={`bg-background/80 backdrop-blur-sm hover:bg-background border border-border ${
            isAutoRotating ? "text-primary border-primary" : ""
          }`}
        >
          <RotateCcw className={`w-4 h-4 ${isAutoRotating ? "animate-spin" : ""}`} />
        </Button>
      </div>

      <div className="absolute bottom-4 right-4 z-20">
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleFullscreen}
          className="bg-background/80 backdrop-blur-sm hover:bg-background border border-border"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Title Overlay */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
          <p className="text-sm font-medium text-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PannellumViewer;
