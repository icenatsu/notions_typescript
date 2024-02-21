import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sacramento } from "next/font/google";
import Navbar from "@components/Navbar";
import Providers from "./providers";

const inter = Inter({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font--inter",
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  preload: true,
  fallback: ["Arial", "sans serif"],
  adjustFontFallback: false,
  display: "swap",
  variable: "--font--sacramento",
});

export const metadata: Metadata = {
  title: "Ice's Revision Directory",
  description: "Cours et révisions décernées à la programmation web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${sacramento.variable}`}>
        <Providers>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer className="fixed bottom-0 w-full text-center text-sm">
            @Design by ice
          </footer>
        </Providers>
      </body>
    </html>
  );
}
