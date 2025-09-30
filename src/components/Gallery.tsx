"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CardData = {
  id: string;
  imageUrl: string;
  topLeft: string;
  centerText: string;
  boxAHeading: string;
  boxAPara: string;
  buttonText?: string;
};

const data: CardData[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1758762641372-e3b52bf061d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    topLeft: "Explore • Outdoor • Calm",
    centerText: "WIDE HORIZONS",
    boxAHeading: "Trail Views",
    boxAPara: "Peaceful ridge with sweeping views. Perfect for slow mornings.",
    buttonText: "try win2.2",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    topLeft: "City • Night • Lights",
    centerText: "NEON ALLEY",
    boxAHeading: "Street Pulse",
    boxAPara:
      "The city hums at night — neon reflections and hurried footsteps.",
    buttonText: "try win2.2",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
    topLeft: "Design • Minimal • Calm",
    centerText: "MONO LINES",
    boxAHeading: "Quiet Shapes",
    boxAPara: "Minimal compositions that let the mind breathe.",
    buttonText: "try win2.2",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    topLeft: "Nature • Green • Life",
    centerText: "FOREST BATH",
    boxAHeading: "Fresh Escape",
    boxAPara: "Immerse in the lush greenery, feel the forest’s quiet rhythm.",
    buttonText: "try win2.2",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    topLeft: "Sea • Waves • Calm",
    centerText: "OCEAN VIEW",
    boxAHeading: "Blue Tides",
    boxAPara: "The endless sea brings both calm and adventure.",
    buttonText: "try win2.2",
  },
  {
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop",
    topLeft: "Travel • Desert • Sand",
    centerText: "DUNES",
    boxAHeading: "Golden Silence",
    boxAPara: "Shifting sands whisper stories of timeless journeys.",
    buttonText: "try win2.2",
  },
  {
    id: "7",
    imageUrl:
      "https://images.unsplash.com/photo-1755024324097-64832c4d2334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
    topLeft: "Winter • Cold • Peace",
    centerText: "SNOWFALL",
    boxAHeading: "Frozen Quiet",
    boxAPara: "Soft snow blankets the land, creating a serene silence.",
    buttonText: "try win2.2",
  },
  {
    id: "8",
    imageUrl:
      "https://images.unsplash.com/photo-1743656620385-5afe20b69b9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D",
    topLeft: "Sunset • Sky • Orange",
    centerText: "SUNSET GLOW",
    boxAHeading: "Evening Calm",
    boxAPara: "The sky blazes with hues of orange, pink, and gold.",
    buttonText: "try win2.2",
  },
  {
    id: "9",
    imageUrl:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1600&auto=format&fit=crop",
    topLeft: "Tech • Future • Lights",
    centerText: "URBAN GRID",
    boxAHeading: "City Pulse",
    boxAPara: "The future glows bright in the heart of the metropolis.",
    buttonText: "try win2.2",
  },
];

export default function ImageGallery() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // 👈 new
  const length = data.length;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // auto-advance (skip when hovered)
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () => setIndex((p) => (p + 1) % length),
        6000
      );
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, length, isHovered]);

  const goPrev = () => setIndex((p) => (p - 1 + length) % length);
  const goNext = () => setIndex((p) => (p + 1) % length);

  return (
    <section
      className="w-full flex flex-col items-center py-8 bg-white dark:bg-gray-950 transition-colors"
      onMouseEnter={() => setIsHovered(true)}   // 👈 pause
      onMouseLeave={() => setIsHovered(false)} // 👈 resume
    >
      <div className="w-full max-w-7xl overflow-hidden">
        {/* track */}
        <motion.div
          className="flex gap-5 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${(index + 0.5) * 65}% - ${
              index * 20
            }px))`,
          }}
        >
          {data.map((card) => (
            <motion.article
              key={card.id}
              className="relative flex-shrink-0 w-[65%] min-h-[55vh] lg:min-h-[65vh] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* bg image */}
              <div className="absolute inset-0">
                <Image
                  src={card.imageUrl}
                  alt={card.centerText}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              {/* overlay content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 text-white dark:text-gray-100">
                <p className="text-sm md:text-base tracking-wide">
                  {card.topLeft}
                </p>
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-center">
                  {card.centerText}
                </h2>
                <div className="flex items-end flex-col md:flex-row justify-between gap-4">
                  <div className="w-full md:max-w-[50%]">
                    <h3 className="font-semibold text-lg md:text-xl">
                      {card.boxAHeading}
                    </h3>
                    <p className="mt-2 text-sm md:text-base line-clamp-3">
                      {card.boxAPara}
                    </p>
                  </div>
                  <button className="rounded-full bg-white text-black px-4 py-2 md:px-5 md:py-3 font-medium shadow dark:bg-gray-100 dark:text-gray-900">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* controls (unchanged) */}
        <div className="mt-6 grid grid-cols-[1fr_0.1fr] h-fit relative">
          <div className="flex items-center justify-center  gap-2">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index
                    ? "bg-black dark:bg-white"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
          <div className=" flex-nowrap flex items-center pe-4 md:pe-0 md:justify-end gap-3 right-4 py-2">
            <button
              onClick={goPrev}
              className="flex items-center justify-center min-h-[30px] max-w-[30px] min-w-[30px] rounded-full bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-100"
            >
              &lt;
            </button>
            <button
              onClick={goNext}
              className="flex items-center justify-center min-h-[30px] max-w-[30px] min-w-[30px] rounded-full bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-100"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


