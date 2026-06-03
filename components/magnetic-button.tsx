"use client";

import { ArrowUpRight } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function MagneticButton({
  href,
  children,
  variant = "default",
  className,
  icon = true,
  onClick
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
    setOffset({ x, y });
  }

  return (
    <Button asChild variant={variant} className={cn("will-change-transform", className)}>
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        onClick={onClick}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
        }}
      >
        {children}
        {icon ? <ArrowUpRight aria-hidden="true" className="h-4 w-4" /> : null}
      </a>
    </Button>
  );
}
