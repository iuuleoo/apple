"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

const images: ImageItem[] = [
  { id: 1, src: "/fone.webp", alt: "Fone 1" },
  { id: 2, src: "/headphone2.jpg", alt: "Fone 2" },
  { id: 3, src: "/headphone3.jpg", alt: "Fone 3" },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((old) => (old + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mx-auto py-24 px-6"
    >
      <div className="relative w-full h-[380px] rounded-3xl overflow-hidden bg-white flex items-center justify-center">
        
        {images.map((image, i) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-contain p-6 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

      </div>
    </motion.section>
  );
}
