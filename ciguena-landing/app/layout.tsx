// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // <-- Importante para navegación rápida sin recargar
import Image from "next/image"; // <-- Importante para optimización de imágenes
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cigüeña - Calibración de Equipos",
  description: "Servicios profesionales de calibración y mantenimiento en Perú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        
        {/* Barra de navegación global */}
        <header className="border-b border-zinc-200 bg-white">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-zinc-900">
              Cigüeña
            </Link>
            <Link href="/" className="flex items-center gap-3 font-bold text-lg text-zinc-900 hover:opacity-90 transition-opacity">
              <Image 
                src="/next.svg" // Recuerda guardar tu imagen con este nombre exacto en la carpeta public
                alt="Logo de Cigüeña"
                width={32}  // Ajustamos el tamaño para que encaje perfectamente en la barra de navegación (32px de ancho)
                height={32} // (32px de alto)
                className="object-contain"
              />
              <span>Cigüeña</span>
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="/contactanos" className="hover:text-blue-600 transition-colors">
                Contáctanos
              </Link>
            </nav>
          </div>
        </header>

        {/* Contenido dinámico de cada página */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Pie de página global */}
        <footer className="border-t border-zinc-200 bg-white py-6 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Cigüeña. Todos los derechos reservados.</p>
        </footer>

      </body>
    </html>
  );
}