import { useState, useEffect, useRef } from "react";
import { X, Copy, Check, Code, Sparkles, ExternalLink, Info } from "lucide-react";
import { createPortal } from "react-dom";

interface ComponentPanelProps {
  name: string;
  file: string;
  fileUrl: string;
  prompt: string;
  meta?: Record<string, string>;
  position: { x: number; y: number };
  onClose: () => void;
}

export const ComponentPanel = ({ name, file, fileUrl, prompt, meta, position, onClose }: ComponentPanelProps) => {
  const [copied, setCopied] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      navigator.clipboard.writeText(prompt);
    } catch {
      // Fallback for non-HTTPS
      const ta = document.createElement('textarea');
      ta.value = prompt;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleEsc);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={panelRef}
      className="fixed z-[200] w-[400px] max-h-[80vh] rounded-xl bg-[#0c0c10] border border-white/[0.12] shadow-2xl shadow-black/60 overflow-hidden animate-panel-in flex flex-col"
      style={{ left: position.x, top: position.y }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02] flex-shrink-0">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold text-white">{name}</span>
        </div>
        <button onClick={onClose} className="p-1 rounded-md hover:bg-white/[0.06] text-white/40 hover:text-white transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-y-auto custom-scrollbar flex-1">
        {/* File link */}
        <div className="px-4 py-2.5 border-b border-white/[0.06]">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors font-mono group"
          >
            <span className="truncate">{file}</span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Element metadata */}
        {meta && Object.keys(meta).length > 0 && (
          <div className="px-4 py-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5 mb-2">
              <Info className="h-3 w-3 text-blue-400" />
              <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Element Details</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {Object.entries(meta).map(([key, value]) => (
                <div key={key} className="flex items-baseline gap-2">
                  <span className="text-[10px] text-white/30 flex-shrink-0">{key}</span>
                  <span className="text-[10px] text-white/60 font-mono truncate">
                    {key === "Color" || key === "Background" ? (
                      <span className="inline-flex items-center gap-1">
                        <span className="inline-block w-2.5 h-2.5 rounded-sm border border-white/10" style={{ backgroundColor: value }} />
                        {value}
                      </span>
                    ) : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Prompt */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">AI Prompt</span>
          </div>
          <div className="text-[11px] text-white/50 font-mono leading-relaxed max-h-40 overflow-y-auto whitespace-pre-wrap pr-2 custom-scrollbar">
            {prompt}
          </div>
        </div>
      </div>

      {/* Copy button */}
      <div className="px-4 py-3 border-t border-white/[0.06] flex-shrink-0">
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
            copied
              ? 'bg-emerald-500/20 text-emerald-400 scale-[0.98]'
              : 'bg-primary/20 text-primary hover:bg-primary/30'
          }`}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied to Clipboard!" : "Copy AI Prompt"}
        </button>
      </div>
    </div>,
    document.body
  );
};
