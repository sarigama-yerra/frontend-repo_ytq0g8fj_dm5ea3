import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-50">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
          <span>Web Development • Futuristic • CS Graduate</span>
        </motion.div>

        <motion.h1 initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-balance bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl">
          B.Tech CSE Portfolio
        </motion.h1>

        <motion.p initial="hidden" animate="visible" custom={3} variants={fadeUp} className="mt-4 max-w-2xl text-pretty text-base text-indigo-200/90 sm:text-lg">
          I craft immersive web experiences with modern frameworks, clean code, and a love for performance and accessibility. Let’s build the future for the web.
        </motion.p>

        <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-2 focus:ring-indigo-400/60">
            View Projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-white/5 px-5 py-3 text-sm font-medium text-indigo-200 backdrop-blur transition-colors hover:bg-white/10">
            Get in touch
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none relative z-10 mx-auto mt-16 max-w-6xl px-6">
        <div className="rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-white/5 to-white/0 p-0.5 backdrop-blur">
          <div className="rounded-2xl bg-slate-950/70 p-6">
            <div className="grid grid-cols-2 gap-4 text-left text-xs text-indigo-200/80 sm:grid-cols-4">
              <div className="rounded-lg border border-indigo-400/10 bg-white/5 p-3">React • Next.js</div>
              <div className="rounded-lg border border-indigo-400/10 bg-white/5 p-3">TypeScript • JS</div>
              <div className="rounded-lg border border-indigo-400/10 bg-white/5 p-3">Node • Express</div>
              <div className="rounded-lg border border-indigo-400/10 bg-white/5 p-3">Tailwind • UI/UX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
