"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Home,
  Image as LucidImage,
  Video,
  Folder,
  Bell,
  Sun,
  Moon,
  HelpCircle,
  GalleryVertical,
  AlignJustify,
  ChevronDown,
  Asterisk,
  Headset,
  PencilOff,
  Brush,
  SpellCheck2,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
   const router = useRouter();

  // Ensure hydration before rendering theme-dependent UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { id: "home", link: "/", icon: <Home size={22} /> },
    { id: "image", link: "/images", icon: <LucidImage size={22} /> },
    { id: "video", link: "/videos", icon: <Video size={22} /> },
    { id: "extra1", link: "/extrals", icon:<PencilOff size={22} />}, 
    { id: "brush", link: "/brush", icon: <Brush size={22} /> }, 
    { id: "edit", link: "/edit", icon: <SpellCheck2  size={22} /> }, 
    { id: "folder", link: "/folders", icon: <Folder size={22} /> },
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow gap-5 px-4 py-2 flex items-center justify-between">
      {/* Section 1 */}
      <div className="flex items-center flex-nowrap gap-4">
        <span className="text-xl font-bold">K</span>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/icons/user.png"
            alt="user avatar"
            width={32}
            height={32}
            className="rounded-full dark:bg-white "
          />
          <span className="text-nowrap text-sm font-medium">John Doe</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <AlignJustify size={24} />
      </button>

      {/* Section 2 + Section 3 (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        {/* Section 2 */}
        <div className="flex gap-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {setActive(item.id);router.push(item.link);}}
              className={`p-2 rounded-lg transition ${
                active === item.id
                  ? "bg-white shadow text-black dark:bg-gray-700 dark:text-white"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Section 3 */}
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 cursor-pointer">
            <LucidImage size={18} />
            <Link href="/gallery" className="text-sm">Gallery</Link>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 cursor-pointer">
            <Headset size={18} />
            <Link href='/support' className="text-sm">Support</Link>
          </div>
          <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Bell size={18} />
          </button>

          {/* Theme toggle: render only after mounted */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button className="p-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
            <Moon className="opacity-0 " size={18} />
          </button>

        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {menuOpen && (
        <div className="absolute z-[99999] top-14 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col gap-6 p-4 md:hidden animate-slideDown">
          {/* Section 2 */}
          <div className="flex gap-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setMenuOpen(false);
                  router.push(item.link)
                }}
                className={`p-2 rounded-lg transition ${
                  active === item.id
                    ? "bg-white shadow text-black dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>

          {/* Section 3 mobile */}
          <div className="flex flex-nowrap flex-col gap-3">
            <div className="flex  items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 cursor-pointer">
              <LucidImage size={18} />
              <span className="text-sm">Gallery</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 cursor-pointer">
              <Headset size={18} />
              <span className="text-sm">Support</span>
            </div>
            <button className="p-2 w-fit bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Bell size={18} />
            </button>
            {mounted && (
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setMenuOpen(false);
                }}
                className="p-2 w-fit bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button className="p-2  rounded-lg bg-gradient-to-r md:from-pink-500 via-purple-500 to-blue-500 text-white">
            
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}



