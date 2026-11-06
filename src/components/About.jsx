import { about, profile, experience } from '../data'
import { Heading, Reveal, Section } from './ui'

export default function About() {
  return (
    <Section id="about">
      <Heading pill="About me">{about.heading}</Heading>
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent2/40 to-accent/30 blur-xl" aria-hidden />
            <img src={profile.photo} alt={profile.fullName} loading="lazy" className="relative rounded-[2rem] w-full aspect-square object-cover object-top border border-white shadow-xl" />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-dark text-white px-5 py-2 font-mono text-[11px] tracking-widest">{profile.fullName.toUpperCase()}</div>
          </div>
        </Reveal>
        <div>
          {about.paragraphs.map((p, i) => <Reveal key={i} delay={i * 0.08}><p className="text-lg text-slate-700 leading-relaxed mb-5">{p}</p></Reveal>)}
          <Reveal className="mt-8 grid sm:grid-cols-2 gap-3">
            {about.facts.map(f => (
              <div key={f.label} className="rounded-2xl bg-white border border-[var(--border)] px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{f.label}</p>
                <p className="mt-1 font-semibold text-ink">{f.value}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-4">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="pill bg-dark text-white px-7 py-3 font-semibold glow transition-shadow">View Resume</a>
            <a href={profile.resume} download className="pill border border-ink/20 text-ink px-7 py-3 font-semibold hover:border-accent2 hover:text-accent2 transition-colors">Download PDF</a>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {about.highlights.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.08} className="rounded-3xl bg-white border border-[var(--border)] p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
            <p className="font-serif italic text-3xl text-accent2">0{i + 1}</p>
            <h3 className="mt-3 font-head font-bold text-ink">{t}</h3>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <h3 className="font-head font-bold text-2xl text-ink mb-6">Experience</h3>
          <div className="rounded-3xl bg-white border border-[var(--border)] p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent2">{experience.period}</p>
            <h4 className="mt-2 font-head font-bold text-xl text-ink">{experience.role}</h4>
            <p className="text-muted text-sm">{experience.company}</p>
            <ul className="mt-5 space-y-3 text-slate-700">
              {experience.points.map(p => <li key={p} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{p}</li>)}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-head font-bold text-2xl text-ink mb-6">Education</h3>
          <ol className="relative border-l-2 border-dashed border-[var(--border)] ml-3 space-y-6">
            {about.education.map(e => (
              <li key={e.title} className="pl-7 relative">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-accent2" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{e.year}</p>
                <p className="font-head font-bold text-ink">{e.title}</p>
                <p className="text-sm text-muted">{e.sub}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
