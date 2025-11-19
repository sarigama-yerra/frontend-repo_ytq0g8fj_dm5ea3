import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-indigo-400/10 bg-slate-950/80 py-12 text-indigo-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-white">Let’s connect</h3>
            <p className="mt-2 text-sm text-indigo-200/80">Available for internships and junior developer roles.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a className="hover:text-white" href="mailto:you@example.com">you@example.com</a></li>
              <li><a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Location</h4>
            <p className="mt-2 text-sm text-indigo-200/80">B.Tech CSE Graduate • India</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-indigo-300/70">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
