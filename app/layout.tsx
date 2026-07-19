import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Kalnia, Inter } from "next/font/google";

// fuente de google
const kalnia = Kalnia({
  subsets: ["latin"],
  variable: "--font-kalnia",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//fuente local 
const afterFont = localFont({
  src: "./fonts/after-regular.otf",
  variable: "--font-after",
  weight: "400", // ajusta según el peso real de tu archivo
});

export const metadata: Metadata = {
  title: "Cigüeña - Agencia de Comunicaciones",
  description: "Servicios profesionales de agencia de comunicaciones en el Perú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${afterFont.variable} ${kalnia.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900" suppressHydrationWarning>
        <Navbar />

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}