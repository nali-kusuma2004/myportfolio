import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './components/navbar.jsx'
import About from './components/about.jsx'
import Education from './components/education.jsx'
import Certificates from './components/certificates.jsx'
import Work from './components/work.jsx'
import Experience from './components/experience.jsx'
import Skills from './components/skills.jsx'
import Contact from './components/contact.jsx'
import './App.css'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => {
      section.classList.add("section-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
   <div>
    {/* <div className="absolute inset-0 bg-linear-gradient (to right,#4f4f4f2e_ipx,transparent_1px), linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px) bg-size:(14px_24px) (mask-image:radial-gradient(ellipse_64%_50%_at_50%_0%,#000_70%,transparent_100%)">

    </div> */}
    <div className="data">
   
     <Navbar/>
      <About/>
      <Skills/>
      <Education />
      <Certificates />
      <Work />
      <Experience />
      <Contact />

</div>
</div>
    </>
  )
}

export default App
