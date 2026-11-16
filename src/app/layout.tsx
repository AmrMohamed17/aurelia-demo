import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
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
    <html lang="en" className={`${bodoni.variable} ${jost.variable} antialiased`}>
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
      </body>
    </html>
  );
}
