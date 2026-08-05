import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type Burst = { id: number; x: number; y: number };

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  target?: string;
  rel?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export default function MagneticButton({
  children,
  strength = 0.1,
  className = "",
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [hovered, setHovered] = useState(false);
  const [origin, setOrigin] = useState<"left" | "right">("left");

  function sideOf(e: MouseEvent<HTMLAnchorElement>): "left" | "right" {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return "left";
    return (e.clientX - rect.left) / rect.width < 0.5 ? "left" : "right";
  }

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handleMouseEnter(e: MouseEvent<HTMLAnchorElement>) {
    setOrigin(sideOf(e));
    setHovered(true);
  }

  function handleMouseLeave(e: MouseEvent<HTMLAnchorElement>) {
    setOrigin(sideOf(e));
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect && !reduceMotion) {
      const id = Date.now();
      const bx = e.clientX - rect.left;
      const by = e.clientY - rect.top;
      setBursts((prev) => [...prev, { id, x: bx, y: by }]);
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((burst) => burst.id !== id));
      }, 600);
    }
    onClick?.(e);
  }

  return (
    <motion.a
      ref={ref}
      style={{
        x: springX,
        y: springY,
        color: hovered ? "var(--color-accent-foreground)" : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative isolate transition-[color,box-shadow,filter] duration-300 ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
      >
        <span
          className={`block h-full w-full bg-accent ${
            reduceMotion ? "" : "transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
          }`}
          style={{
            transformOrigin: origin === "left" ? "0% 50%" : "100% 50%",
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </span>
      {children}
      {bursts.map((burst) => (
        <span
          key={burst.id}
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: burst.x, top: burst.y }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="animate-magnetic-burst absolute h-1 w-1 rounded-full bg-accent-foreground"
              style={{ "--angle": `${i * 60}deg` } as CSSProperties}
            />
          ))}
        </span>
      ))}
    </motion.a>
  );
}
