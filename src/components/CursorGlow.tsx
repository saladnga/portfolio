import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";
import type { RefObject } from "react";

type CursorGlowProps = {
  boundsRef: RefObject<HTMLElement | null>;
  radius?: number;
  size?: number;
  className?: string;
};

export default function CursorGlow({
  boundsRef,
  radius = 34,
  size = 200,
  className = "",
}: CursorGlowProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 55, damping: 16, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 55, damping: 16, mass: 0.7 });

  useEffect(() => {
    const bounds = boundsRef.current;
    const anchor = anchorRef.current;
    if (!bounds || !anchor || reduceMotion) return;

    function handleMove(e: MouseEvent) {
      const rect = anchor!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const factor = Math.min(dist, radius) / dist;
      x.set(dx * factor);
      y.set(dy * factor);
    }

    function handleLeave() {
      x.set(0);
      y.set(0);
    }

    bounds.addEventListener("mousemove", handleMove);
    bounds.addEventListener("mouseleave", handleLeave);
    return () => {
      bounds.removeEventListener("mousemove", handleMove);
      bounds.removeEventListener("mouseleave", handleLeave);
    };
  }, [boundsRef, radius, reduceMotion, x, y]);

  return (
    <div
      ref={anchorRef}
      className={`pointer-events-none absolute inset-0 overflow-visible ${className}`}
    >
      <motion.div
        style={{ x: springX, y: springY, width: size, height: size }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/45 blur-[55px]"
      />
      <motion.div
        style={{
          x: springX,
          y: springY,
          width: size * 0.45,
          height: size * 0.45,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/80 blur-2xl"
      />
    </div>
  );
}
