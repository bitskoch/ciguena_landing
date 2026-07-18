// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="font-after text-4xl sm:text-5xl tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-amber-400 bg-clip-text text-transparent">
        Agencia de Comunicaciones y Marketing Digital en el Perú
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
        Ofrecemos servicios profesionales de agencia de comunicaciones y marketing digital en el Perú, ayudando a las empresas a mejorar su presencia en línea y alcanzar sus objetivos comerciales.
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