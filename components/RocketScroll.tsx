"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useScroll } from "framer-motion";

const TOTAL_FRAMES = 279;

interface RocketScrollProps {
  heroContent?: ReactNode;
  children?: ReactNode;
}

export default function RocketScroll({ heroContent, children }: RocketScrollProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Global scroll for the 3D rocket canvas
  const { scrollYProgress: globalScroll } = useScroll();

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/3d_rocket/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setLoading(false);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    return globalScroll.onChange((v) => {
      setProgress(v);
    });
  }, [globalScroll]);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(globalScroll.get() * TOTAL_FRAMES)
      );

      const img = images[frameIndex];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, rect.width, rect.height);

      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.min(hRatio, vRatio);

      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;

      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, globalScroll, progress]);

  useEffect(() => {
    const handleResize = () => {
      setProgress(globalScroll.get());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [globalScroll]);

  return (
    <div className="relative w-full min-h-screen">

      {/* Fixed Canvas Background */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-black overflow-hidden">
        {loading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-white mb-4" />
            <p className="text-white/60 font-medium tracking-wide">Loading sequence...</p>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Subtle gradient overlay to ensure text legibility globally */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>

      {/* Hero Content Section - Reduced scroll height since there's no text */}
      <div ref={heroRef} className="relative z-10 w-full h-[100vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
          {heroContent ? (
            <div className="w-full pointer-events-auto">
              {heroContent}
            </div>
          ) : null}
        </div>
      </div>

      {/* Main Page Content rendered below hero */}
      <div className="relative z-10 w-full bg-transparent pb-24 border-t border-white/10">
        {children}
      </div>

    </div>
  );
}
