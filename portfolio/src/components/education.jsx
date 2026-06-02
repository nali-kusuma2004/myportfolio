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
    <section id="education" className="overflow-hidden bg-gradient-to-r from-zinc-800 to-purple-800 px-6 py-12 text-white md:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-amber-200">Education</h2>
      <div
        ref={containerRef}
        className="flex gap-6 transition-transform duration-500 ease-in-out"
        style={{
          width: "100%",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative min-h-[260px] min-w-full rounded-xl bg-fuchsia-300/20 p-6 shadow-lg shadow-black/30 md:min-w-[70%]"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <h3 className="pr-40 text-lg font-semibold text-fuchsia-200">{slide.title}</h3>
            <p className="mt-2 text-sm text-white/90">
              {slide.institution}, <span>{slide.startyear}</span> - <span>{slide.endyear}</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-violet-100">CGPA / PERCENTAGE: {slide.CGPA}</p>
            <p className="mt-2 max-w-xl text-sm text-zinc-100">{slide.details}</p>
            {slide.img && <img src={slide.img} width="100" height="100" alt="Education" className="absolute right-4 top-4 h-20 w-20 rounded-lg object-cover shadow-lg shadow-white/30 md:h-24 md:w-24" />}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={prev} className="rounded-lg bg-violet-500 px-4 py-2 font-medium text-white transition hover:bg-violet-400">
          Prev
        </button>
        <button onClick={next} className="rounded-lg bg-violet-500 px-4 py-2 font-medium text-white transition hover:bg-violet-400">
          Next
        </button>
      </div>
    </section>
  );
}
