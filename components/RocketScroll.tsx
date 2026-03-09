"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 279;

interface RocketScrollProps {
  children?: ReactNode;
}

export default function RocketScroll({ children }: RocketScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
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
    return scrollYProgress.onChange((v) => {
      setProgress(v);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollYProgress.get() * TOTAL_FRAMES)
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
  }, [images, scrollYProgress, progress]);

  useEffect(() => {
    const handleResize = () => {
      setProgress(scrollYProgress.get());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollYProgress]);

  // Adjust timing windows to be slightly more compressed if we stretch out the scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1], [0, -20]);

  const opacity2 = useTransform(scrollYProgress, [0.05, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.4], [0, 1, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.35, 0.4, 0.45], [0, 1, 1]); // stays solid

  return (
    <div ref={containerRef} className="relative bg-black w-full" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
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

        {/* Text Overlays - Only show during the first half of the scroll */}
        <div className="absolute inset-0 pointer-events-none w-full h-full max-w-7xl mx-auto relative z-0">

          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute top-1/4 left-0 right-0 text-center flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-red-500 mb-2 drop-shadow-md">Buckeye Rocketry</h1>
            <p className="text-lg md:text-xl text-zinc-300 font-medium drop-shadow-sm">"Engineering flight at Ohio State."</p>
          </motion.div>

          <motion.div
            style={{ opacity: opacity2 }}
            className="absolute top-1/3 left-8 md:left-24 max-w-sm"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-red-500 drop-shadow-md">Student Built</h2>
            <p className="text-lg text-zinc-300 leading-relaxed font-light drop-shadow-sm">"Rockets designed and built entirely by students."</p>
          </motion.div>

          <motion.div
            style={{ opacity: opacity3 }}
            className="absolute top-1/3 right-8 md:right-24 max-w-sm text-right"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-red-500 drop-shadow-md">Systems Engineering</h2>
            <p className="text-lg text-zinc-300 leading-relaxed font-light drop-shadow-sm">"Avionics. Propulsion. Structures."</p>
          </motion.div>

          <motion.div
            style={{ opacity: opacity4 }}
            className="absolute top-1/2 left-8 md:left-24 max-w-sm"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-red-500 drop-shadow-md">Competition Ready</h2>
            <p className="text-lg text-zinc-300 leading-relaxed font-light drop-shadow-sm">"High-power rockets for national competitions."</p>
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

      {/* Wrapping the rest of the site's content over the sticky background canvas */}
      <div className="relative z-10 w-full mt-[100vh]">
        {children}
      </div>
    </div>
  );
}
