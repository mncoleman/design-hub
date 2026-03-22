import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowcaseProvider } from "@/components/showcase/ShowcaseContext";
import { ShowcaseToolbar } from "@/components/showcase/ShowcaseToolbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CustomCursor from "@/components/ui/CustomCursor";
import ClickBurst from "@/components/ui/ClickBurst";

const App = () => (
  <TooltipProvider>
    <ShowcaseProvider>
      <CustomCursor />
      <ClickBurst />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
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
