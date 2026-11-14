"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function HeroImageMotion({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0"
      initial={reduceMotion ? false : { scale: 1.16, filter: "blur(5px)" }}
      animate={reduceMotion ? undefined : { scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroTextMotion({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, scale: 1.07, y: 22, filter: "blur(7px)" }
      }
      animate={
        reduceMotion
          ? undefined
          : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{
        duration: 1.35,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroCardMotion({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 30, scale: 0.97, filter: "blur(5px)" }
      }
      animate={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      transition={{
        duration: 1.15,
        delay: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
