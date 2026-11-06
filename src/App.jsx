import { useEffect, useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const reduce = useReducedMotion()
  useEffect(() => { const t = setTimeout(() => setLoading(false), reduce ? 600 : 2500); return () => clearTimeout(t) }, [reduce])
  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero ready={!loading} />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
