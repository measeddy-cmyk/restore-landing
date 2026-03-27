"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn";

interface AnimateProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  style?: React.CSSProperties;
}

const initial: Record<AnimationType, React.CSSProperties> = {
  fadeUp:    { opacity: 0, transform: "translateY(40px)" },
  fadeLeft:  { opacity: 0, transform: "translateX(-50px)" },
  fadeRight: { opacity: 0, transform: "translateX(50px)" },
  fadeIn:    { opacity: 0 },
};

export function Animate({ children, type = "fadeUp", delay = 0, style }: AnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        ...initial[type],
        ...(visible ? {
          opacity: 1,
          transform: "none",
          transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        } : {
          transition: "none",
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
