import { useState, useRef, ReactNode } from "react";
import { useShowcase } from "./ShowcaseContext";
import { ComponentPanel } from "./ComponentPanel";

interface CProps {
  children: ReactNode;
  name: string;
  file: string;
  prompt: string;
  inline?: boolean;
  className?: string;
}

const REPO = "https://github.com/mncoleman/design-hub/blob/main";

/**
 * Lightweight component inspector wrapper.
 * When "View Components" is off: renders children with zero overhead.
 * When on: adds hover border + click-to-inspect behavior.
 */
export const C = ({ children, name, file, prompt, inline, className }: CProps) => {
  const { showComponents } = useShowcase();
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelPos, setPanelPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [elementMeta, setElementMeta] = useState<Record<string, string>>({});
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (!showComponents) {
    return <>{children}</>;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // Read computed styles from the first meaningful child or the wrapper itself
    const target = el.firstElementChild as HTMLElement || el;
    const cs = getComputedStyle(target);

    const meta: Record<string, string> = {};
    meta["Size"] = `${Math.round(rect.width)} x ${Math.round(rect.height)}px`;
    if (cs.fontSize && cs.fontSize !== "0px") meta["Font Size"] = cs.fontSize;
    if (cs.fontFamily) meta["Font"] = cs.fontFamily.split(",")[0].replace(/['"]/g, "").trim();
    if (cs.fontWeight && cs.fontWeight !== "400") meta["Weight"] = cs.fontWeight;
    if (cs.color) meta["Color"] = rgbToHex(cs.color);
    if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)") meta["Background"] = rgbToHex(cs.backgroundColor);
    if (cs.borderRadius && cs.borderRadius !== "0px") meta["Radius"] = cs.borderRadius;
    if (cs.padding && cs.padding !== "0px") meta["Padding"] = cs.padding;
    meta["Language"] = "TSX (React + TypeScript)";

    setElementMeta(meta);

    // Position panel
    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    const panelW = 400;
    const panelH = 420;

    let x = rect.left + rect.width / 2 - panelW / 2;
    let y = rect.bottom + 8;

    if (x + panelW > viewW - 16) x = viewW - panelW - 16;
    if (x < 16) x = 16;
    if (y + panelH > viewH - 16) y = rect.top - panelH - 8;
    if (y < 60) y = 60;

    setPanelPos({ x, y });
    setPanelOpen(true);
  };

  const Tag = inline ? 'span' : 'div';

  return (
    <>
      <Tag
        ref={wrapperRef as any}
        onClick={handleClick}
        className={`showcase-element cursor-pointer ${inline ? 'inline' : ''} ${className || ''}`}
        data-c-name={name}
      >
        {children}
      </Tag>

      {panelOpen && (
        <ComponentPanel
          name={name}
          file={file}
          fileUrl={`${REPO}/${file}`}
          prompt={prompt}
          meta={elementMeta}
          position={panelPos}
          onClose={() => setPanelOpen(false)}
        />
      )}
    </>
  );
};

function rgbToHex(rgb: string): string {
  const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return rgb;
  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
