import { galleryImages } from "@/data";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const INTERVAL = 4000;

export function Gallery() {
  const isMobile = useIsMobile();
  const isTablet = !isMobile && typeof window !== "undefined" && window.innerWidth < 1024;
  const perPage = isMobile ? 1 : isTablet ? 2 : 4;

  const totalPages = Math.ceil(galleryImages.length / perPage);
  const [page, setPage] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTick = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    intervalRef.current = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
      setProgress(0);
    }, INTERVAL);

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (100 / (INTERVAL / 100)), 100));
    }, 100);
  }, [totalPages]);

  const stopTick = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  useEffect(() => {
    if (playing) startTick();
    else stopTick();
    return stopTick;
  }, [playing, startTick, stopTick]);

  const goToPage = (p: number) => {
    setPage(p);
    if (playing) startTick();
  };

  const startX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      setPage((p) => (diff > 0 ? (p + 1) % totalPages : (p - 1 + totalPages) % totalPages));
      if (playing) startTick();
    }
  };

  const pageImages = galleryImages.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="gallery" className="py-16 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-2">Our Creations</h2>
          <p className="text-muted-foreground">Every cake tells a story</p>
        </motion.div>

        <div
          className="relative overflow-hidden rounded-2xl bg-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className={`grid gap-2 ${
                perPage === 4 ? "grid-cols-4" : perPage === 2 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {pageImages.map((img, i) => (
                <div
                  key={`${page}-${i}`}
                  className="overflow-hidden aspect-square rounded-xl"
                >
                  <motion.img
                    src={img}
                    alt={`Hamro Bakery creation ${page * perPage + i + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    data-testid={`img-gallery-${page * perPage + i}`}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="h-1 bg-border mt-2">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${playing ? progress : 0}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === page ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to page ${i + 1}`}
                data-testid={`btn-gallery-dot-${i}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPlaying((p) => !p)}
            className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              playing
                ? "bg-primary text-primary-foreground border-primary shadow-sm animate-pulse"
                : "bg-card border-border text-foreground hover:bg-secondary"
            }`}
            data-testid="btn-gallery-pause"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {playing ? "Pause" : "Resume"}
          </button>
        </div>

        {!playing && (
          <p className="text-center text-xs text-muted-foreground mt-2">
            Slideshow paused — click Resume to continue
          </p>
        )}
      </div>
    </section>
  );
}
