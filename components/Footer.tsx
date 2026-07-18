
import Link from 'next/link'

// Import generic icons from lucide-react
import {
    Link as LinkIcon, // Renamed to avoid conflict with Next.js Link
    Baby,
} from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const links = [
    {
        title: 'Clientes',
        href: '#',
    },
    {
        title: 'Servicios',
        href: '#',
    },
    {
        title: 'Ubícanos',
        href: '#',
    },
    {
        title: 'Contáctanos',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-yellow-500 text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {/* Using generic icons for social links */}
                    <Link
                        href="https://web.facebook.com/joselhuaynasi14/?locale=es_LA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 1" // Generic label
                        className="text-yellow-500 text-muted-foreground hover:text-primary block">
                        <FaFacebook className="size-6" /> {/* Generic "Share" icon */}
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 2"
                        className="text-yellow-500 text-muted-foreground hover:text-primary block">
                        <FaInstagram className="size-6" /> {/* Generic "Message" icon */}
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 3"
                        className="text-yellow-500 text-muted-foreground hover:text-primary block">
                        <FaWhatsapp className="size-6" /> {/* Generic "Link" icon */}
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 6"
                        className="text-yellow-500 text-muted-foreground hover:text-primary block">
                        <Baby className="size-6" /> {/* Generic "Feather" (post/write) icon */}
                    </Link>
                </div>
                <span className="text-yellow-500 text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Jose Huaynasi </span>
            </div>
        </footer>
    )
}