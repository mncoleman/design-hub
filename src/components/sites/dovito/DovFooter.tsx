export const DovFooter = () => {
  return (
    <footer className="px-6 py-12 bg-[#0f2540] text-white/70">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Contact */}
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

          {/* Industries */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>Construction</li>
              <li>Skilled Trades</li>
              <li>Professional Services</li>
              <li>Manufacturing</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Assessment</li>
              <li>Implementation</li>
              <li>Retained Support</li>
            </ul>
          </div>

          {/* Company */}
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
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 gap-4">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Copyright</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
