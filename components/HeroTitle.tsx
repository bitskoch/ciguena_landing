// src/components/HeroTitle.tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

type HeroTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroTitle({ children, className }: HeroTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.set(titleRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <h1 ref={titleRef} className={className}>
      {children}
    </h1>
  );
}