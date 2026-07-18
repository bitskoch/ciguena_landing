import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="border-b border-zinc-200 bg-white">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-3 font-bold text-lg text-zinc-900 hover:opacity-90 transition-opacity"
                >
                    <Image
                        src="/next.svg"
                        alt="Next.js"
                        width={180}
                        height={38}
                        className="h-8 w-auto"
                    />
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
    );
}