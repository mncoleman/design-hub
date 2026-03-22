import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin } from "lucide-react";
import usePageTitle from "@/lib/usePageTitle";
import { trackContactClick } from "@/lib/analytics";

const Contact = () => {
  usePageTitle("Contact");

  useEffect(() => {
    const src = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        try { document.body.removeChild(script); } catch (e) { /* ignore */ }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24 relative">
        <div className="grain" aria-hidden="true" />

        {/* Hero */}
        <div className="container mx-auto px-6 max-w-4xl text-center mb-16 relative z-10">
          <span className="eyebrow block mb-4">Contact</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's{" "}
            Talk
          </h1>
          <p className="text-lg text-white/45 max-w-2xl mx-auto">
            Need a pilot for an upcoming job? Fill out the form below or reach us directly.
          </p>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="zera-card p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/[0.04]">
                <Mail className="h-5 w-5 text-white/50" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Email</h3>
                <a
                  href="mailto:info@levoair.com"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                  onClick={() => trackContactClick('email', 'info@levoair.com')}
                >
                  info@levoair.com
                </a>
              </div>
            </div>
            <div className="zera-card p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/[0.04]">
                <MapPin className="h-5 w-5 text-white/50" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Location</h3>
                <span className="text-sm text-white/40">United States</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="zera-card p-0 overflow-hidden">
            <div className="w-full h-full" style={{ minHeight: 500 }}>
              <div id="leadconnector-form-wrapper" className="w-full h-full">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/jKx3hSzkoiVBg6qHF8S2"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: 16,
                  }}
                  id="inline-jKx3hSzkoiVBg6qHF8S2"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="LevoAir Form - Site 2.0"
                  data-height="1299"
                  data-layout-iframe-id="inline-jKx3hSzkoiVBg6qHF8S2"
                  data-form-id="jKx3hSzkoiVBg6qHF8S2"
                  title="LevoAir Form - Site 2.0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
