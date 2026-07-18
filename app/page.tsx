import Link from "next/link";
import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";

export default function Home() {
  return (
    <>
      <div className="bg-yellow-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Columna izquierda */}
          <div className="px-8 lg:px-20 py-16">
            <HeroTitle className="font-after text-3xl lg:text-6xl leading-tight text-white">
              Conferencias de IMPACTO
            </HeroTitle>

            <p className="mt-6 text-lg text-white max-w-xl">
              Ofrecemos servicios profesionales de comunicación estratégica,
              marketing digital y desarrollo de marca para impulsar el crecimiento
              de tu empresa.
            </p>

            <div className="mt-10">
              <Link
                href="/contactanos"
                className="inline-flex border border-white hover:bg-blue-900 text-white px-8 py-4 rounded-full transition-colors"
              >
                Contáctanos
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
          className="bg-yellow-500 hover:bg-blue-900 text-white font-after h-12 px-6 rounded-lg flex items-center justify-center transition-colors shadow-sm"
        >
          Contactar ahora
        </Link>
      </div>
      <br />

    </>
  );
}
