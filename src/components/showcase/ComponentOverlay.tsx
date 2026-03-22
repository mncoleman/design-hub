import { useState, ReactNode } from "react";
import { Code, Copy, Check, Sparkles } from "lucide-react";
import { useShowcase } from "./ShowcaseContext";

interface ComponentOverlayProps {
  children: ReactNode;
  name: string;
  filePath: string;
  description: string;
  aiPrompt: string;
}

export const ComponentOverlay = ({ children, name, filePath, description, aiPrompt }: ComponentOverlayProps) => {
  const { showComponents } = useShowcase();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(aiPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const repoUrl = "https://github.com/mncoleman/design-hub";
  const fileUrl = `${repoUrl}/blob/main/${filePath}`;

  return (
    <div className="relative group/overlay">
      {children}

      {showComponents && (
        <>
          {/* Highlight border */}
          <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-lg pointer-events-none z-40" />

          {/* Component label - top left */}
          <div className="absolute top-3 left-3 z-50 flex flex-col gap-2 pointer-events-auto">
            {/* Name + file link */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07070a]/95 backdrop-blur-xl border border-primary/30 shadow-lg">
                <Code className="h-3 w-3 text-primary" />
                <span className="text-xs font-semibold text-primary">{name}</span>
              </div>
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-[#07070a]/95 backdrop-blur-xl border border-white/[0.1] text-[10px] text-white/50 hover:text-white/80 hover:border-white/[0.2] transition-all font-mono"
              >
                {filePath.split('/').pop()}
              </a>
            </div>

            {/* Expandable AI prompt card */}
            <div className={`rounded-xl bg-[#07070a]/95 backdrop-blur-xl border border-white/[0.1] shadow-2xl overflow-hidden transition-all duration-300 ${expanded ? 'max-w-md' : 'max-w-xs'}`}>
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-white/[0.03] transition-colors"
              >
                <Sparkles className="h-3 w-3 text-amber-400 flex-shrink-0" />
                <span className="text-[10px] text-white/60 truncate flex-1">{description}</span>
              </button>

              {expanded && (
                <div className="border-t border-white/[0.06] p-3 space-y-2">
                  <div className="text-[10px] text-white/30 font-mono leading-relaxed max-h-32 overflow-y-auto whitespace-pre-wrap">
                    {aiPrompt}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/20 text-primary text-[10px] font-medium hover:bg-primary/30 transition-colors w-full justify-center"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copied!" : "Copy AI Prompt"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
