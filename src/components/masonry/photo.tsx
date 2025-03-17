"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const Lightbox = dynamic(() => import("@/components/lightbox"));

interface PhotoProps {
  id: number;
  src: string;
  slides: { id: number; src: string }[];
}

export default function Photo({ id, src, slides }: PhotoProps) {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);
  const findIndex = slides.findIndex((slide) => slide.id === id);

  return (
    <>
      <div
        onClick={() => setIndex(findIndex)}
        className="group relative mb-4 flex w-full flex-col items-center overflow-hidden rounded-[10px] hover:cursor-pointer"
      >
        {loading && (
          <div className="absolute size-full bg-white">
            <div className="size-full animate-pulse bg-gray-300" />
          </div>
        )}

        <Image
          className="w-full object-cover"
          src={src}
          alt={`Photo-${id}`}
          width={400}
          height={700}
          onLoad={() => setLoading(false)}
          priority
        />

        <div className="absolute hidden size-full items-center justify-center transition-colors group-hover:flex group-hover:bg-black/40">
          <h2 className="text-4xl font-bold text-white">Open</h2>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}
