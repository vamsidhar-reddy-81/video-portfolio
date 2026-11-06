export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { accent: 'var(--accent)', accent2: 'var(--accent-2)', ink: 'var(--text)', muted: 'var(--muted)', dark: '#0B1026' },
    fontFamily: { head: ['Sora', 'Plus Jakarta Sans', 'sans-serif'], body: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'], serif: ['Instrument Serif', 'serif'] },
  } },
}
