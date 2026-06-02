import React from "react";
import { RxResume } from "react-icons/rx";
import { Typewriter } from "react-simple-typewriter";
export default function About(){
    return (
        <>
      <section id="about" className="bg-gradient-to-r from-zinc-800 to-fuchsia-400/60 px-6 py-14 text-white md:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-fuchsia-300 md:text-3xl">Hello, I'm Nali Kusuma</h1>
                <h4>
                <span className="text-pink-300">I am a </span>
                <span className="text-sm text-zinc-100">
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
                <p className="text-amber-100">I’m a passionate and dedicated Java Full Stack Developer in training with a strong interest in creating efficient, user-friendly, and visually appealing web applications. I love turning innovative ideas into real-world digital solutions using technologies like React, Node.js, Express, and MySQL.</p>
                <p className="text-amber-100">With a solid foundation in core Java, data structures, and backend integration, I focus on writing clean, maintainable code while constantly exploring new tools and frameworks to enhance my skills.</p>
                <p className="text-amber-100">I value continuous learning, collaboration, and creativity, and aim to contribute to impactful projects that make a difference in people’s lives through technology.</p>
                <button className="rounded-full border-2 border-white bg-violet-600 px-6 py-2 font-semibold text-zinc-900 transition hover:scale-105 hover:shadow-lg hover:shadow-white/30">
                  <a href="NKusuma_fresher.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    Resume <RxResume size="20" />
                  </a>
                </button>
            </div>
            <div className="mx-auto w-full max-w-sm">
               <img
                 src="./src/assets/photo_Nkusuma.png"
                 alt="Nali Kusuma"
                 className="h-auto w-full rounded-full bg-violet-600 p-3 shadow-2xl shadow-black/40 transition hover:scale-105"
               />
            </div>
        </div>
      
        </section>
      </>
    )
}