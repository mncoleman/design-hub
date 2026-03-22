import { useEffect, useRef, useState, useCallback } from "react";

interface Props {
  name?: string;
  color?: string;
}

export const FigmaCursors = ({ name = "You", color = "#F59E0B" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const pillPos = useRef({ x: 0, y: 0 });
  const pillVel = useRef({ x: 0, y: 0 });
  const cursorEl = useRef<HTMLDivElement>(null);
  const pillEl = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);

  const animate = useCallback(() => {
    // Spring physics for the pill
    const spring = 0.08;
    const damping = 0.75;
    const targetX = cursorPos.current.x + 16;
    const targetY = cursorPos.current.y + 16;

    const dx = targetX - pillPos.current.x;
    const dy = targetY - pillPos.current.y;

    pillVel.current.x += dx * spring;
    pillVel.current.y += dy * spring;
    pillVel.current.x *= damping;
    pillVel.current.y *= damping;

    pillPos.current.x += pillVel.current.x;
    pillPos.current.y += pillVel.current.y;

    if (cursorEl.current) {
      cursorEl.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-1px, -1px)`;
    }
    if (pillEl.current) {
      pillEl.current.style.transform = `translate(${pillPos.current.x}px, ${pillPos.current.y}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      cursorPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      document.body.classList.add("figma-cursor-active");
      // Initialize pill position to cursor
      pillPos.current = { x: cursorPos.current.x + 16, y: cursorPos.current.y + 16 };
      pillVel.current = { x: 0, y: 0 };
      rafRef.current = requestAnimationFrame(animate);
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
      document.body.classList.remove("figma-cursor-active");
      cancelAnimationFrame(rafRef.current);
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);
    parent.style.cursor = "none";

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      parent.style.cursor = "";
      document.body.classList.remove("figma-cursor-active");
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div ref={containerRef}>
      {isHovering && (
        <>
          {/* Cursor arrow - follows immediately */}
          <div ref={cursorEl} className="absolute pointer-events-none z-30" style={{ top: 0, left: 0 }}>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="drop-shadow-lg">
              <path
                d="M1 1L1 13.5L4.5 10L8.5 16.5L11 15L7 9L12.5 9L1 1Z"
                fill={color}
                stroke="white"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Name pill - elastic spring follow */}
          <div ref={pillEl} className="absolute pointer-events-none z-30" style={{ top: 0, left: 0 }}>
            <div
              className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-white whitespace-nowrap shadow-lg"
              style={{ backgroundColor: color }}
            >
              {name}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
