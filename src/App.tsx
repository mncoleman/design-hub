import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowcaseProvider, useShowcase } from "@/components/showcase/ShowcaseContext";
import { ShowcaseToolbar } from "@/components/showcase/ShowcaseToolbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import ClickBurst from "@/components/ui/ClickBurst";

const SiteSpecificEffects = () => {
  const { activeSite } = useShowcase();

  useEffect(() => {
    if (activeSite === "drone") {
      document.body.classList.add("custom-cursor-active");
    } else {
      document.body.classList.remove("custom-cursor-active");
    }
    return () => document.body.classList.remove("custom-cursor-active");
  }, [activeSite]);

  // Only show custom cursor + click burst on dark-themed sites (drone)
  if (activeSite !== "drone") return null;

  return (
    <>
      <CustomCursor />
      <ClickBurst />
    </>
  );
};

const App = () => (
  <TooltipProvider>
    <ShowcaseProvider>
      <SiteSpecificEffects />
      <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ShowcaseToolbar />
        <div className="pt-11">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShowcaseProvider>
  </TooltipProvider>
);

export default App;
