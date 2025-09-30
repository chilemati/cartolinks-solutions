
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cartolinks Solutions",
  description: "Cartolinks Solution assessment presented by Amadi Chile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="" >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // 👈 default theme is light
          enableSystem={false} // don’t auto-detect system theme
        >
            <Navbar />
           <div className="">  {children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

