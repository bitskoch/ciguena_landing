// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-[#00F3FF] to-[#FF009D] bg-clip-text text-transparent">
        Calibración y Mantenimiento de Equipos
      </h1>

      <p className="max-w-xl text-lg text-zinc-600 mb-8 leading-relaxed">
        Garantizamos la precisión, seguridad y el rendimiento óptimo de tus equipos médicos y de laboratorio con estándares de alta calidad.
      </p>

      <div className="flex gap-4">
        <Link
          href="/contactanos"
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center transition-colors shadow-sm"
        >
          Contactar ahora
        </Link>
      </div>
    </div>
  );
}