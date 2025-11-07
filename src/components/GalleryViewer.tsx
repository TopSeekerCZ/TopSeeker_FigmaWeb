import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GalleryViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      alt: "Tým hraje outdoor hru s mobilem",
    },
    {
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
      alt: "Skupinka přátel na výpravě",
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      alt: "Teambuilding aktivita",
    },
    {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
      alt: "Společná týmová práce",
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      alt: "Firemní teambuilding",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          JAK SI UŽÍVAT NAŠI <span className="text-gradient">HRU</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-16 h-16 rounded-full bg-gradient-navigation flex items-center justify-center hover:opacity-90 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="grid grid-cols-3 gap-4 flex-1">
              {[0, 1, 2].map((offset) => {
                const actualIndex = (currentIndex + offset) % images.length;
                const image = images[actualIndex];
                const isCenter = offset === 1;

                return (
                  <div
                    key={actualIndex}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                      isCenter ? "scale-110 z-10 shadow-2xl" : "scale-90 opacity-80"
                    }`}
                    onClick={() => openLightbox(actualIndex)}
                  >
                    <img src={image.url} alt={image.alt} className="w-full aspect-[4/5] object-cover" />
                  </div>
                );
              })}
            </div>

            <button
              onClick={next}
              className="w-16 h-16 rounded-full bg-gradient-navigation flex items-center justify-center hover:opacity-90 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-background/95 backdrop-blur-sm border-border">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={prevLightbox}
                className="absolute left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-all z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-primary-foreground" />
              </button>

              <div className="w-full h-full flex items-center justify-center p-16">
                <img
                  src={images[lightboxIndex].url}
                  alt={images[lightboxIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              <button
                onClick={nextLightbox}
                className="absolute right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-all z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-primary-foreground" />
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === lightboxIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GalleryViewer;
