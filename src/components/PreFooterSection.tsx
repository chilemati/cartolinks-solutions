"use client";

import { Scale, Tag } from "lucide-react"; // you can swap these icons

export default function PreFooterSection() {
  return (
    <div className="w-full">
      {/* Section 1 */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-between px-4 py-6 gap-4">
          {/* Left */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Gallery
          </h3>

          {/* Right */}
          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
              <Scale size={18} />
              <span className="text-sm font-medium">Legal</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
              <Tag size={18} />
              <span className="text-sm font-medium">Pricing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-between px-4 py-6 gap-4">
          {/* Box A */}
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold">
              K
            </span>
            <span className="text-sm font-medium">Kreal AI</span>
          </div>

          {/* Box B */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Curated by</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold">
              M
            </span>
            <h3 className="text-sm font-semibold">Mobbin</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
