// client/src/components/IndustryProjects.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Building2, 
  CheckCircle2,
  Eye,
  Compass,
  Utensils,
  ShoppingBag,
  Fish,
  Wine
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import { industryProjects } from "../data/portfolioData";

// Color palettes for each commercial project's 3D spine based on the Vela pastel palette
const spineStyles = [
  {
    accent: "#F2772F",
    border: "rgba(242, 119, 47, 0.35)",
    bg: "linear-gradient(180deg, #F8DCC7 0%, #F4EBC6 100%)",
    textColor: "#0D0D0C",
    tag: "F&B",
    monogram: "PW",
    icon: Utensils,
    shortTitle: "POHEWALA FOODS"
  },
  {
    accent: "#3FB874",
    border: "rgba(63, 184, 116, 0.35)",
    bg: "linear-gradient(180deg, #E9EBE0 0%, #DFE9D4 100%)",
    textColor: "#0D0D0C",
    tag: "SAFARI",
    monogram: "S&S",
    icon: Compass,
    shortTitle: "SHUTTER & STRIPES"
  },
  {
    accent: "#C564C4",
    border: "rgba(197, 100, 196, 0.35)",
    bg: "linear-gradient(180deg, #F0E4E6 0%, #ECD6E2 100%)",
    textColor: "#0D0D0C",
    tag: "LUXE",
    monogram: "SB",
    icon: ShoppingBag,
    shortTitle: "SUMAM'S BOUTIQUE"
  },
  {
    accent: "#2B8A83",
    border: "rgba(43, 138, 131, 0.35)",
    bg: "linear-gradient(180deg, #E2EDEA 0%, #D1E5E2 100%)",
    textColor: "#0D0D0C",
    tag: "DINING",
    monogram: "LJ",
    icon: Fish,
    shortTitle: "LA JHINGA SEAFOOD"
  },
  {
    accent: "#E9C22E",
    border: "rgba(233, 194, 46, 0.4)",
    bg: "linear-gradient(180deg, #F2ECDF 0%, #F9CBA9 100%)",
    textColor: "#0D0D0C",
    tag: "NIGHT",
    monogram: "9PM",
    icon: Wine,
    shortTitle: "9PM BAR & CAFE"
  }
];

const NUM_PROJECTS = industryProjects.length; // 5
const COPIES = 3;
const TOTAL_CASES = NUM_PROJECTS * COPIES; // 15 virtual cases

const IndustryProjects = () => {
  const containerRef = useRef(null);
  const shelfRef = useRef(null);
  const tapeRefs = useRef([]);
  const coverRefs = useRef([]);
  const spineShadeRefs = useRef([]);
  const coverShadeRefs = useRef([]);
  const playRingRef = useRef(null);
  const cursorRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHoveringCover, setIsHoveringCover] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  // Physics state refs to avoid re-renders inside requestAnimationFrame
  const physics = useRef({
    s: 5,           // current scroll position (starts in middle set)
    T: 5,           // target scroll position
    isDragging: false,
    startX: 0,
    startT: 5,
    hasMoved: false,
    hoveredVirtualIndex: -1,
    lift: new Array(TOTAL_CASES).fill(0),
    tiltX: 0,
    tiltY: 0,
    targetTiltX: 0,
    targetTiltY: 0,
    mx: 0,
    my: 0,
    cx: 0,
    cy: 0,
    lastTime: performance.now(),
    width: 1200,
    H: 390,
    ws: 78,
    d: 250,
    gap: 14,
    wheelTimer: null
  });

  const prevActiveRef = useRef(0);

  // Dimensions calculation helper
  const updateDimensions = useCallback(() => {
    if (!shelfRef.current) return;
    const rect = shelfRef.current.getBoundingClientRect();
    const w = rect.width || window.innerWidth;
    
    let h = Math.min(420, Math.max(280, w * 0.35));
    if (w < 768) {
      h = Math.min(320, Math.max(260, w * 0.65));
    }

    const ws = h * 0.20;       // spine width
    const d = h * 0.64;        // cover width
    const gap = Math.max(10, h * 0.035);

    physics.current.width = w;
    physics.current.H = h;
    physics.current.ws = ws;
    physics.current.d = d;
    physics.current.gap = gap;
  }, []);

  // Set up resize listener
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // Main 3D requestAnimationFrame Engine
  useEffect(() => {
    let animationFrameId;

    const tick = (now) => {
      const p = physics.current;
      const dt = Math.min(0.05, (now - p.lastTime) / 1000);
      p.lastTime = now;

      // Spring physics
      const k = p.isDragging ? 18 : 5.4;
      p.s += (p.T - p.s) * (1 - Math.exp(-k * dt));

      if (Math.abs(p.T - p.s) < 0.0001) {
        p.s = p.T;
      }

      // Infinite shelf normalization
      if (p.s >= 10) {
        p.s -= 5;
        p.T -= 5;
      } else if (p.s < 5) {
        p.s += 5;
        p.T += 5;
      }

      // Check current active project index
      const rawCurrent = Math.round(p.s);
      const computedActive = ((rawCurrent % NUM_PROJECTS) + NUM_PROJECTS) % NUM_PROJECTS;

      if (computedActive !== prevActiveRef.current) {
        const dir = p.T >= p.s ? 1 : -1;
        setDirection(dir);
        prevActiveRef.current = computedActive;
        setActiveIndex(computedActive);
      }

      // Smooth mouse tracking for custom cursor and active cover tilt
      p.cx += (p.mx - p.cx) * (1 - Math.exp(-18 * dt));
      p.cy += (p.my - p.cy) * (1 - Math.exp(-18 * dt));

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0)`;
      }

      // Tilt active cover towards cursor
      p.tiltX += (p.targetTiltX - p.tiltX) * (1 - Math.exp(-7 * dt));
      p.tiltY += (p.targetTiltY - p.tiltY) * (1 - Math.exp(-7 * dt));

      // Play ring scaling & position
      if (playRingRef.current) {
        const ringDist = Math.max(0, 1 - Math.abs(p.T - p.s) * 3);
        const ringScale = ringDist * ringDist * (3 - 2 * ringDist); // smoothstep
        playRingRef.current.style.transform = `translate3d(${p.width / 2 - p.d * 0.5 - 12}px, ${p.H * 0.38}px, 120px) scale(${ringScale})`;
        playRingRef.current.style.opacity = ringScale > 0.05 ? "1" : "0";
      }

      // Update all virtual project cases
      const H = p.H;
      const ws = p.ws;
      const d = p.d;
      const gap = p.gap;
      const halfWidth = p.width / 2;

      for (let v = 0; v < TOTAL_CASES; v++) {
        const el = tapeRefs.current[v];
        if (!el) continue;

        let r = ((v - p.s) % TOTAL_CASES + TOTAL_CASES + TOTAL_CASES / 2) % TOTAL_CASES - TOTAL_CASES / 2;

        const roughX = r * (ws + gap);
        if (Math.abs(roughX) > halfWidth + 1.8 * d) {
          el.style.visibility = "hidden";
          continue;
        } else {
          el.style.visibility = "visible";
        }

        const isHovered = p.hoveredVirtualIndex === v && Math.abs(r) > 0.5;
        const targetLift = isHovered ? 1 : 0;
        p.lift[v] += (targetLift - p.lift[v]) * (1 - Math.exp(-12 * dt));

        let Br;
        if (Math.abs(r) < 1) {
          Br = (r + Math.sin(Math.PI * r) / Math.PI) / 2;
        } else {
          Br = r > 0 ? 0.5 : -0.5;
        }
        const x = r * (ws + gap) + (d - ws + 1.6 * gap) * Br;

        const clampVal = Math.max(0, 1 - Math.abs(r));
        const o = clampVal * clampVal * (3 - 2 * clampVal);

        const rotY = -90 * o + p.tiltY * o;
        const rotX = p.tiltX * o;
        const rotZ = -4.5 * o;
        const transZ = o * 0.22 * H;
        const transY = -o * 0.03 * H - p.lift[v] * 0.05 * H;

        el.style.transform = `translate3d(${x}px, ${transY}px, ${transZ}px) rotateZ(${rotZ}deg) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        el.style.zIndex = Math.round(100 - Math.abs(r) * 4);

        if (spineShadeRefs.current[v]) {
          spineShadeRefs.current[v].style.opacity = (o * 0.45).toFixed(3);
        }
        if (coverShadeRefs.current[v]) {
          coverShadeRefs.current[v].style.opacity = ((1 - o) * 0.4).toFixed(3);
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Mouse move handler for tilt & custom cursor
  const handleMouseMove = (e) => {
    if (!shelfRef.current) return;
    const rect = shelfRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const p = physics.current;

    p.mx = mx;
    p.my = my;

    const centerX = p.width / 2;
    const centerY = rect.height / 2;
    const isNearCoverX = Math.abs(mx - centerX) < p.d * 0.55;
    const isNearCoverY = Math.abs(my - centerY) < p.H * 0.55;

    if (isNearCoverX && isNearCoverY && Math.abs(p.T - p.s) < 0.35) {
      p.targetTiltY = ((mx - centerX) / (0.55 * p.d)) * 9;
      p.targetTiltX = -((my - centerY) / (0.5 * p.H)) * 6;
      setIsHoveringCover(true);
    } else {
      p.targetTiltY = ((mx - centerX) / p.width) * 4;
      p.targetTiltX = 0;
      setIsHoveringCover(false);
    }
  };

  // Drag interaction
  const handlePointerDown = (e) => {
    const p = physics.current;
    p.isDragging = true;
    p.hasMoved = false;
    p.startX = e.clientX;
    p.startT = p.T;

    if (e.target.setPointerCapture) {
      try {
        e.target.setPointerCapture(e.pointerId);
      } catch (err) {
        // ignore
      }
    }
  };

  const handlePointerMove = (e) => {
    handleMouseMove(e);
    const p = physics.current;
    if (!p.isDragging) return;

    const dx = e.clientX - p.startX;
    if (Math.abs(dx) > 5) {
      p.hasMoved = true;
    }

    const step = p.ws + p.gap;
    p.T = p.startT - dx / step;
  };

  const handlePointerUp = (e) => {
    const p = physics.current;
    if (p.isDragging) {
      p.isDragging = false;
      p.T = Math.round(p.T);
      if (e.target.releasePointerCapture) {
        try {
          e.target.releasePointerCapture(e.pointerId);
        } catch (err) {
          // ignore
        }
      }
    }
  };

  // Mouse wheel interaction
  const handleWheel = (e) => {
    const p = physics.current;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 4) return;

    const step = p.ws + p.gap;
    p.T += (delta / step) * 0.35;

    clearTimeout(p.wheelTimer);
    p.wheelTimer = setTimeout(() => {
      p.T = Math.round(p.T);
    }, 180);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        physics.current.T = Math.round(physics.current.T) - 1;
      } else if (e.key === "ArrowRight") {
        physics.current.T = Math.round(physics.current.T) + 1;
      } else if (e.key === "Enter" && !selectedProject) {
        setSelectedProject(industryProjects[activeIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, selectedProject]);

  const handleTapeClick = (virtualIndex) => {
    const p = physics.current;
    if (p.hasMoved) return;

    let r = ((virtualIndex - p.s) % TOTAL_CASES + TOTAL_CASES + TOTAL_CASES / 2) % TOTAL_CASES - TOTAL_CASES / 2;

    if (Math.abs(r) < 0.5) {
      setSelectedProject(industryProjects[activeIndex]);
    } else {
      p.T = Math.round(p.T + r);
    }
  };

  const handleJumpToProject = (targetProjIndex) => {
    const p = physics.current;
    let diff = (targetProjIndex - activeIndex) % NUM_PROJECTS;
    if (diff > 2) diff -= 5;
    if (diff < -2) diff += 5;
    p.T = Math.round(p.T) + diff;
  };

  const handlePrev = () => {
    physics.current.T = Math.round(physics.current.T) - 1;
  };

  const handleNext = () => {
    physics.current.T = Math.round(physics.current.T) + 1;
  };

  const currentProject = industryProjects[activeIndex];
  const currentSpine = spineStyles[activeIndex];

  return (
    <section 
      id="industry-projects" 
      ref={containerRef}
      className="relative py-20 md:py-28 px-4 bg-[#FBF6EF] overflow-hidden select-none border-t border-b border-[#0D0D0C]/10 font-interTight"
    >
      {/* Ambient background glows in Vela pastel palette */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#F8DCC7]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#DFE9D4]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-semibold text-[#0D0D0C] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3FB874] animate-pulse" />
            <span>Real-World Commercial Deliverables</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0D0D0C]">
            Commercial & <span className="apricot-text-gradient">Industry Projects</span>
          </h2>

          <p className="text-[#0D0D0C]/65 text-sm md:text-base leading-relaxed">
            Engineered, deployed, and live in production. Browse the collector’s shelf of client platforms across food & beverage, wildlife tourism, luxury handlooms, and nightlife.
          </p>
        </div>

        {/* Sector Navigation Tabs with sliding ink indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#F4F2ED] border border-[#0D0D0C]/10 shadow-sm overflow-x-auto max-w-full">
            {industryProjects.map((proj, idx) => {
              const isSelected = activeIndex === idx;
              const SpineIcon = spineStyles[idx].icon;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleJumpToProject(idx)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                    isSelected ? "text-[#FBF6EF] font-bold" : "text-[#0D0D0C]/70 hover:text-[#0D0D0C]"
                  }`}
                >
                  {isSelected && (
                    <span 
                      className="absolute inset-0 rounded-full bg-[#0D0D0C] shadow-sm transition-all duration-500" 
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <SpineIcon className="w-3.5 h-3.5" />
                    <span>{proj.client}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Shelf Stage Viewport */}
        <div 
          ref={shelfRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          onMouseEnter={() => setShowCustomCursor(true)}
          onMouseLeave={() => {
            setShowCustomCursor(false);
            physics.current.hoveredVirtualIndex = -1;
            physics.current.targetTiltX = 0;
            physics.current.targetTiltY = 0;
          }}
          className="relative w-full h-[420px] md:h-[480px] perspective-stage cursor-grab active:cursor-grabbing overflow-visible flex items-center justify-center"
          style={{ touchAction: "pan-y" }}
        >
          {/* Custom smooth cursor inside the 3D stage */}
          {showCustomCursor && (
            <div
              ref={cursorRef}
              className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
                isHoveringCover 
                  ? "w-20 h-20 rounded-full bg-[#0D0D0C] text-[#FBF6EF] font-bold text-[10px] tracking-wider shadow-xl"
                  : "w-8 h-8 rounded-full border border-[#0D0D0C]/60 bg-[#0D0D0C]/10 backdrop-blur-xs"
              }`}
            >
              {isHoveringCover ? "EXPLORE ↗" : <div className="w-1.5 h-1.5 rounded-full bg-[#0D0D0C]" />}
            </div>
          )}

          {/* Center 3D Stage Container */}
          <div className="absolute top-1/2 left-1/2 w-0 h-0 preserve-3d">
            
            {/* Array of 15 Virtual Cases */}
            {Array.from({ length: TOTAL_CASES }).map((_, v) => {
              const projIdx = v % NUM_PROJECTS;
              const proj = industryProjects[projIdx];
              const spine = spineStyles[projIdx];
              const SpineIcon = spine.icon;

              return (
                <div
                  key={v}
                  ref={(el) => (tapeRefs.current[v] = el)}
                  onClick={() => handleTapeClick(v)}
                  onPointerEnter={() => (physics.current.hoveredVirtualIndex = v)}
                  onPointerLeave={() => {
                    if (physics.current.hoveredVirtualIndex === v) {
                      physics.current.hoveredVirtualIndex = -1;
                    }
                  }}
                  className="absolute top-0 left-0 w-0 h-0 preserve-3d cursor-pointer"
                >
                  {/* Spine Face (.sp) */}
                  <div
                    className="absolute rounded-lg preserve-3d overflow-hidden backface-hidden border shadow-md transition-colors"
                    style={{
                      width: `${physics.current.ws}px`,
                      height: `${physics.current.H}px`,
                      left: `-${physics.current.ws / 2}px`,
                      top: `-${physics.current.H / 2}px`,
                      transform: `translateZ(${physics.current.d / 2}px)`,
                      background: spine.bg,
                      borderColor: spine.border,
                      color: spine.textColor,
                    }}
                  >
                    {/* Spine Sheen and Depth Grooves */}
                    <div className="absolute inset-0 spine-groove pointer-events-none" />

                    {/* Spine Content Layout */}
                    <div className="relative w-full h-full p-2.5 flex flex-col justify-between items-center text-center">
                      {/* Top Brand Monogram */}
                      <div className="flex flex-col items-center gap-1">
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold shadow-sm border bg-white"
                          style={{ 
                            borderColor: spine.border,
                            color: spine.accent 
                          }}
                        >
                          <SpineIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3FB874] mt-0.5" />
                      </div>

                      {/* Vertical Title Bar */}
                      <div className="flex-1 flex items-center justify-center py-2">
                        <span 
                          className="writing-mode-vertical text-[11px] md:text-xs font-mono font-bold tracking-widest uppercase text-[#0D0D0C]"
                        >
                          {spine.shortTitle}
                        </span>
                      </div>

                      {/* Bottom Badge */}
                      <div className="w-full flex flex-col items-center gap-1 border-t border-[#0D0D0C]/10 pt-1.5">
                        <span 
                          className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white shadow-xs"
                          style={{ color: spine.accent }}
                        >
                          {spine.tag}
                        </span>
                        <span className="text-[8px] font-mono text-[#0D0D0C]/60 tracking-wider">
                          LIVE 2025
                        </span>
                      </div>
                    </div>

                    {/* Spine Shading Layer */}
                    <div
                      ref={(el) => (spineShadeRefs.current[v] = el)}
                      className="absolute inset-0 bg-[#0D0D0C] pointer-events-none"
                      style={{ opacity: 0 }}
                    />
                  </div>

                  {/* Cover Face (.cv) */}
                  <div
                    ref={(el) => (coverRefs.current[v] = el)}
                    className="absolute rounded-2xl preserve-3d overflow-hidden backface-hidden border border-[#0D0D0C]/15 shadow-2xl group bg-white"
                    style={{
                      width: `${physics.current.d}px`,
                      height: `${physics.current.H}px`,
                      left: `-${physics.current.d / 2}px`,
                      top: `-${physics.current.H / 2}px`,
                      transform: `rotateY(90deg) translateZ(${physics.current.ws / 2}px)`,
                      boxShadow: "0 25px 60px -15px rgba(13, 13, 12, 0.25)"
                    }}
                  >
                    {/* High-Resolution Project Screenshot */}
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Cover Header Badge */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/95 text-[#0D0D0C] border border-[#0D0D0C]/10 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3FB874] animate-pulse" />
                        Live in Production
                      </span>

                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold text-[#0D0D0C] bg-white/95 border border-[#0D0D0C]/10 backdrop-blur-md">
                        {spine.tag}
                      </span>
                    </div>

                    {/* Bottom Cover Title Ribbon */}
                    <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 border border-[#0D0D0C]/10 backdrop-blur-md flex items-center justify-between gap-2 shadow-sm pointer-events-none">
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-mono text-[#F2772F] font-semibold uppercase truncate">
                          {proj.industry}
                        </div>
                        <div className="text-xs font-bold text-[#0D0D0C] truncate">
                          {proj.title}
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-[#0D0D0C] text-[#FBF6EF] flex items-center justify-center shrink-0 shadow-sm">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Cover Shading Layer */}
                    <div
                      ref={(el) => (coverShadeRefs.current[v] = el)}
                      className="absolute inset-0 bg-[#0D0D0C] pointer-events-none"
                      style={{ opacity: 0 }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Floating Action Ring near active cover */}
            <div
              ref={playRingRef}
              onClick={() => setSelectedProject(industryProjects[activeIndex])}
              className="absolute left-0 top-0 w-11 h-11 rounded-full bg-[#0D0D0C] text-[#FBF6EF] flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 hover:bg-[#252523] transition-all z-40"
              title="Explore Case Study"
            >
              <Eye className="w-5 h-5 ml-0.5" />
            </div>

            {/* Physical Shelf Rail underneath the boxes */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 h-2.5 rounded-full bg-[#F4F2ED] border-t border-[#0D0D0C]/15 shelf-glow-line pointer-events-none shadow-sm"
              style={{
                top: `${physics.current.H / 2 + 4}px`,
                width: `${Math.min(physics.current.width * 0.95, 1150)}px`,
              }}
            />
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white text-[#0D0D0C] border border-[#0D0D0C]/15 hover:bg-[#0D0D0C] hover:text-[#FBF6EF] shadow-md transition-all"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white text-[#0D0D0C] border border-[#0D0D0C]/15 hover:bg-[#0D0D0C] hover:text-[#FBF6EF] shadow-md transition-all"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Caption with Overflow Mask Wipe Animation */}
        <div className="relative mt-8 max-w-4xl mx-auto text-center overflow-hidden min-h-[160px] flex flex-col items-center justify-center">
          <div 
            key={activeIndex}
            className="w-full space-y-3"
            style={{
              animation: `slideMaskFade 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) both`,
              transformOrigin: direction > 0 ? "bottom center" : "top center"
            }}
          >
            {/* Ambient accent underglow */}
            <div 
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-12 blur-2xl opacity-15 pointer-events-none rounded-full"
              style={{ backgroundColor: currentSpine.accent }}
            />

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#F8DCC7] text-[#0D0D0C] border border-[#F2772F]/30 font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#F2772F]" />
                {currentProject.industry}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#DFE9D4] text-[#0D0D0C] border border-[#3FB874]/30 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3FB874]" />
                Client: {currentProject.client}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white text-[#0D0D0C]/65 border border-[#0D0D0C]/10 font-mono">
                {currentProject.year}
              </span>
            </div>

            {/* Big Project Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D0D0C] tracking-tight">
              {currentProject.title}
            </h3>

            {/* Project Tagline & Summary */}
            <p className="text-xs sm:text-sm md:text-base text-[#0D0D0C]/65 max-w-2xl mx-auto leading-relaxed">
              {currentProject.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D0D0C] text-[#FBF6EF] font-bold text-xs md:text-sm shadow-sm hover:bg-[#252523] hover:scale-105 transition-all"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setSelectedProject(currentProject)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F4F2ED] text-[#0D0D0C] border border-[#0D0D0C]/15 font-medium text-xs md:text-sm transition-all shadow-sm"
              >
                <Eye className="w-4 h-4 text-[#F2772F]" />
                <span>Case Study & Architecture</span>
              </button>
            </div>
          </div>
        </div>

        {/* Deliverables Feature Checkmarks Strip */}
        <div className="mt-12 pt-8 border-t border-[#0D0D0C]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#0D0D0C]/08 flex items-start gap-3 shadow-card-soft">
            <CheckCircle2 className="w-4 h-4 text-[#3FB874] mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0D0D0C]">Full-Stack Production</h4>
              <p className="text-[11px] text-[#0D0D0C]/60 mt-0.5">High availability, responsive mobile-first architecture.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#0D0D0C]/08 flex items-start gap-3 shadow-card-soft">
            <CheckCircle2 className="w-4 h-4 text-[#3FB874] mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0D0D0C]">Live Domain Verified</h4>
              <p className="text-[11px] text-[#0D0D0C]/60 mt-0.5">Commercial deployment serving real clients and users.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#0D0D0C]/08 flex items-start gap-3 shadow-card-soft">
            <CheckCircle2 className="w-4 h-4 text-[#3FB874] mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0D0D0C]">Payment & Booking APIs</h4>
              <p className="text-[11px] text-[#0D0D0C]/60 mt-0.5">Integrated Razorpay, reservation engines & lead funnels.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#0D0D0C]/08 flex items-start gap-3 shadow-card-soft">
            <CheckCircle2 className="w-4 h-4 text-[#3FB874] mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#0D0D0C]">Speed & SEO Optimised</h4>
              <p className="text-[11px] text-[#0D0D0C]/60 mt-0.5">Optimised Core Web Vitals, rich metadata & analytics.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Case Study & Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default IndustryProjects;
