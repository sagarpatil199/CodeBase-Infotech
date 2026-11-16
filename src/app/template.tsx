"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

/** A short fade between pages. Skipped when the visitor prefers reduced motion. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
