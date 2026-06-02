import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-16">
      <h2 className="mb-10 text-center text-4xl font-bold">Experience</h2>

      <div className="mx-auto max-w-4xl rounded-2xl border-l-4 border-sky-400 bg-slate-900 p-7 shadow-2xl shadow-black/50">
        <h3 className="text-2xl font-semibold text-sky-400">Full Stack Developer Intern (MERN)</h3>
        <h4 className="mt-1 text-base text-slate-300">Smart Bridge - Remote Internship</h4>
        <span className="mt-3 block text-sm text-slate-400">May 2025 - July 2025</span>

        <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed">
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
