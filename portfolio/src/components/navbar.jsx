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
      className={`fixed top-0 z-50 w-full px-3 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(5,4,20,0.8)] shadow-md shadow-black/40 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between text-white">
        {/* Logo */}
        <div className="cursor-pointer text-xl font-semibold text-[#e5dde0]">
          <span className="text-[#6a5294]">&lt;</span>
          <span>Nali Kusuma</span>
          <span className="text-[#6a5294]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden list-none gap-6 md:flex">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer rounded px-2.5 py-1 text-[#ddd] transition duration-300 hover:scale-110 hover:bg-[#8245ec20] hover:text-[#8245ec] ${
                activeSection === item.id ? "bg-[#8245ec20] text-[#8245ec] scale-110" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden items-center gap-4 md:flex md:mr-10">
          <a
            href="https://github.com/nali-kusuma2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f6f5f5] transition hover:scale-110 hover:text-[#8245ec]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f6f5f5] transition hover:scale-110 hover:text-[#8245ec]"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="cursor-pointer text-[#8245ec] md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-2 flex flex-col rounded-lg bg-[rgba(5,4,20,0.95)] p-5 animate-[slideDown_0.3s_ease] md:hidden">
          <ul className="m-0 list-none p-0">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`my-2.5 w-full cursor-pointer rounded bg-[rgba(153,149,149,0.5)] px-2 py-1 text-[#ccc] shadow-[1px_0px_2px_1px_rgba(239,223,223,0.2)] transition hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="mt-2.5 flex gap-4">
            <a
              href="https://github.com/nali-kusuma2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:scale-110 hover:text-[#8245ec]"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:scale-110 hover:text-[#8245ec]"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
    <hr className="mt-12 border border-[rgb(224,103,246)]" />
    </>
  );
};

export default Navbar;
