import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on click
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 z-50 w-full px-4 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between text-white">
        {/* Logo */}
        <div className="cursor-pointer text-xl font-semibold text-zinc-100">
          <span className="text-violet-400">&lt;</span>
          <span>Nali Kusuma</span>
          <span className="text-violet-400">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer rounded px-3 py-1 text-zinc-200 transition hover:scale-105 hover:bg-violet-500/20 hover:text-violet-400 ${
                activeSection === item.id ? "bg-violet-500/20 text-violet-400" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden items-center gap-4 text-zinc-100 md:flex">
          <a
            href="https://github.com/nali-kusuma2004"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-violet-400"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-violet-400"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="cursor-pointer text-violet-400 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-xl bg-slate-950/95 p-5 md:hidden">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer rounded bg-zinc-700/50 px-3 py-2 text-zinc-200 transition hover:text-violet-400 ${
                  activeSection === item.id ? "text-violet-400" : ""
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4 text-white">
            <a
              href="https://github.com/nali-kusuma2004"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-violet-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-violet-400"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
    <hr className="mt-16 border-fuchsia-400/70" />
    </>
  );
};

export default Navbar;
