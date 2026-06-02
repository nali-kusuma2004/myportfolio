import React from "react";
import { SiExpress, SiOracle, SiC, SiCplusplus,SiVite,SiMongodb } from "react-icons/si";
import { GiNetworkBars,GiArtificialIntelligence } from "react-icons/gi";
import { TbApi } from "react-icons/tb"; 
import {FaJava, FaReact,FaGithub,FaPython, FaPhp, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs} from "react-icons/fa";
export default function Skills(){
    return (
        <>
        <section id="skills" className="relative overflow-hidden bg-gradient-to-l from-zinc-800 to-fuchsia-400/60 px-6 py-12 text-white md:px-16">
             <h2 className="mb-8 text-center text-3xl font-bold text-amber-100">Technical Skills</h2>
        <div className="relative z-10 grid gap-6 md:grid-cols-3">
           
            <div className="rounded-2xl bg-zinc-700/70 p-5 shadow-lg shadow-white/20 backdrop-blur-sm">
                <span className="mb-4 block text-center text-lg font-semibold">Front End</span>
                <ul className="flex flex-wrap gap-3">
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaHtml5 size={20} color="#E34F26"/> HTML</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaCss3Alt size={20} color="#1572B6"/> CSS</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaJs size={20} color="#F7DF1E"/> JavaScript</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaReact size={20} color="#61DAFB" /> React</li> 
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><SiVite size={18} color="#646CFF" /> Vite</li>
                </ul>
            </div>
            <div className="rounded-2xl bg-zinc-700/70 p-5 shadow-lg shadow-white/20 backdrop-blur-sm">
                <span className="mb-4 block text-center text-lg font-semibold">Back End</span>
                <ul className="flex flex-wrap gap-3">
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaJava size={20}/> Java</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaNodeJs size={20} color="#68A063"/> Node.js</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><SiExpress size={20} color="#FFFFFF" /> Express.js</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><SiMongodb size={20} color="#47A248"/> MongoDB</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaPhp size={20} color="#777BB4"/> PHP</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaDatabase size={20} color="#4DB33D"/> MySQL</li>
                </ul>
            </div>
            <div className="rounded-2xl bg-zinc-700/70 p-5 shadow-lg shadow-white/20 backdrop-blur-sm">
                <span className="mb-4 block text-center text-lg font-semibold">Other Skills</span>
                <ul className="flex flex-wrap gap-3">
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaJava size={20} color="#007396"/> Java</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><SiC size={20} color="#A8B9CC"/><SiCplusplus size={20} color="#00599C" /> C / C++</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaPython size={20} color="#3776AB"/> Python</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><GiNetworkBars size={20} color="#00A8E8" /> DSA</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><GiArtificialIntelligence size={20} color="#007ACC"/> OOPs</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><SiOracle size={20} color="#F80000" /> Oracle</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><FaGithub size={20} color="#FFFFFF" /> Git & GitHub</li>
                  <li className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 text-sm shadow shadow-fuchsia-300/40"><TbApi size={20} color="#0096D6"/> APIs</li>
                </ul>
            </div>

        </div>
        </section>
        </>
    )
}