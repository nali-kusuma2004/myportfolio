import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../index.css";

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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="purple">&lt;</span>
          <span>Nali Kusuma</span>
          <span className="purple">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="menu-desktop">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/nali-kusuma2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="menu-mobile">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="social-icons-mobile">
            <a
              href="https://github.com/nali-kusuma2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
    <hr>
    </hr>
    </>
  );
};

export default Navbar;
