"use client";

import { motion, MotionProps, useReducedMotion } from "framer-motion";
import type { ComponentType, HTMLAttributes, ReactNode } from "react";

const MotionDiv = motion.div as ComponentType<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;

type RevealProps = {
  children: ReactNode;
  className: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionDiv
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionDiv>
  );
}

export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionDiv
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </MotionDiv>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionDiv
      className={className}
      variants={{
        hidden: reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 24, filter: "blur(5px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionDiv>
  );
}
