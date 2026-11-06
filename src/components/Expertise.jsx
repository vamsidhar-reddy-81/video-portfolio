import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { expertise } from '../data'
import { Pill, Pin } from './ui'

function Card({ c, i, p }) {
  const d = useTransform(p, v => i - v * 3)
  const x = useTransform(d, v => v * 70)
  const y = useTransform(d, v => v * 230)
  const rotate = useTransform(d, v => v * 5 - 2)
  const scale = useTransform(d, v => 1 - Math.min(Math.abs(v), 2) * 0.07)
  const opacity = useTransform(d, v => Math.max(0, 1 - Math.abs(v) * 0.6))
  const glow = useTransform(d, v => Math.max(0, 1 - Math.abs(v) * 1.8))
  const zIndex = useTransform(d, v => 10 - Math.round(Math.abs(v)))
  const head = useTransform(glow, [0.3, 0.75], ['#0F172A', '#FFFFFF'])
  const body = useTransform(glow, [0.3, 0.75], ['#475569', '#E0E7FF'])
  const num = useTransform(glow, [0.3, 0.75], ['#818CF8', '#5EEAD4'])
  return (
    <motion.div style={{ x, y, rotate, scale, opacity, zIndex }} className="absolute inset-x-0 top-1/2 -mt-[120px] mx-auto w-full max-w-sm">
      <div className="relative rounded-3xl bg-white border border-[var(--border)] p-7 shadow-xl overflow-hidden">
        <Pin />
        <motion.div style={{ opacity: glow }} className="absolute inset-0 bg-gradient-to-br from-accent2 to-[#4F46E5]" aria-hidden />
        <motion.div style={{ opacity: glow }} className="absolute inset-0 shadow-[0_0_60px_rgba(129,140,248,.6)]" aria-hidden />
        <div className="relative">
          <motion.p style={{ color: num }} className="font-serif italic text-3xl">{c.n}</motion.p>
          <motion.h3 style={{ color: head }} className="mt-3 font-head font-bold text-xl">{c.title}</motion.h3>
          <motion.p style={{ color: body }} className="mt-3 text-sm leading-relaxed">{c.text}</motion.p>
        </div>
      </div>
    </motion.div>
  )
}

function useDesktop() {
  const q = '(min-width: 768px)'
  const [d, setD] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches)
  useEffect(() => { const m = window.matchMedia(q); const f = () => setD(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f) }, [])
  return d
}

export default function Expertise() {
  const desktop = useDesktop()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return desktop ? (
      <section id="expertise" ref={ref} className="grid-paper relative h-[420vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="mx-auto max-w-7xl px-8 h-full grid grid-cols-2 gap-10 items-center">
            <div>
              <Pill>My Expertise</Pill>
              <h2 className="mt-6 font-head font-extrabold text-ink text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.08]">{expertise.heading}</h2>
              <p className="mt-6 text-lg text-muted max-w-md">{expertise.intro}</p>
            </div>
            <div className="relative h-full">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 800" preserveAspectRatio="none" aria-hidden>
                <path d="M470 40 C 420 220, 90 250, 130 420 S 400 600, 250 770" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="7 9" />
                <path d="M238 752 L250 772 L266 756" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {expertise.cards.map((c, i) => <Card key={c.n} c={c} i={i} p={scrollYProgress} />)}
            </div>
          </div>
        </div>
      </section>
  ) : (
      <section id="expertise" className="grid-paper px-5 py-20">
        <Pill>My Expertise</Pill>
        <h2 className="mt-5 font-head font-extrabold text-ink text-[2rem] leading-[1.1]">{expertise.heading}</h2>
        <p className="mt-4 text-muted">{expertise.intro}</p>
        <div className="mt-10 space-y-8">
          {expertise.cards.map((c, i) => (
            <motion.div key={c.n} initial={{ opacity: 0, y: 40, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.8 : -1.8 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }} className="relative rounded-3xl bg-white border border-[var(--border)] p-6 shadow-lg">
              <Pin />
              <p className="font-serif italic text-3xl text-accent2">{c.n}</p>
              <h3 className="mt-2 font-head font-bold text-xl text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
  )
}
