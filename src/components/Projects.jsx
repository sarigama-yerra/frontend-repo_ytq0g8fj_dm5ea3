import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Cyberfolio — 3D Portfolio',
    description: 'A futuristic personal site with 3D interactions, Spline scenes, and smooth motion.',
    stack: ['React', 'Spline', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'DevDash — Analytics Dashboard',
    description: 'A developer-centric dashboard for performance metrics and GitHub insights.',
    stack: ['Next.js', 'MongoDB', 'Vercel', 'Charts'],
    link: '#',
  },
  {
    title: 'API Forge — Toolkit',
    description: 'A toolkit to rapidly scaffold and test REST APIs with robust validation.',
    stack: ['FastAPI', 'React', 'Tailwind'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold text-white sm:text-4xl">
          Featured Projects
        </motion.h2>
        <p className="mt-2 text-indigo-200/80">Selected work highlighting engineering, design, and motion.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 text-indigo-100"
          >
            <div className="mb-4 aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-cyan-500/20 ring-1 ring-inset ring-white/10 transition-all group-hover:scale-[1.02]" />
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-indigo-200/80">{p.description}</p>
              </div>
              <span className="rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-2 py-1 text-[10px] text-indigo-300">Case Study</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="rounded-md border border-indigo-400/20 bg-white/5 px-2 py-1 text-[11px] text-indigo-200/90">{s}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
