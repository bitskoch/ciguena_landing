// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-10 text-center">
      <HeroTitle
        className="font-after text-4xl text-sky-900 sm:text-5xl tracking-tight mb-6"
      >
        Agencia de Comunicaciones y Marketing Digital en el Perú
      </HeroTitle>
      <Image
        src="/images/dog.png"
        alt="male"
        width={1079}
        height={1285}
        className="rounded-xl mb-8"
        priority
      />
      <div className="max-w-xl bg-slate-800 border border-zinc-200 p-6 mb-8">
        <p className="text-lg text-white leading-relaxed text-left">
          Ofrecemos servicios profesionales de agencia de comunicaciones y marketing digital en el Perú, ayudando a las empresas a mejorar su presencia en línea y alcanzar sus objetivos comerciales.
        </p>
      </div>

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