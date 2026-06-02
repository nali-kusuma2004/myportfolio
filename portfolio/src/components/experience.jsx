import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-[#020617] px-5 py-[70px] text-white md:px-[10%]">
      <h2 className="mb-[45px] text-center text-[34px]">Experience</h2>

      <div className="mx-auto max-w-[900px] rounded-[18px] border-l-[5px] border-[#38bdf8] bg-[#0f172a] p-7 shadow-[0_20px_35px_rgba(0,0,0,0.45)]">
        <h3 className="text-[22px] text-[#38bdf8]">Full Stack Developer Intern (MERN)</h3>
        <h4 className="mt-[6px] text-[16px] text-[#cbd5f5]">Smart Bridge – Remote Internship</h4>
        <span className="my-[10px] mb-[18px] block text-[13px] text-[#94a3b8]">May 2025 – July 2025</span>

        <ul className="list-disc pl-5">
          <li>
            Designed and developed responsive UI components using ReactJS,
            HTML, CSS, and JavaScript following component-based architecture.
          </li>
          <li>
            Integrated frontend applications with RESTful APIs using Node.js
            and MongoDB for dynamic data flow.
          </li>
          <li>
            Participated in requirement analysis, debugging, and feature
            enhancements.
          </li>
          <li>
            Collaborated with cross-functional teams to deliver user-friendly
            web modules within timelines.
          </li>
        </ul>
      </div>
    </section>
  )
}
