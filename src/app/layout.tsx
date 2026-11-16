import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hom.example"),
  title: {
    default: "Hom | Homes in Dubai",
    template: "%s | Hom",
  },
  description:
    "Apartments, villas and penthouses in five Dubai master communities, from AED 1.2M with payment plans up to 80/20.",
  openGraph: {
    title: "Hom | Homes in Dubai",
    description:
      "Apartments, villas and penthouses in five Dubai master communities, from AED 1.2M.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#17140f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="label fixed left-4 top-4 z-[100] -translate-y-24 bg-gold px-4 py-3 text-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatButton />
        <SmoothScroll />
      </body>
    </html>
  );
}
