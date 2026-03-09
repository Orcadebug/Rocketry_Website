"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 279;

interface RocketScrollProps {
  children?: ReactNode;
}

export default function RocketScroll({ children }: RocketScrollProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Global scroll for the 3D rocket canvas
  const { scrollYProgress: globalScroll } = useScroll();

  // Local scroll specifically for the Hero section text
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

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

  // Adjust timing windows for the 400vh hero section using heroScroll
  const opacity1 = useTransform(heroScroll, [0, 0.15, 0.3], [1, 1, 0]);
  const y1 = useTransform(heroScroll, [0, 0.3], [0, -40]);

  const opacity2 = useTransform(heroScroll, [0.15, 0.3, 0.45, 0.6], [0, 1, 1, 0]);
  const opacity3 = useTransform(heroScroll, [0.45, 0.6, 0.75, 0.9], [0, 1, 1, 0]);
  const opacity5 = useTransform(heroScroll, [0.75, 0.9, 1], [0, 1, 1]); // Stays visible until end of hero

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

      {/* Hero Content Section - 400vh for scrollytelling */}
      <div ref={heroRef} className="relative z-10 w-full" style={{ height: "400vh" }}>
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">

          <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto">
            <motion.div
              style={{ opacity: opacity1, y: y1 }}
              className="absolute top-1/4 left-0 right-0 text-center flex flex-col items-center pointer-events-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-red-500 mb-2 drop-shadow-md">Buckeye Rocketry</h1>
              <p className="text-lg md:text-xl text-zinc-300 font-medium drop-shadow-sm">"Engineering flight at Ohio State."</p>
            </motion.div>

            <motion.div
              style={{ opacity: opacity2 }}
              className="absolute top-1/3 left-8 md:left-24 max-w-sm pointer-events-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-red-500 drop-shadow-md">Student Built</h2>
              <p className="text-lg text-zinc-300 leading-relaxed font-light drop-shadow-sm">"Rockets designed and built entirely by students."</p>
            </motion.div>

            <motion.div
              style={{ opacity: opacity3 }}
              className="absolute top-1/3 right-8 md:right-24 max-w-sm text-right pointer-events-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-red-500 drop-shadow-md">Systems Engineering</h2>
              <p className="text-lg text-zinc-300 leading-relaxed font-light drop-shadow-sm">"Avionics. Propulsion. Structures."</p>
            </motion.div>

            <motion.div
              style={{ opacity: opacity5 }}
              className="absolute top-1/3 left-0 right-0 text-center flex flex-col items-center pointer-events-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500 drop-shadow-md">Join Buckeye Rocketry</h2>
              <p className="text-lg text-zinc-300 font-medium mb-8 drop-shadow-sm">"Build the future of aerospace."</p>
              <div className="flex gap-4">
                <a href="#join" className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">Join Us</a>
                <a href="#sponsor" className="px-8 py-3 bg-zinc-900/80 text-white border border-white/10 backdrop-blur-md rounded-full font-medium hover:bg-zinc-800 transition-colors shadow-md">Sponsor Us</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Page Content rendered below hero */}
      <div className="relative z-10 w-full bg-black/50 backdrop-blur-sm pb-24 border-t border-white/10">
        {children}
      </div>

    </div>
  );
}
