import ImageGallery from "@/components/Gallery";
import GenerateSection from "@/components/GenerateSection";
import PreFooterSection from "@/components/PreFooterSection";

export default function Home() {
  return (
    <main className=" min-h-screen  bg-white dark:bg-black">
      <ImageGallery />
      <GenerateSection />
      <PreFooterSection />
    </main>
  );
}
