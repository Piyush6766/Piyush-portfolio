// Header.jsx
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 overflow-hidden">
        {/* Background overlay that only blurs when scrolled */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled
              ? "backdrop-blur-md bg-white/60 dark:bg-gray-900/60 shadow-sm"
              : "bg-transparent"
          }`}
        />
        
        {/* Main header content */}
        <div className="relative max-w-screen-lg mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Empty logo placeholder */}
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200"></div>

          {/* Desktop Navigation - Now properly centered with constrained width */}
          <nav className={`hidden md:flex mx-auto border border-gray-300 dark:border-gray-700 rounded-full px-6 py-1 transition-all duration-300 ${
            isScrolled 
              ? "bg-white/70 dark:bg-gray-800/70 shadow-sm" 
              : "bg-transparent border-transparent"
          }`}>
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="relative px-4 py-2 text-gray-800 dark:text-gray-200 font-medium group"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out" />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX size={24} className="transition-transform duration-300" />
            ) : (
              <BiMenuAltRight size={28} className="transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Background overlay */}
            <div 
              className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu container */}
            <div
              className="absolute top-20 right-4 left-4 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transition-all duration-300 transform origin-top"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="relative py-3 px-4 text-gray-800 dark:text-gray-200 font-medium group rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-blue-500 dark:bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;