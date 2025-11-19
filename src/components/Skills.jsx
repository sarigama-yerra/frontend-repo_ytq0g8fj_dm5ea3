import React from 'react'
import { motion } from 'framer-motion'
import { Code, Cpu, Palette, Database, Boxes, Rocket, Shield, Zap } from 'lucide-react'

const skills = [
  { icon: <Code className="h-5 w-5" />, title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { icon: <Database className="h-5 w-5" />, title: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'REST APIs'] },
  { icon: <Boxes className="h-5 w-5" />, title: 'Tooling', items: ['Git', 'Vite', 'Webpack', 'ESLint/Prettier', 'Vercel'] },
  { icon: <Shield className="h-5 w-5" />, title: 'Quality', items: ['Accessibility', 'Testing', 'Performance', 'Secure Auth', 'Best Practices'] },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto -mt-8 max-w-6xl px-6 pb-20">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold text-white sm:text-4xl">
          Skills & Technologies
        </motion.h2>
        <p className="mt-2 text-indigo-200/80">A blend of front-end finesse, back-end power, and product thinking.</p>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((s, idx) => (
          <motion.div key={s.title} variants={item} className="group rounded-2xl border border-indigo-400/20 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 text-indigo-100 shadow-[0_0_0_0_rgba(99,102,241,0)] transition-all hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-3 py-2 text-indigo-300">
              {s.icon}
              <span className="text-sm font-medium">{s.title}</span>
            </div>
            <ul className="space-y-1.5 text-sm text-indigo-200/90">
              {s.items.map(it => (
                <li key={it} className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-indigo-400" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
