import Link from "next/link";
import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";
import { ArrowRight } from "lucide-react";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <div className="bg-yellow-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Columna izquierda */}
          <div className="px-6 lg:px-20 py-16">
            <HeroTitle className="font-kalnia text-5xl lg:text-6xl leading-tight text-white">
              Conferencias de IMPACTO
            </HeroTitle>

            <p className="mt-6 font-inter font-light text-lg text-white max-w-xl">
              Ofrecemos servicios profesionales de comunicación estratégica,
              marketing digital y desarrollo de marca para impulsar el crecimiento
              de tu empresa.
            </p>

            <div className="mt-10">
              <Link
                href="/contactanos"
                className="group inline-flex items-center gap-2 text-white font-inter font-medium hover:text-blue-900 transition-colors"
              >
                Contáctanos
                <span className="ml-2 inline-block">
                  <ArrowRight size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative h-[500px] lg:h-[700px]">
            <Image
              src="/images/modelo.jpg"
              alt="Modelo"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
      {/* Sección de descripción */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full px-6 py-2">
        <div className="lg:col-span-1">
          {/* Todo tu contenido */}
          <HeroTitle
            className="font-after text-3xl sm:text-2xl tracking-tight mb-6 bg-gradient-to-r from-blue-900 from-10% to-yellow-500 to-90% bg-clip-text text-transparent break-words"
          >
            Agencia de Comunicaciones y Marketing Digital en el Perú
          </HeroTitle>

          <Image
            src="/images/person4.jpg"
            alt="male"
            width={1079}
            height={1285}
            className="rounded-xl mb-8"
            priority
          />

          <div className="bg-blue-900 border border-zinc-200 p-6 mb-8">
            <p className="text-lg text-white leading-relaxed text-left">
              Ofrecemos servicios profesionales...
            </p>
          </div>

          <div className="flex gap-4">
          </div>
        </div>
        <div className="lg:col-span-1">
          {/* Todo tu contenido */}
          <HeroTitle
            className="font-after text-3xl sm:text-2xl tracking-tight mb-6 bg-gradient-to-r from-blue-900 from-10% to-yellow-500 to-90% bg-clip-text text-transparent break-words"
          >
            Agencia de Comunicaciones y Marketing Digital en el Perú
          </HeroTitle>

          <Image
            src="/images/person2.jpg"
            alt="male"
            width={1079}
            height={1285}
            className="rounded-xl mb-8"
            priority
          />

          <div className="bg-blue-900 border border-zinc-200 p-6 mb-8">
            <p className="text-lg text-white leading-relaxed text-left">
              Ofrecemos servicios profesionales...
            </p>
          </div>
        </div>
        <div className="lg:col-span-1">
          {/* Todo tu contenido */}
          <HeroTitle
            className="font-after text-3xl sm:text-2xl tracking-tight mb-6 bg-gradient-to-r from-blue-900 from-10% to-yellow-500 to-90% bg-clip-text text-transparent break-words"
          >
            Agencia de Comunicaciones y Marketing Digital en el Perú
          </HeroTitle>

          <Image
            src="/images/person3.jpg"
            alt="male"
            width={1079}
            height={1285}
            className="rounded-xl mb-8"
            priority
          />

          <div className="bg-blue-900 border border-zinc-200 p-6 mb-8">
            <p className="text-lg text-white leading-relaxed text-left">
              Ofrecemos servicios profesionales...
            </p>
          </div>

          <div className="flex gap-4">
          </div>
        </div>
        <div className="lg:col-span-1">
          {/* Todo tu contenido */}
          <HeroTitle
            className="font-after text-3xl sm:text-2xl tracking-tight mb-6 bg-gradient-to-r from-blue-900 from-10% to-yellow-500 to-90% bg-clip-text text-transparent break-words"
          >
            Agencia de Comunicaciones y Marketing Digital en el Perú
          </HeroTitle>

          <Image
            src="/images/person1.jpg"
            alt="male"
            width={1079}
            height={1285}
            className="rounded-xl mb-8"
            priority
          />

          <div className="bg-blue-900 border border-zinc-200 p-6 mb-8">
            <p className="text-lg text-white leading-relaxed text-left">
              Ofrecemos servicios profesionales...
            </p>
          </div>

          <div className="flex gap-4">
          </div>
        </div>
      </div>
      <div className="justify-center flex gap-4">
        <Link
          href="/contactanos"
          className="border-2 rounded-xl border-slate-500 border-dashed px-6 py-2 text-slate-600 "
        >
          Contactar ahora
        </Link>
      </div>
      <div className="flex justify-center mt-8 mx-8">
        <div className="max-w-sm bg bg-yellow-500 overflow-hidden rounded-xl shadow-xs">
          <Card />
          <div className="font-inter px-6 py-4">
            <div className="font-medium mb-2 text-xl text-white font-bold">
              IMPULSANDO TU MARCA PERSONAL
            </div>

            <p className="text-base text-white font-light">
              Coberturado con multiples medios de comunicación locales.
            </p>
          </div>

          <div className="font-inter px-6 pt-4 pb-2">
            <span className="mr-2 mb-2 inline-block rounded-full bg-blue-900 px-3 py-1 text-sm text-white">
              #Trasmisiones en vivo
            </span>

            <span className="mr-2 mb-2 inline-block rounded-full bg-blue-900 px-3 py-1 text-sm text-white">
              #Conferencias
            </span>

            <span className="mr-2 mb-2 inline-block rounded-full bg-blue-900 px-3 py-1 text-sm text-white">
              #Marketing Digital
            </span>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
