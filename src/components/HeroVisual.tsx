"use client";

import { motion, useReducedMotion } from "motion/react";
import { learningStages } from "@/data/technologies";

const ROW = 68; // px per commit row
const colors = [
  "var(--blue)",
  "var(--blue)",
  "var(--cyan)",
  "var(--cyan)",
  "var(--violet)",
];

/**
 * The hero illustration: the programme drawn as a commit graph, the way a
 * codebase grows. Plain HTML and SVG, so it is light enough for mobile
 * with no separate fallback. Plays once on load; static with reduced motion.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const railHeight = (learningStages.length - 1) * ROW;

  return (
    <div
      className="border-line bg-surface relative overflow-hidden rounded-2xl border shadow-[0_40px_80px_-40px_rgb(20_40_120/0.55)]"
      role="img"
      aria-label={`The programme as five commits on one branch: ${learningStages
        .map((s) => s.title)
        .join(", ")}.`}
    >
      {/* window bar */}
      <div className="border-line flex items-center gap-2 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="text-muted ml-3 truncate font-mono text-xs">
          git log --graph learning-path
        </span>
      </div>

      <div className="relative px-5 py-6 sm:px-7" aria-hidden="true">
        {/* the branch line */}
        <motion.span
          className="absolute left-[calc(1.25rem+7px)] w-0.5 origin-top rounded-full sm:left-[calc(1.75rem+7px)]"
          style={{
            top: `calc(1.5rem + ${ROW / 2}px)`,
            height: railHeight,
            background:
              "linear-gradient(var(--blue), var(--cyan) 55%, var(--violet))",
          }}
          initial={reduce ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
        />

        <ol>
          {learningStages.map((stage, i) => (
            <motion.li
              key={stage.number}
              className="relative flex items-center gap-4"
              style={{ height: ROW }}
              initial={reduce ? false : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.35 + i * 0.3 }}
            >
              <span
                className="bg-surface relative z-10 size-4 shrink-0 rounded-full border-[3px]"
                style={{ borderColor: colors[i] }}
              />
              <span className="min-w-0 flex-1">
                <span className="font-display text-ink block truncate text-[0.9375rem] font-semibold">
                  <span className="text-muted mr-2 font-mono text-xs font-normal">
                    {stage.number}
                  </span>
                  {stage.title}
                </span>
                <span className="text-muted mt-0.5 block truncate font-mono text-xs">
                  {stage.technologies.join("  ")}
                </span>
              </span>
            </motion.li>
          ))}
        </ol>

        <motion.p
          className="border-line text-muted mt-3 flex items-center gap-2 border-t pt-4 font-mono text-xs"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="bg-cyan/15 text-cyan rounded px-1.5 py-0.5">
            HEAD
          </span>
          Full Stack Developer &amp; Data Engineer
        </motion.p>
      </div>
    </div>
  );
}
