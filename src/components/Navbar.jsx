import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; 
import CartIcon from "./CartIcon";
import logo from "../assets/images/policelogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "About","Gallery", "Shop", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navClasses = isScrolled
    ? "fixed top-0 left-0 right-0 z-40 bg-white shadow-md animate-slide-down"
    : "relative animate-fade-down";

  const getPath = (link) => (link === "Home" ? "/home" : `/${link.toLowerCase()}`);

  return (
    <>
      {isScrolled && <div className="h-20" />}

      <nav
        className={`w-full px-6 lg:px-12 h-20 flex items-center justify-between ${navClasses}`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Textilz Logo" className="h-30 w-auto" />
        </div>

        <ul className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={getPath(link)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-blue-800" : "text-slate-500 hover:text-blue-700"
                  }`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <CartIcon /> 
          <button className="text-blue-950 hover:text-blue-700 transition-colors">
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden text-blue-950 hover:text-blue-700 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[60%] md:w-[45%] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-20 border-b border-blue-950/10">
            <img src={logo} alt="police zebra logo" loading="lazy" className="h-30 w-auto" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-950 hover:text-blue-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <ul className="flex-1 flex flex-col gap-1 px-6 py-8 overflow-y-auto">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={getPath(link)}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 text-base font-bold tracking-widest uppercase transition-colors duration-300 border-b border-blue-950/5 ${
                      isActive ? "text-blue-700" : "text-blue-950 hover:text-blue-700"
                    }`
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;