import { projects, coding } from '../data'
import { Heading, Reveal, Section, Pin, Arrow } from './ui'

export default function Projects() {
  return (
    <Section id="projects">
      <Heading pill="Selected work" sub="Projects I built to learn, ship and improve.">Projects</Heading>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <article className="group relative h-full flex flex-col rounded-3xl bg-white border border-[var(--border)] p-7 pt-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent2 hover:shadow-[0_18px_50px_rgba(129,140,248,.28)]">
              <Pin />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent2">{p.tag}</p>
              <h3 className="mt-3 font-head font-bold text-xl text-ink group-hover:text-accent2 transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 flex-1">{p.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map(t => <span key={t} className="rounded-md bg-[var(--section-bg)] border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-slate-600">{t}</span>)}
              </div>
              <div className="mt-6 flex gap-5 text-sm font-semibold text-ink">
                <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent2">Source Code <Arrow /></a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent2">Live Demo <Arrow /></a>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <div className="flex items-center gap-5 mb-8">
          <h3 className="font-head font-bold text-2xl text-ink whitespace-nowrap">Coding Profiles</h3>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {coding.map(c => (
            <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="rounded-2xl bg-white border border-[var(--border)] p-6 hover:border-accent2 hover:shadow-lg transition-all">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{c.name}</p>
              <p className="mt-2 font-head font-extrabold text-4xl text-ink">{c.stat}</p>
              <p className="text-sm text-muted">{c.label}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
