import { C } from "@/components/showcase/C";

export const DovFooter = () => {
  return (
    <footer className="px-6 py-12 bg-[#0f2540] text-white/70">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Contact */}
          <C name="FooterContactColumn" file="src/components/sites/dovito/DovFooter.tsx" prompt="Footer column with uppercase heading (text-xs font-semibold tracking-[0.15em] white/40) and stacked contact info lines (address, email, phone, hours) in text-sm white/70.">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>123 Main Street</p>
              <p>Your City, ST 00000</p>
              <p>hello@yourcompany.com</p>
              <p>+1 (555) 000-0000</p>
              <p className="text-white/40">Mon-Thu | 9 AM - 4 PM</p>
            </div>
          </div>
          </C>

          {/* Industries */}
          <C name="FooterIndustriesColumn" file="src/components/sites/dovito/DovFooter.tsx" prompt="Footer column with uppercase heading and list of industry names (Construction, Skilled Trades, Professional Services, Manufacturing) in text-sm.">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>Construction</li>
              <li>Skilled Trades</li>
              <li>Professional Services</li>
              <li>Manufacturing</li>
            </ul>
          </div>
          </C>

          {/* Services */}
          <C name="FooterServicesColumn" file="src/components/sites/dovito/DovFooter.tsx" prompt="Footer column with uppercase heading and list of service names (Assessment, Implementation, Retained Support) in text-sm.">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Assessment</li>
              <li>Implementation</li>
              <li>Retained Support</li>
            </ul>
          </div>
          </C>

          {/* Company */}
          <C name="FooterCompanyColumn" file="src/components/sites/dovito/DovFooter.tsx" prompt="Footer column with uppercase heading and list of company links (Start Here, Services, Learn, Apply, Legal) in text-sm.">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>Start Here</li>
              <li>Services</li>
              <li>Learn</li>
              <li>Apply</li>
              <li>Legal</li>
            </ul>
          </div>
          </C>
        </div>

        <C name="FooterBottomBar" file="src/components/sites/dovito/DovFooter.tsx" prompt="Footer bottom bar: border-t white/10, pt-6, flex row between copyright text and legal links (Privacy, Terms, Copyright). Text-xs white/30.">
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 gap-4">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Copyright</span>
          </div>
        </div>
        </C>
      </div>
    </footer>
  );
};
