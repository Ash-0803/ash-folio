"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-1/3 right-4 w-[6px] h-1/3 max-h-[500px] z-50">
      {/* Background track */}
      <div className="absolute inset-0 bg-white/20 rounded-full" />
      {/* Progress indicator */}
      <motion.div
        className="absolute inset-0 bg-white rounded-full origin-top"
        style={{ scaleY }}
      />
    </div>
  );
}
