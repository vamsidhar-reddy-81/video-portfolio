import { motion } from 'framer-motion'

export const Reveal = ({ children, delay = 0, y = 28, className = '', as = 'div' }) => {
  const M = motion[as]
  return (
    <M className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay, ease: 'easeOut' }}>
      {children}
    </M>
  )
}

export const Pill = ({ children }) => (
  <span className="inline-block rounded-full border border-[var(--border)] bg-white px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted shadow-sm">{children}</span>
)

export const Heading = ({ pill, children, sub, underline = true }) => (
  <Reveal className="mb-12">
    {pill && <div className="mb-5"><Pill>{pill}</Pill></div>}
    <h2 className="font-head font-extrabold text-ink text-[clamp(2rem,4.4vw,3.3rem)] leading-[1.1] inline-block relative">
      {children}
      {underline && <span className="absolute -bottom-2 left-0 h-[3px] w-24 rounded bg-gradient-to-r from-accent2 to-accent" />}
    </h2>
    {sub && <p className="mt-6 text-muted max-w-2xl text-lg">{sub}</p>}
  </Reveal>
)

export const Pin = () => <span className="absolute left-1/2 -translate-x-1/2 -top-1 w-3 h-3 rounded-full bg-slate-300 shadow-inner ring-4 ring-white z-10" />

export const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`grid-paper relative py-24 md:py-32 ${className}`}>
    <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
  </section>
)

export const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
)
