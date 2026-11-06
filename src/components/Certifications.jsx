import { useEffect, useRef, useState } from 'react'
import { certs } from '../data'
import { Heading, Reveal, Section, Pin, Arrow } from './ui'

function Cert({ c, i, onOpen }) {
  const [flip, setFlip] = useState(false)
  const rot = [-1.6, 1.2, -0.8, 1.6, -1.2][i % 5]
  return (
    <div className="shrink-0 snap-center w-[260px] h-[330px] pt-6" style={{ perspective: 1000 }}>
      <div className="relative w-full h-full" style={{ transform: `rotate(${rot}deg)`, transformOrigin: 'top center' }}
        onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)} onClick={() => setFlip(f => !f)}>
        <span className="absolute left-1/2 -top-6 h-6 w-px bg-slate-400" aria-hidden />
        <div className="relative w-full h-full transition-transform duration-700" style={{ transformStyle: 'preserve-3d', transform: flip ? 'rotateY(180deg)' : 'none' }}>
          <div className="absolute inset-0 rounded-3xl bg-white border border-[var(--border)] shadow-lg p-6 flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
            <Pin />
            <div className="flex justify-between items-start mt-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent2 max-w-[75%]">{c.cat}</p>
              <p className="font-serif italic text-xl text-slate-400">{c.n}</p>
            </div>
            <h3 className="mt-5 font-head font-bold text-[17px] leading-snug text-ink">{c.title}</h3>
            <div className="mt-auto">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">Issued by</p>
              <p className="text-sm font-semibold text-slate-700">{c.issuer}</p>
              <p className="text-xs text-muted">{c.date}</p>
            </div>
          </div>
          <div className="absolute inset-0 rounded-3xl bg-dark border border-white/10 shadow-xl p-6 flex flex-col items-center justify-center text-center text-white" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <span className="font-mono text-[10px] tracking-[0.25em] text-accent">● VERIFIED</span>
            <p className="mt-4 font-head font-bold">{c.title}</p>
            <p className="mt-1 text-xs text-slate-400">{c.issuer}</p>
            {c.img || c.link ? (
              <button onClick={e => { e.stopPropagation(); c.img ? onOpen(c) : window.open(c.link, '_blank') }}
                className="mt-6 pill bg-accent text-dark px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors">View Certificate</button>
            ) : <p className="mt-6 text-xs text-slate-400">Certificate image coming soon</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const rail = useRef(null)
  const [open, setOpen] = useState(null)
  const scroll = d => rail.current?.scrollBy({ left: d * 300, behavior: 'smooth' })
  useEffect(() => {
    if (!open) return
    const k = e => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open])
  return (
    <Section id="certifications">
      <div className="flex items-end justify-between gap-6">
        <Heading pill="Badges">Professional Credentials</Heading>
        <div className="hidden sm:flex gap-3 mb-12">
          {[-1, 1].map(d => (
            <button key={d} onClick={() => scroll(d)} aria-label={d < 0 ? 'Previous' : 'Next'}
              className="w-12 h-12 grid place-items-center rounded-full bg-white border border-[var(--border)] hover:border-accent2 hover:shadow-md transition-all">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={d < 0 ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'} /></svg>
            </button>
          ))}
        </div>
      </div>
      <Reveal>
        <div className="relative">
          <div className="absolute inset-x-0 top-6 border-t-2 border-dashed border-slate-300" aria-hidden />
          <div ref={rail} className="relative flex gap-6 overflow-x-auto snap-x pb-10 -mx-5 px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {certs.map((c, i) => <Cert key={c.n} c={c} i={i} onOpen={setOpen} />)}
          </div>
        </div>
        <p className="mt-4 text-center font-serif italic text-xl text-slate-500">Hover or tap a card to flip and verify · Total of {certs.length} certificates.</p>
      </Reveal>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm grid place-items-center p-4 cursor-zoom-out">
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={open.img} alt={open.title} className="w-full max-h-[80vh] object-contain rounded-xl bg-white" />
            <div className="mt-4 flex justify-between items-center text-white">
              <p className="font-semibold">{open.title}</p>
              <div className="flex gap-3">
                {open.link && <a href={open.link} target="_blank" rel="noreferrer" className="pill bg-accent text-dark px-4 py-2 text-sm font-semibold inline-flex items-center gap-1">Verify online <Arrow /></a>}
                <button onClick={() => setOpen(null)} className="pill border border-white/40 px-4 py-2 text-sm">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
