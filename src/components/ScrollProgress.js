// client/src/components/ScrollProgress.js
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress Indicator
 * Adheres to Modern Web Guidance:
 * - Uses native CSS scroll-timeline where supported (@supports (animation-timeline: scroll())).
 * - Fallbacks gracefully to Framer Motion useSpring for browsers without CSS scroll-timeline.
 * - Always includes aria-hidden="true" to remove purely decorative indicator from screen readers.
 */
const ScrollProgress = () => {
  const [hasNativeSupport, setHasNativeSupport] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.CSS && CSS.supports("(animation-timeline: scroll())")) {
      setHasNativeSupport(true);
    }
  }, []);

  if (hasNativeSupport) {
    return <div className="native-scroll-indicator" aria-hidden="true" />;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-purple-500 to-cyan-400 origin-left z-[9999] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
