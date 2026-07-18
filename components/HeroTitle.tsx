"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

type HeroTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroTitle({
  children,
  className,
}: HeroTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <h1 ref={titleRef} className={className}>
      {children}
    </h1>
  );
}