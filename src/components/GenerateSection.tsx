"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // ✅ icon
import Image from "next/image";

type Card = {
  id: string;
  title: string;
  description: string;
  icon: string; // image/icon path
  isNew?: boolean;
};

const cards: Card[] = [
  {
    id: "1",
    title: "Image",
    description: "Generate realistic or artistic AI-driven images instantly.",
    icon: "/icons/image.png",
    isNew: true,
  },
  {
    id: "2",
    title: "Video",
    description: "AI-assisted video creation with seamless storytelling.",
    icon: "/icons/video.png",
  },
  {
    id: "3",
    title: "Realtime",
    description: "Experience AI responses and outputs in real time.",
    icon: "/icons/realtime.png",
    isNew: true,
  },
  {
    id: "4",
    title: "Enhancer",
    description: "Upscale and improve visuals with intelligent enhancements.",
    icon: "/icons/enhancer.png",
  },
  {
    id: "5",
    title: "Edit",
    description: "Smart editing tools to refine and adjust AI outputs.",
    icon: "/icons/edit.png",
  },
  {
    id: "6",
    title: "Video LipSync",
    description: "Synchronize lip movements with audio for realism.",
    icon: "/icons/lipsync.png",
  },
  {
    id: "7",
    title: "Motion Transfer",
    description: "Bring static images to life with fluid motion transfer.",
    icon: "/icons/motion.svg",
    isNew: true,
  },
  {
    id: "8",
    title: "Train",
    description: "Train your own AI models with custom datasets.",
    icon: "/icons/train.png",
  },
];

export default function GenerateSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-10 px-4 md:px-8 bg-white dark:bg-gray-950 transition-colors">
      {/* header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Generate
        </h3>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium"
        >
          See all
          {open ? (
            <ChevronUp className="w-5 h-5 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 transition-transform" />
          )}
        </button>
      </div>

      {/* cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {(open ? cards : cards.slice(0, 4)).map((card) => (
          <div
            key={card.id}
            className="flex flex-row justify-between p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition"
          >
            {/* boxA */}
            <div className="flex items-start gap-4">
              {/* icon */}
              <div className="flex-shrink-0 w-12 h-12 relative">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  {card.isNew && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-blue-600 text-white">
                      New
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </div>

            {/* boxB */}
            <div className="mt-6">
              <button className="w-fit text-[10px] py-1 px-3 rounded-lg bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-100 ">
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
