"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { learningStages, type LearningStage } from "@/data/technologies";

/**
 * A stage counts as "reached" once its top passes 55% of the viewport height.
 * The huge top margin keeps stages that have scrolled off the top reached.
 */
const ACTIVATION = "10000px 0px -45% 0px" as const;

/** The line from one stage's node to the next, filled by scroll position. */
function Segment() {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 55%", "end 55%"],
  });
  const tipTop = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const tipOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.97, 1],
    [0, 1, 1, 0],
  );

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="bg-line absolute top-8 left-1/2 h-full w-0.5 -translate-x-1/2 rounded-full sm:top-9"
    >
      <motion.span
        className="from-blue via-cyan to-violet absolute inset-0 origin-top rounded-full bg-gradient-to-b"
        style={{ scaleY: scrollYProgress }}
      />
      <motion.span
        className="bg-cyan absolute left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_4px_rgb(63_216_244/0.55)]"
        style={{ top: tipTop, opacity: tipOpacity }}
      />
    </span>
  );
}

function Stage({
  stage,
  index,
  isLast,
  reduce,
  onReach,
}: {
  stage: LearningStage;
  index: number;
  isLast: boolean;
  reduce: boolean;
  onReach: (index: number, reached: boolean) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: ACTIVATION });
  const reached = reduce || inView;

  useEffect(() => onReach(index, reached), [index, reached, onReach]);

  return (
    <li
      ref={ref}
      data-reached={reached}
      className="group grid grid-cols-[2.5rem_1fr] gap-x-3 pb-5 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-x-8 sm:pb-6"
    >
      {/* Node and connector */}
      <div className="relative">
        {!isLast && (reduce ? <StaticSegment /> : <Segment />)}
        <span className="border-line bg-bg text-muted group-data-[reached=true]:from-blue group-data-[reached=true]:to-cyan relative z-10 mt-3 grid size-10 place-items-center rounded-full border font-mono text-xs transition-all duration-500 group-data-[reached=true]:border-transparent group-data-[reached=true]:bg-gradient-to-br group-data-[reached=true]:text-white group-data-[reached=true]:shadow-[0_0_0_6px_rgb(63_216_244/0.12),0_0_28px_rgb(47_107_255/0.55)] sm:size-12 sm:text-sm">
          {stage.number}
          {reached && !reduce && (
            <motion.span
              aria-hidden="true"
              className="border-cyan absolute inset-0 rounded-full border-2"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 1.9, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          )}
        </span>
      </div>

      {/* Stage card */}
      <div className="border-line bg-surface/40 group-data-[reached=true]:border-cyan/35 group-data-[reached=true]:from-surface-2 group-data-[reached=true]:to-surface relative overflow-hidden rounded-2xl border p-5 opacity-55 transition-all duration-700 group-data-[reached=true]:bg-gradient-to-br group-data-[reached=true]:opacity-100 group-data-[reached=true]:shadow-[0_24px_60px_-30px_rgb(47_107_255/0.6)] sm:p-8">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -top-4 right-4 hidden text-[7.5rem] leading-none font-bold text-transparent transition-all duration-700 [-webkit-text-stroke:1px_var(--line)] group-data-[reached=true]:[-webkit-text-stroke-color:rgb(63_216_244/0.3)] sm:block"
        >
          {stage.number}
        </span>
        <div className="relative">
          <p className="text-muted group-data-[reached=true]:text-cyan text-sm font-medium transition-colors duration-500">
            Stage {stage.number}
          </p>
          <h3 className="mt-1.5 text-xl font-semibold sm:text-[1.75rem]">
            {stage.title}
          </h3>
          <p className="text-muted mt-2 max-w-md text-[0.9375rem] sm:text-base">
            {stage.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stage.technologies.map((tech, i) => (
              <li
                key={tech}
                className="chip group-data-[reached=true]:border-cyan/30 transition-colors duration-500"
                style={{
                  transitionDelay: reached ? `${150 + i * 80}ms` : "0ms",
                }}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

/** Fully drawn connector, used when the visitor prefers reduced motion. */
function StaticSegment() {
  return (
    <span
      aria-hidden="true"
      className="from-blue via-cyan to-violet absolute top-8 left-1/2 h-full w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b sm:top-9"
    />
  );
}

/** Sticky panel: which stage the reader has reached. Large screens only. */
function Progress({ reached }: { reached: boolean[] }) {
  const current = Math.max(0, reached.lastIndexOf(true));
  const stage = learningStages[current];
  const total = String(learningStages.length).padStart(2, "0");

  return (
    <div className="mt-12 hidden lg:block" aria-hidden="true">
      <div className="font-display flex items-baseline gap-2">
        <span className="relative inline-flex h-[4.5rem] overflow-hidden text-7xl leading-none font-semibold">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={stage.number}
              className="from-blue to-cyan bg-gradient-to-br bg-clip-text text-transparent"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {stage.number}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="text-muted text-2xl">/ {total}</span>
      </div>

      <div className="relative mt-3 h-8 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.p
            key={stage.title}
            className="font-display text-xl font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {stage.title}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex max-w-xs gap-1.5">
        {learningStages.map((s, i) => (
          <span
            key={s.number}
            className="bg-line relative h-1 flex-1 overflow-hidden rounded-full"
          >
            <motion.span
              className="from-blue to-cyan absolute inset-0 origin-left bg-gradient-to-r"
              initial={false}
              animate={{ scaleX: reached[i] ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * The five learning stages as a scroll-driven timeline: the line fills as
 * you scroll and each stage lights up when the line reaches it. With reduced
 * motion, everything is shown fully drawn and static.
 */
export function RoadmapShowcase({
  heading,
  lede,
  id,
  children,
}: {
  heading: string;
  lede: string;
  id?: string;
  children?: ReactNode;
}) {
  const reduce = useReducedMotion() ?? false;
  const [reached, setReached] = useState<boolean[]>(() =>
    learningStages.map(() => false),
  );

  const onReach = useCallback((index: number, value: boolean) => {
    setReached((prev) =>
      prev[index] === value
        ? prev
        : prev.map((r, i) => (i === index ? value : r)),
    );
  }, []);

  return (
    <section id={id} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="bg-blue/10 absolute top-1/4 -left-40 size-[30rem] rounded-full blur-[120px]" />
        <div className="bg-violet/10 absolute -right-40 bottom-1/4 size-[26rem] rounded-full blur-[120px]" />
      </div>

      <div className="wrap band relative grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="h2">{heading}</h2>
          <p className="lede mt-5">{lede}</p>
          <Progress reached={reached} />
          {children && <div className="mt-10">{children}</div>}
        </div>

        <ol aria-label="Learning stages, in order">
          {learningStages.map((stage, i) => (
            <Stage
              key={stage.number}
              stage={stage}
              index={i}
              isLast={i === learningStages.length - 1}
              reduce={reduce}
              onReach={onReach}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
