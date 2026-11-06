import { motion } from 'framer-motion'
import { profile } from '../data'
export default function Loader() {
  return (
    <motion.div className="hero-bg fixed inset-0 z-[100] grid place-items-center"
      initial={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
      <motion.h1 className="font-head font-extrabold text-[var(--text-on-dark)] text-[clamp(3rem,13vw,10rem)] leading-none tracking-tight"
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        {profile.name}<span className="text-accent">.</span>
      </motion.h1>
    </motion.div>
  )
}
