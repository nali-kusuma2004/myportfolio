export default function Work(){
    return (
        
        <section id="work" className="min-h-screen bg-[#0f172a] px-5 py-[70px] text-white md:px-[10%]">
      <h2 className="mb-11 text-center text-[34px]">Projects</h2>

      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">

        {/* Project 1 */}
        <div className="rounded-[18px] bg-[#020617] p-[26px] shadow-[0_18px_30px_rgba(0,0,0,0.45)] transition hover:-translate-y-2">
          <h3 className="text-[22px] text-[#38bdf8]">Resolve Now</h3>
          <span className="my-[10px] mb-[18px] block text-[13px] text-[#94a3b8]">May 2025 – July 2025</span>

          <p>
            Resolve Now is an online platform for registering, tracking, and
            managing complaints. It ensures quick resolution through
            categorized handling, real-time updates, and transparent
            communication between users and authorities.
          </p>

          <ul className="mb-[18px] list-disc pl-[18px]">
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
              className="rounded-lg bg-[#334155] px-4 py-2 text-[14px] text-white no-underline"
            >
              GitHub
            </a>
            <a
              href="https://resolve-now-1.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#38bdf8] px-4 py-2 text-[14px] text-[#020617] no-underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="rounded-[18px] bg-[#020617] p-[26px] shadow-[0_18px_30px_rgba(0,0,0,0.45)] transition hover:-translate-y-2">
          <h3 className="text-[22px] text-[#38bdf8]">Sample Try-out (APECET Mock Test)</h3>
          <span className="my-[10px] mb-[18px] block text-[13px] text-[#94a3b8]">5 Months</span>

          <p>
            Sample Try-out is an APECET mock test website designed to help
            students prepare through a real exam-like environment.
          </p>

          <ul className="mb-[18px] list-disc pl-[18px]">
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
              className="rounded-lg bg-[#334155] px-4 py-2 text-[14px] text-white no-underline"
            >
              GitHub
            </a>
            <a
              href="https://nali-kusuma2004.github.io/sample_try_out/index.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#38bdf8] px-4 py-2 text-[14px] text-[#020617] no-underline"
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