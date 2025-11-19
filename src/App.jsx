import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-indigo-100">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-indigo-400/20 bg-slate-900/60 px-4 py-3 backdrop-blur-lg">
          <a href="#" className="text-sm font-semibold text-white">Your Name</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#skills" className="text-indigo-200 hover:text-white">Skills</a>
            <a href="#projects" className="text-indigo-200 hover:text-white">Projects</a>
            <a href="#contact" className="text-indigo-200 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-200 hover:bg-indigo-500/20">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  )
}

export default App
