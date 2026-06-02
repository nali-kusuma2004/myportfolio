import React from "react";
import { SiExpress, SiOracle, SiC, SiCplusplus,SiVite,SiMongodb } from "react-icons/si";
import { GiNetworkBars,GiArtificialIntelligence } from "react-icons/gi";
import { TbApi } from "react-icons/tb"; 
import {FaJava, FaReact,FaGithub,FaPython, FaPhp, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs} from "react-icons/fa";
export default function Skills(){
    return (
        <>
        <section id="skills" className="relative overflow-hidden bg-gradient-to-l from-[#2c2a2a] to-[#ee87e4] px-4 py-8 text-white md:px-8">
             <h2 className="mb-5 text-center text-3xl text-[rgb(251,230,178)]">Technical Skills</h2>
             <div className="pointer-events-none absolute inset-0">
  <img src="https://webdevmonk.com/main/html.png" alt="HTML" className="absolute left-[8%] top-[5%] w-[60px] opacity-20" />
  <img src="https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg" alt="CSS" className="absolute right-[8%] top-[20%] w-[60px] opacity-20" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s" alt="JavaScript" className="absolute bottom-[10%] left-[12%] w-[60px] opacity-20" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" className="absolute right-[10%] top-[60%] w-[60px] opacity-20" />
  <img src="https://www.mindrops.com/images/nodejs-image.webp" alt="Node.js" className="absolute bottom-[15%] right-[18%] w-[60px] opacity-20" />

</div>
        <div className="relative z-10 flex flex-wrap items-center justify-around gap-6 md:gap-0">
           
            <div className="mt-8 flex w-full flex-wrap rounded-2xl bg-gradient-to-br from-[rgb(104,93,93)] to-violet-500 p-5 shadow-[2px_2px_10px_rgb(249,249,249)] md:mt-24 md:w-[30%]">
                <span className="block w-full text-center text-lg">Front End </span>
                 <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaHtml5 size={20} color="#E34F26"/>  HTML </li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaCss3Alt size={20} color="#1572B6"/> CSS</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaJs size={20} color="#F7DF1E"/>  JavaScript</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaReact size={20} color="#61DAFB" />  React</li> 
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><SiVite size={18}color="#646CFF" />Vite</li>
            </div>
            <div className="mt-2 flex w-full flex-wrap rounded-2xl bg-gradient-to-br from-[rgb(104,93,93)] to-violet-500 p-5 shadow-[2px_2px_10px_rgb(249,249,249)] md:mt-24 md:w-[30%]">
                <span className="block w-full text-center text-lg">Backend End </span>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaJava  size={20}/>  Java  </li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaNodeJs size={20} color="#68A063"/> Node.js</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><SiExpress size={20} color="#000000" /> Express.js</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"> <SiMongodb size={20} color="#47A248"/>MongoDB</li>
                 <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"> <FaPhp size={20} color="#777BB4"/>PHP</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaDatabase size={20} color="#4DB33D"/> MySQL</li>
            </div>
            <div className="mt-2 flex w-full flex-wrap rounded-2xl bg-gradient-to-br from-[rgb(104,93,93)] to-violet-500 p-5 shadow-[2px_2px_10px_rgb(249,249,249)] md:mt-24 md:w-[30%]">
                <span className="block w-full text-center text-lg">Other skills</span>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaJava  size={20} color="#007396"/>  Java  </li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><SiC  size={20} color="#A8B9CC"/><SiCplusplus size={20} color="#00599C" /></li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaPython size={20} color="#3776AB"/> Python</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]">  <GiNetworkBars size={20} color="#00A8E8" />DSA</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"> <GiArtificialIntelligence size={20} color="#007ACC"/>OOPs</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><SiOracle size={20} color="#F80000" />Oracle</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><FaGithub size={20} color="#181717" /> Git & GitHub</li>
                <li className="m-2 w-[45%] list-none rounded-2xl bg-gradient-to-l from-black to-[rgb(188,25,216)] p-2 text-center text-[15px] shadow-[2px_2px_10px_rgb(235,129,236)] transition hover:scale-110 hover:shadow-[2px_2px_15px_rgb(255,255,255)]"><TbApi size={20} color="#0096D6"/> APIs</li>
            </div>

        </div>
        </section>
        </>
    )
}