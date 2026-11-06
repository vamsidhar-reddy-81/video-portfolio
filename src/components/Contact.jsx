import { useState } from 'react'
import { profile } from '../data'
import { Heading, Reveal, Section, Arrow } from './ui'

const inp = 'w-full rounded-2xl bg-white border border-[var(--border)] px-5 py-3.5 outline-none focus:border-accent2 focus:ring-4 focus:ring-accent2/15 transition'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const body = `${f.msg}\n\nFrom: ${f.name} <${f.email}>`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(body)}`
  }
  const links = [['GitHub', profile.github], ['LinkedIn', profile.linkedin], ['HackerRank', profile.hackerrank], ['LeetCode', profile.leetcode]]
  return (
    <Section id="contact">
      <Heading pill="Contact" sub="I'm open to Python developer roles and internships. Let's build something useful together.">Get In Touch</Heading>
      <div className="grid lg:grid-cols-2 gap-10">
        <Reveal className="space-y-5">
          {[['Email', profile.email, `mailto:${profile.email}`], ['Phone', profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`], ['Location', profile.location]].map(([l, v, h]) => (
            <div key={l} className="rounded-2xl bg-white border border-[var(--border)] px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{l}</p>
              {h ? <a href={h} className="mt-1 block font-semibold text-ink hover:text-accent2 break-all">{v}</a> : <p className="mt-1 font-semibold text-ink">{v}</p>}
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            {links.map(([l, u]) => <a key={l} href={u} target="_blank" rel="noreferrer" className="pill bg-dark text-white px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-1.5 glow transition-shadow">{l} <Arrow /></a>)}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-3xl bg-white/70 border border-[var(--border)] p-7 space-y-4">
            <input className={inp} placeholder="Your name" required value={f.name} onChange={set('name')} aria-label="Your name" />
            <input className={inp} type="email" placeholder="Your email" required value={f.email} onChange={set('email')} aria-label="Your email" />
            <textarea className={inp + ' min-h-36 resize-y'} placeholder="Your message" required value={f.msg} onChange={set('msg')} aria-label="Your message" />
            <button className="pill w-full bg-dark text-white py-3.5 font-semibold glow transition-shadow">Send message</button>
            <p className="text-xs text-muted text-center">This opens your email app with the message ready to send.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
