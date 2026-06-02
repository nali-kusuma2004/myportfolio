import React from "react";
import { SiExpress, SiOracle, SiC, SiCplusplus,SiVite,SiMongodb } from "react-icons/si";
import { GiNetworkBars,GiArtificialIntelligence } from "react-icons/gi";
import { TbApi } from "react-icons/tb"; 
import {FaJava, FaReact,FaGithub,FaPython, FaPhp, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs} from "react-icons/fa";
export default function Skills(){
    return (
        <>
        <section id="skills" className="skills-section">
             <h2>Technical Skills</h2>
             <div className="floating-icons">
  <img src="https://webdevmonk.com/main/html.png" alt="HTML" className="icon html" />
  <img src="https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg" alt="CSS" className="icon css" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s" alt="JavaScript" className="icon js" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" className="icon react" />
  <img src="https://www.mindrops.com/images/nodejs-image.webp" alt="Node.js" className="icon node" />

</div>
        <div className="skills-container">
           
            <div className="skills-list">
                <span>Front End </span>
                 <li><FaHtml5 size={20} color="#E34F26"/>  HTML </li>
                <li><FaCss3Alt size={20} color="#1572B6"/> CSS</li>
                <li><FaJs size={20} color="#F7DF1E"/>  JavaScript</li>
                <li><FaReact size={20} color="#61DAFB" />  React</li> 
                <li><SiVite size={18}color="#646CFF" />Vite</li>
            </div>
            <div className="skills-list">
                <span>Backend End </span>
                <li><FaJava  size={20}/>  Java  </li>
                <li><FaNodeJs size={20} color="#68A063"/> Node.js</li>
                <li><SiExpress size={20} color="#000000" /> Express.js</li>
                <li> <SiMongodb size={20} color="#47A248"/>MongoDB</li>
                 <li> <FaPhp size={20} color="#777BB4"/>PHP</li>
                <li><FaDatabase size={20} color="#4DB33D"/> MySQL</li>
            </div>
            <div className="skills-list">
                <span>Other skills</span>
                <li><FaJava  size={20} color="#007396"/>  Java  </li>
                <li><SiC  size={20} color="#A8B9CC"/><SiCplusplus size={20} color="#00599C" /></li>
                <li><FaPython size={20} color="#3776AB"/> Python</li>
                <li>  <GiNetworkBars size={20} color="#00A8E8" />DSA</li>
                <li> <GiArtificialIntelligence size={20} color="#007ACC"/>OOPs</li>
                <li><SiOracle size={20} color="#F80000" />Oracle</li>
                <li><FaGithub size={20} color="#181717" /> Git & GitHub</li>
                <li><TbApi size={20} color="#0096D6"/> APIs</li>
            </div>

        </div>
        </section>
        </>
    )
}