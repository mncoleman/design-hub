import { createContext, useContext, useState, ReactNode } from "react";

export interface SiteConfig {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const SITES: SiteConfig[] = [
  {
    id: "drone",
    name: "Drone Services",
    description: "Dark theme with gold accents, animated SVGs, and GlassCube cards",
    color: "#F59E0B",
  },
  // Future sites will be added here
  // { id: "saas", name: "SaaS Platform", description: "...", color: "#3B82F6" },
  // { id: "agency", name: "Creative Agency", description: "...", color: "#8B5CF6" },
];

interface ShowcaseContextType {
  activeSite: string;
  setActiveSite: (id: string) => void;
  showComponents: boolean;
  setShowComponents: (show: boolean) => void;
  sites: SiteConfig[];
}

const ShowcaseContext = createContext<ShowcaseContextType>({
  activeSite: "drone",
  setActiveSite: () => {},
  showComponents: false,
  setShowComponents: () => {},
  sites: SITES,
});

export const useShowcase = () => useContext(ShowcaseContext);

export const ShowcaseProvider = ({ children }: { children: ReactNode }) => {
  const [activeSite, setActiveSite] = useState("drone");
  const [showComponents, setShowComponents] = useState(false);

  return (
    <ShowcaseContext.Provider value={{ activeSite, setActiveSite, showComponents, setShowComponents, sites: SITES }}>
      {children}
    </ShowcaseContext.Provider>
  );
};
