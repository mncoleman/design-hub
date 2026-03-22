import { useState, useRef, ReactNode } from "react";
import { useShowcase } from "./ShowcaseContext";
import { ComponentPanel } from "./ComponentPanel";

interface CProps {
  children: ReactNode;
  name: string;
  file: string;
  prompt: string;
  inline?: boolean;
}

const REPO = "https://github.com/mncoleman/design-hub/blob/main";

/**
 * Lightweight component inspector wrapper.
 * When "View Components" is off: renders children with zero overhead.
 * When on: adds hover border + click-to-inspect behavior.
 */
export const C = ({ children, name, file, prompt, inline }: CProps) => {
  const { showComponents } = useShowcase();
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelPos, setPanelPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (!showComponents) {
    return <>{children}</>;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Position panel near the element but within viewport
    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    const panelW = 380;
    const panelH = 300;

    let x = rect.left + rect.width / 2 - panelW / 2;
    let y = rect.bottom + 8;

    // Clamp to viewport
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
        className={`showcase-element relative cursor-pointer ${inline ? 'inline' : ''}`}
        style={{ position: 'relative' }}
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
          position={panelPos}
          onClose={() => setPanelOpen(false)}
        />
      )}
    </>
  );
};
