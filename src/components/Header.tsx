import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // 2. Initialize useNavigate

  // 3. Update navLinks: Use path for all. The '#' items are now full paths.
  const navLinks = [
    { name: "Properties", path: "/#properties" },
    { name: "Developers", path: "/#developers" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // 4. Custom handler function for navigation and scrolling
  const handleNav = (path) => {
    // Close the mobile menu
    setIsMenuOpen(false);

    // Check if the path contains an anchor (#)
    if (path.includes('#')) {
      const [route, hash] = path.split('#');

      // If we are already on the correct route (e.g., '/', and route is '/'), 
      // just scroll. Otherwise, navigate first.
      if (window.location.pathname === route) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to the route. We'll handle the scroll in a useEffect on the target page.
        // For this simple header, navigating to the full path will work.
        navigate(path);
      }
    } else {
      // Standard route navigation (e.g., /about, /contact)
      navigate(path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-light tracking-widest uppercase">
              Sufiyan
            </span>
            <span className="text-xl font-semibold tracking-widest uppercase ml-1">
              Zubair
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button // 5. Change <a> to <button> or use a custom component
                key={link.name}
                onClick={() => handleNav(link.path)} // 6. Use the handler
                className="text-xs font-medium tracking-widest uppercase luxury-link text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button // 7. Change <a> to <button> and use handler
              onClick={() => handleNav("/#contact")}
              className="luxury-button luxury-button-primary text-[10px]"
            >
              Inquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button // 8. Use <button> and the handler for mobile
                key={link.name}
                onClick={() => handleNav(link.path)}
                className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
            <button // 9. Use <button> and the handler for mobile CTA
              onClick={() => handleNav("/#contact")}
              className="luxury-button luxury-button-primary text-[10px] w-fit"
            >
              Inquire Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;