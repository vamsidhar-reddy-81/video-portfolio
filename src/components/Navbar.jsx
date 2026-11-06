import { useEffect, useState } from 'react'
import { navLinks } from '../data'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setScrolled(h.scrollTop > 40)
      setProgress(h.scrollHeight > h.clientHeight ? h.scrollTop / (h.scrollHeight - h.clientHeight) : 0)
    }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    navLinks.forEach(l => { const el = document.getElementById(l.toLowerCase()); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1026]/85 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between" aria-label="Main">
        <a href="#home" className="font-head font-bold text-xl text-[var(--text-on-dark)]">Vamsidhar<span className="text-accent">.</span></a>
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}
              className={`text-sm transition-colors ${active === l.toLowerCase() ? 'text-accent' : 'text-slate-100/80 hover:text-white'}`}>{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#contact" className="pill bg-dark text-white border border-white/20 px-5 py-2 text-sm font-semibold glow transition-shadow">Hire Me</a>
          <button className="lg:hidden text-white p-2" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? 'M5 5l14 14M19 5L5 19' : 'M3 6h18M3 12h18M3 18h18'} /></svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul className="lg:hidden bg-[#0B1026]/95 backdrop-blur-xl px-5 pb-5 flex flex-col gap-3">
          {navLinks.map(l => <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block py-1 text-[var(--text-on-dark)]">{l}</a></li>)}
        </ul>
      )}
      <div className="absolute bottom-0 left-0 h-[2px] bg-accent origin-left" style={{ width: '100%', transform: `scaleX(${progress})` }} />
    </header>
  )
}
