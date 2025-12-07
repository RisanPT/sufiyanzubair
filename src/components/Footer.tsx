import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-light tracking-widest uppercase">
                Sufiyan
              </span>
              <span className="text-xl font-semibold tracking-widest uppercase ml-1">
                Zubair
              </span>
            </Link>
            <p className="luxury-body text-primary-foreground/60 max-w-sm">
              Your gateway to Dubai's most exclusive properties.
              Experience luxury living at its finest with our curated
              collection of premium real estate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#properties" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#developers" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Developers
                </a>
              </li>
              <li>
                <Link to="/about" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">
              Popular Areas
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Palm Jumeirah
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Downtown Dubai
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Dubai Marina
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Dubai Hills
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2024 Sufiyan Zubair. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;