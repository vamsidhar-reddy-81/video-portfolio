import { profile, navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="bg-[var(--footer)] text-slate-300 pt-16 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-3 gap-8 font-mono text-[11px] uppercase tracking-widest leading-7">
          <div><p className="text-accent">AI · ML · Python</p><p className="text-slate-500 normal-case tracking-normal font-body text-sm mt-1">B.Tech AI &amp; ML, Tirumala Engineering College</p></div>
          <div className="sm:text-center"><p className="text-slate-500">Open to work</p><a href="#projects" className="underline underline-offset-4 hover:text-accent">View work</a></div>
          <div className="sm:text-right"><p className="text-slate-500">Andhra Pradesh, India</p><p>2026</p></div>
        </div>
        <p aria-hidden className="select-none mt-10 mb-8 font-head font-extrabold text-white leading-none tracking-tight text-[clamp(3.5rem,17.5vw,17rem)] lowercase text-center">vamsidhar</p>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-widest">
          <a href="#contact" className="underline underline-offset-4 hover:text-accent">Contact</a>
          <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:text-accent normal-case tracking-normal">{profile.email}</a>
          <span className="text-slate-500">© 2026 {profile.fullName} · Built with React</span>
        </div>
        <ul className="sr-only">{navLinks.map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul>
      </div>
    </footer>
  )
}
