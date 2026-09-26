"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  title,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08] hover:border-sky-500/40 transition-all cursor-pointer shadow-lg"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`${title} Preview screenshot ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

            <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-[80vh] rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${title} High Resolution Preview`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
