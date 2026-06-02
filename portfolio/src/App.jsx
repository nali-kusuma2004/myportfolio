import Navbar from './components/navbar.jsx'
import About from './components/about.jsx'
import Education from './components/education.jsx'
import Certificates from './components/certificates.jsx'
import Work from './components/work.jsx'
import Experience from './components/experience.jsx'
import Skills from './components/skills.jsx'
import Contact from './components/contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-white">
      <Navbar />
      <main className="pt-20">
        <About />
        <Skills />
        <Education />
        <Certificates />
        <Work />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
