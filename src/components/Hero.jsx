import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

const store = {
  get: () => { try { return localStorage.getItem('vr-sound') !== 'off' } catch { return true } },
  set: v => { try { localStorage.setItem('vr-sound', v ? 'on' : 'off') } catch {} },
}
const feather = {
  WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 28%), linear-gradient(to bottom, transparent 0, #000 22%)',
  maskImage: 'linear-gradient(to right, transparent 0, #000 28%), linear-gradient(to bottom, transparent 0, #000 22%)',
  WebkitMaskComposite: 'source-in', maskComposite: 'intersect',
}
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }

export default function Hero({ ready }) {
  const sec = useRef(null), vid = useRef(null)
  const wantSound = useRef(store.get())
  const visible = useRef(true)
  const [muted, setMuted] = useState(true)
  const [hint, setHint] = useState(false)
  const [noVideo, setNoVideo] = useState(false)

  const start = async () => {
    const v = vid.current; if (!v || !visible.current) return
    if (wantSound.current) {
      v.muted = false
      try { await v.play(); setMuted(false); setHint(false); return } catch {}
    }
    v.muted = true; setMuted(true)
    try { await v.play() } catch {}
    setHint(wantSound.current)
  }
  useEffect(() => { if (ready) start() }, [ready])

  // unmute on first interaction if autoplay-with-sound was blocked
  useEffect(() => {
    const evs = ['pointerdown', 'keydown', 'wheel', 'touchend']
    const unlock = () => {
      const v = vid.current
      if (v && wantSound.current && v.muted && visible.current && ready) { v.muted = false; v.play().catch(() => {}); setMuted(false); setHint(false) }
      evs.forEach(e => window.removeEventListener(e, unlock))
    }
    evs.forEach(e => window.addEventListener(e, unlock, { passive: true }))
    return () => evs.forEach(e => window.removeEventListener(e, unlock))
  }, [ready])

  // pause + mute when hero leaves viewport
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      visible.current = e.isIntersecting
      const v = vid.current; if (!v) return
      if (e.isIntersecting) { if (ready) start() } else { v.pause(); v.muted = true; setMuted(true) }
    }, { threshold: 0.25 })
    io.observe(sec.current); return () => io.disconnect()
  }, [ready])

  const toggle = () => {
    const v = vid.current; if (!v) return
    const next = v.muted // true => we are unmuting
    wantSound.current = next; store.set(next)
    v.muted = !next; setMuted(!next); setHint(false); v.play().catch(() => {})
  }

  return (
    <section id="home" ref={sec} className="hero-bg streaks relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 min-h-screen flex items-center">
        <motion.div className="max-w-xl pt-24 pb-[46vh] md:pb-0" initial="hidden" animate={ready ? 'show' : 'hidden'} transition={{ staggerChildren: 0.14, delayChildren: 0.2 }}>
          <motion.p variants={item} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5">Portfolio · 2026</motion.p>
          <motion.h1 variants={item} className="font-head font-extrabold text-[var(--text-on-dark)] text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.05]">
            Hi, I'm <span className="text-accent">{profile.name}</span><br />{profile.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-lg text-slate-100/80 max-w-md">{profile.subtitle}</motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="pill bg-[var(--text-on-dark)] text-dark px-7 py-3 font-semibold glow transition-shadow">View My Work</a>
            <a href="#contact" className="pill border border-white/40 text-[var(--text-on-dark)] px-7 py-3 font-semibold hover:border-accent hover:text-accent transition-colors">Contact Me</a>
          </motion.div>
        </motion.div>
      </div>

      {/* talking-head video, anchored bottom-right, bleeding behind navbar */}
      <div className="absolute right-0 bottom-0 h-[44vh] md:h-auto md:top-0 w-full md:w-[58%] pointer-events-none flex items-end justify-end" style={feather}>
        {noVideo
          ? <img src={profile.photo} alt="Vamsidhar" className="h-full md:h-[92%] w-auto object-contain object-bottom" />
          : <video ref={vid} src={profile.video} poster={profile.poster} playsInline loop preload="auto"
              onError={() => setNoVideo(true)} className="h-full md:h-[96%] w-auto max-w-none object-contain object-bottom" />}
      </div>

      {!noVideo && (
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
          {hint && <span className="hint absolute -top-9 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-accent">Tap to hear me</span>}
          <button onClick={toggle} aria-pressed={!muted} aria-label={muted ? 'Unmute sound' : 'Mute sound'}
            className="grid place-items-center w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white glow transition-shadow">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
              {muted ? <path d="M22 9l-6 6M16 9l6 6" /> : <path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14" />}
            </svg>
          </button>
          <span className="font-mono text-[9px] tracking-[0.2em] text-slate-100/80">{muted ? 'UNMUTE' : 'MUTE SOUND'}</span>
        </div>
      )}

      {/* wavy divider */}
      <svg className="absolute bottom-0 inset-x-0 z-10 w-full h-14 md:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 240 90, 480 0, 720 40 S 1200 90, 1440 30 V80 H0Z" fill="var(--section-bg)" />
      </svg>
    </section>
  )
}
