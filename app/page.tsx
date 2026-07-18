// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="font-after text-4xl sm:text-5xl tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-amber-400 bg-clip-text text-transparent">
        Calibración y Mantenimiento de Equipos
      </h1>
      <Image
        src="/images/dog.jpg"
        alt="Equipos médicos y de laboratorio calibrados"
        width={612}
        height={459}
        className="rounded-xl mb-8"
        priority
      />
      <p className="font-after max-w-xl text-lg text-zinc-500 mb-8 leading-relaxed">
        Garantizamos la precisión, seguridad y el rendimiento óptimo de tus equipos médicos y de laboratorio con estándares de alta calidad.
      </p>

      <div className="flex gap-4">
        <Link
          href="/contactanos"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-after h-12 px-6 rounded-lg flex items-center justify-center transition-colors shadow-sm"
        >
          Contactar ahora
        </Link>
      </div>
    </div>
  );
}