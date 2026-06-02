export default function Work(){
    return (
        
        <section id="work" className="min-h-screen bg-slate-900 px-6 py-16 text-white md:px-16">
      <h2 className="mb-10 text-center text-4xl font-bold">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">

        {/* Project 1 */}
        <div className="rounded-2xl bg-slate-950 p-7 shadow-2xl shadow-black/50 transition hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-sky-400">Resolve Now</h3>
          <span className="mt-2 block text-sm text-slate-400">May 2025 - July 2025</span>

          <p>
            Resolve Now is an online platform for registering, tracking, and
            managing complaints. It ensures quick resolution through
            categorized handling, real-time updates, and transparent
            communication between users and authorities.
          </p>

          <ul className="mb-5 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>Developed user and admin modules for complaint registration and tracking.</li>
            <li>Integrated real-time status updates and secure data handling.</li>
            <li>Designed a user-friendly interface ensuring smooth navigation.</li>
            <li>Performed testing, debugging, and complete documentation.</li>
          </ul>

          <div className="flex gap-3">
            <a
              href="https://github.com/Nali-projects/resolve-now"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-700 px-4 py-2 text-sm text-white transition hover:bg-slate-600"
            >
              GitHub
            </a>
            <a
              href="https://resolve-now-1.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="rounded-2xl bg-slate-950 p-7 shadow-2xl shadow-black/50 transition hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-sky-400">Sample Try-out (APECET Mock Test)</h3>
          <span className="mt-2 block text-sm text-slate-400">5 Months</span>

          <p>
            Sample Try-out is an APECET mock test website designed to help
            students prepare through a real exam-like environment.
          </p>

          <ul className="mb-5 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>Defined project goals and allocated tasks to team members.</li>
            <li>Designed backend logic using efficient coding practices.</li>
            <li>Implemented and managed databases for seamless data handling.</li>
            <li>Guided team members in resolving technical challenges.</li>
          </ul>

          <div className="flex gap-3">
            <a
              href="https://github.com/nali-kusuma2004/sample_try_out"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-700 px-4 py-2 text-sm text-white transition hover:bg-slate-600"
            >
              GitHub
            </a>
            <a
              href="https://nali-kusuma2004.github.io/sample_try_out/index.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Project
            </a>
          </div>
        </div>

      </div>
    </section>

    )
}


//https://github.com/Nali-projects/resolve-now
//https://resolve-now-1.onrender.com
//https://github.com/Nali-projects/resolve-now/blob/main/summ_intern.pdf