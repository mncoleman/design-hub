import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import usePageTitle from "@/lib/usePageTitle";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  usePageTitle("404");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white/10 mb-4">404</h1>
          <p className="text-xl text-white/50 mb-8">Page not found</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
