"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const smallImages = [
    "/images/carlos.jpg",
    "/images/carlos2.jpg",
    "/images/carlos3.jpg",
];

export default function Card() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                const next = (prev + 1) % smallImages.length;
                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Image
                key={currentImage} //para usar el mismo efecto en cada imagen
                src={smallImages[currentImage]}
                alt="Carlos"
                width={400}
                height={250}
            />
        </div>
    );
}