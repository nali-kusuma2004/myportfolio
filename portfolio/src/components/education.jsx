import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Education() {
  const containerRef = useRef(null);

  const slides = [
    {
      title: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Jawaharlal Nehru Technological University ,Anantapur",
      startyear: "2023",
      endyear:"2026",
      CGPA:"8.6 ",
      details: "Focused on Full Stack Development, Java, MERN Stack, and Software Engineering.Built real-world applications and gained strong problem-solving skills.",
      img: "https://universityinnovation.org/images/0/02/JNTUA_Logo.png",
    },
    {
      title: "Diploma in Computer Science & Engineering",
      institution: "Sri Venkateshwara Government polytechnic College- Tirupati",
      startyear: "2020",
      endyear:" 2023",
      CGPA:"93%",
      details: "Completed a Diploma in Computer Engineering with a strong foundation in computer systems, programming, and software development. Gained practical, hands-on experience through academic projects, labs, and internships.",
     img:"https://svgovtpolytirupathi.ac.in//media/svgovtpolytirupathi_ac_in/1672074070.jpg",  
    },
    {
      title: "Secondary School of Education (SSC)",
      institution: "Narayana English Medium School - Gudur ",
      startyear: "2019",
      endyear: " 2020",
      CGPA:"9.8 ",
      details: "Completed Secondary School Certificate (SSC) with a strong academic foundation in core subjects, developing analytical thinking, discipline, and problem-solving skills. ",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--D9uMeaDh75fIzYWjr--FWHCLK9qSY49vQ&s"
    },
  ];

  const updateSlide = (index) => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${index * 40}%)`;
    }
  };

  const next = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    updateSlide(newIndex);
  };

  const prev = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    updateSlide(newIndex);
  };

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div
        ref={containerRef}
        className="education-container"
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          width: "100%",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="education-item"
            style={{
              minWidth: "22%",
              padding: "2rem",
              animationDelay: `${index * 2 + 5}s`,
            }}
          >
            <h3 style={{
               color: '#45033fff',
            }}>{slide.title}</h3>
            <p
              style={{ 
                color: '#ffffff',
              }}>
              {slide.institution}, <span>{slide.startyear}</span> - <span>{slide.endyear}</span>
            </p>
            <p style={{color:'#371b6bff'}}>CGPA/ PERCENTAGE : {slide.CGPA} </p>
            <p style= {{width: "50%" , color:' #7b0505ff', fontSize: "15px"  }}>{slide.details}</p>
            {slide.img && <img src={slide.img} width="100" height="100" alt="Education" />}
          </div>
        ))}
      </div>

      {/* <div style={{ marginTop: "1rem" }}>
        <button onClick={prev} style={{ marginRight: "1rem" }}>
          <FaArrowLeft size={20} color="#8245ec" />
        </button>
        <button onClick={next}>
          <FaArrowRight size={20} color="#8245ec" />
        </button>
      </div> */}
    </section>
  );
}
