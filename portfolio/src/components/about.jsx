import React from "react";
import { RxResume } from "react-icons/rx";
import { Typewriter } from "react-simple-typewriter";
export default function About(){
    return (
        <>
      <section id="about" className="relative overflow-hidden bg-gradient-to-r from-[#2c2a2a] to-[#ee87e4] px-4 py-10 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="w-full animate-[fadeup_2s_ease_forwards] md:w-3/5">
                <h1 className="text-xl text-[rgb(251,124,251)] md:text-2xl">Hello, I'm Nali Kusuma </h1>
                <h4 className="mt-2 text-lg text-[rgb(235,180,168)]">
                <span className="text-pink-300">I am a </span>
                <span className="text-[15px] text-[whitesmoke]">
            <Typewriter
              words={[
                'Full Stack Developer',
                'MERN Stack Developer',
                'Java Programmer',
                'Web Developer',
                "MySQL Database",
                "HTML, CSS, JavaScript",
                "REST API Development",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span></h4>
                <p className="mt-3 text-[15px] text-[rgb(251,230,178)]">I’m a passionate and dedicated Java Full Stack Developer in training with a strong interest in creating efficient, user-friendly, and visually appealing web applications. I love turning innovative ideas into real-world digital solutions using technologies like React, Node.js, Express, and MySQL.</p>
                <p className="mt-2 text-[15px] text-[rgb(251,230,178)]">With a solid foundation in core Java, data structures, and backend integration, I focus on writing clean, maintainable code while constantly exploring new tools and frameworks to enhance my skills.</p>
                <p className="mt-2 text-[15px] text-[rgb(251,230,178)]">I value continuous learning, collaboration, and creativity, and aim to contribute to impactful projects that make a difference in people’s lives through technology.</p>
                <button className="mt-3 rounded-[28px] border-2 border-white bg-[#8245ec] px-7 py-2.5">
                  <a href="NKusuma_fresher.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center text-[15px] font-bold text-[rgb(53,8,8)]">
                    Resume <RxResume className="mx-2 -my-1 text-black" size="20" />
                  </a>
                </button>
            </div>
            <div className="mx-auto w-full max-w-[280px] md:mx-0 md:w-[30%] md:max-w-none">
               <img src="./src/assets/photo_Nkusuma.png" alt="Nali Kusuma" className="h-auto w-[80%] rounded-[80%] bg-[rgb(119,57,212)] p-2.5 shadow-[0_0_25px_rgba(0,0,0,0.5)] transition hover:scale-105 hover:shadow-[2px_2px_15px_rgb(255,255,255)] md:h-[380px] md:w-[80%] md:animate-[moveup_1s_ease_infinite]" />
            </div>
        </div>
      
        </section>
      </>
    )
}