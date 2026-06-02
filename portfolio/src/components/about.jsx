import '../index.css';
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxResume } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
export default function About(){
    return (
        <>
      <section id="about" className="about-section">
        <div className="about-container">
            <div className="intro">
                <h1>Hello, I'm Nali Kusuma </h1>
                <h4>
                <span style={{ color: "pink" }}>I am a </span>
                <span style={{ color: "whitesmoke",fontSize:"15px" }}>
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
                <p>I’m a passionate and dedicated Java Full Stack Developer in training with a strong interest in creating efficient, user-friendly, and visually appealing web applications. I love turning innovative ideas into real-world digital solutions using technologies like React, Node.js, Express, and MySQL.</p>
                <p>with a solid foundation in core Java, data structures, and backend integration, I focus on writing clean, maintainable code while constantly exploring new tools and frameworks to enhance my skills.</p>
                <p>I value continuous learning, collaboration, and creativity, and aim to contribute to impactful projects that make a difference in people’s lives through technology.</p>
                <button><a href="NKusuma_fresher.pdf" target="_blank"> Resume <RxResume className="icons" size="20" /></a></button>
            </div>
            <div className="photo-container">
               <img src="./src/assets/photo_Nkusuma.png"   alt="Nali Kusuma"></img>
            </div>
        </div>
      
        </section>
      </>
    )
}