import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/language";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

import { Hind_Siliguri } from "next/font/google";
const hindSiliguri = Hind_Siliguri({
  variable: "--font-logo",
  subsets: ["bengali"],
  weight: ["700"],
});

export const metadata = {
  title: "সাহস — Sahosh | Ragging & Harassment Reporting Portal",
  description:
    "সাহস (Sahosh) — Bangladesh's trusted portal to report ragging, harassment, eve-teasing, and bullying for madrasha, school, college, and university students.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${inter.variable} ${notoBengali.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 selection:bg-primary-500 selection:text-white">
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
