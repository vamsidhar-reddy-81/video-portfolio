import { skills } from '../data'
import { Heading, Reveal, Section } from './ui'

export default function Skills() {
  return (
    <Section id="skills">
      <Heading pill="Skills" sub={skills.subtitle}>{skills.heading}</Heading>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.07} className="rounded-3xl bg-white border border-[var(--border)] p-7 hover:shadow-lg transition-shadow">
            <h3 className="font-head font-bold text-lg text-ink">{g.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {g.items.map(s => (
                <span key={s} className="rounded-full border border-[var(--border)] bg-[var(--section-bg)] px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-accent hover:border-accent hover:text-dark cursor-default">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 rounded-3xl bg-dark text-white p-7 flex flex-wrap items-center gap-x-8 gap-y-3">
        <span className="font-mono text-[11px] uppercase tracking-widest text-accent">Soft skills</span>
        {skills.soft.map(s => <span key={s} className="text-slate-200">{s}</span>)}
      </Reveal>
    </Section>
  )
}
