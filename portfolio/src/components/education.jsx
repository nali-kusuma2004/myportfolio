import { useRef, useState } from "react";

export default function Education() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      containerRef.current.style.transform = `translateX(-${index * 100}%)`;
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
    <section id="education" className="bg-gradient-to-r from-[#2c2a2a] to-[#7b0499] px-4 py-8 text-[rgb(252,252,252)] md:px-8">
      <h2 className="mb-4 text-center text-3xl">Education</h2>
      <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: "100%",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative mx-auto my-5 w-full min-w-full rounded bg-gradient-to-r from-[rgb(213,71,252)] to-[rgb(253,252,253)] p-4 text-[rgb(239,245,249)] md:w-[80%] md:p-8"
            style={{
              animationDelay: `${index * 2 + 5}s`,
            }}
          >
            <h3 className="pr-0 text-lg text-[#45033f] md:pr-[35%]">{slide.title}</h3>
            <p className="text-white">
              {slide.institution}, <span className="ml-2 rounded bg-[rgb(26,117,150)] px-2 py-0.5 text-[16px] text-[rgb(239,224,224)] md:text-[18px]">{slide.startyear}</span> - <span className="ml-2 rounded bg-[rgb(26,117,150)] px-2 py-0.5 text-[16px] text-[rgb(239,224,224)] md:text-[18px]">{slide.endyear}</span>
            </p>
            <p className="text-[#371b6b]">CGPA/ PERCENTAGE : {slide.CGPA} </p>
            <p className="w-full text-[15px] text-[#7b0505] md:w-1/2">{slide.details}</p>
            {slide.img && <img src={slide.img} alt="Education" className="mt-3 h-[150px] w-[170px] rounded object-cover shadow-[0_0_25px_white] md:absolute md:left-[65%] md:top-0 md:h-[247px] md:w-[440px]" />}
          </div>
        ))}
      </div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button onClick={prev} className="rounded bg-violet-700 px-4 py-2 text-white hover:bg-violet-600">Prev</button>
        <button onClick={next} className="rounded bg-violet-700 px-4 py-2 text-white hover:bg-violet-600">Next</button>
      </div>
    </section>
  );
}
