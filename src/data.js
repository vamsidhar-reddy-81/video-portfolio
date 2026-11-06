// All editable content lives here.
export const profile = {
  name: 'Vamsidhar',
  fullName: 'Morreddy Gari Vamsidhar Reddy',
  title: 'AI & ML Developer',
  subtitle: 'I build intelligent, useful apps with Python, machine learning and modern web tech.',
  photo: '/dp.jpeg',
  video: '/hero-talk.mp4',   // drop your file in /public
  poster: '/poster.jpg',     // drop your poster in /public (falls back to photo)
  email: 'm.vamsidhar20061@gmail.com',
  phone: '+91 79815 71850',
  location: 'Dharmavaram, Andhra Pradesh, India',
  resume: '/Vamsidhar_Reddy_Resume.pdf',
  github: 'https://github.com/vamsidhar-reddy-81',
  linkedin: 'https://www.linkedin.com/in/morreddy-gari-vamsidharreddy-4b0640378/',
  hackerrank: 'https://www.hackerrank.com/profile/m_vamsidhar20061',
  leetcode: 'https://leetcode.com/u/Vamsidhar-Reddy-81/',
  gfg: 'https://www.geeksforgeeks.org/profile/mvamsidhdeiy',
  oldPortfolio: 'https://vamsidhar-reddy-81.github.io/My-Portfolio/',
}

export const navLinks = ['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Certifications', 'Contact']

export const about = {
  heading: 'Learning by building, one project at a time.',
  paragraphs: [
    "I'm a 3rd-year B.Tech student in Computer Science (AI & ML) at Tirumala Engineering College, who learns by building real projects. I started with C and Java, and now write Python and build web apps with HTML, CSS and JavaScript.",
    'I completed an 8-week Python Programming internship at KODBUD and several Forage job simulations from JPMorgan, Deloitte and Commonwealth Bank.',
    "I'm looking for a Python Developer role or internship where I can grow into an AI / Generative AI engineer.",
  ],
  facts: [
    { label: 'Education', value: 'B.Tech AI & ML · 2025 – 2028' },
    { label: 'Background', value: 'Diploma in ECE (CBIT, Proddatur)' },
    { label: 'Experience', value: 'Python Intern · KODBUD · 2026' },
    { label: 'Based in', value: 'Andhra Pradesh, India' },
    { label: 'Languages', value: 'English · Telugu · Hindi' },
    { label: 'Goal', value: 'Job-ready AI / ML engineer' },
  ],
  highlights: [
    ['Project-driven learning', 'Learning every concept by building something real.'],
    ['Collaborative mindset', 'Clear communication and teamwork for better results.'],
    ['Practical innovation', 'Simple, working solutions over complicated ideas.'],
    ['Rapid adaptation', 'Quickly picking up new tools and technologies.'],
  ],
  education: [
    { year: '2025 – 2028', title: 'Tirumala Engineering College', sub: 'B.Tech in AI & ML · CGPA 7.55' },
    { year: '2022 – 2025', title: 'CBIT, Proddatur', sub: 'Diploma in ECE · 79.4%' },
    { year: '2022', title: 'AP Model School, Dharmavaram', sub: 'SSC · 425 / 600' },
  ],
}

export const expertise = {
  heading: 'Building Intelligent Digital Solutions with Code & AI',
  intro: 'From Python programs to AI experiments and clean web apps, this is what I work on.',
  cards: [
    { n: '01', title: 'AI & Machine Learning', text: 'Exploring generative AI, data science and multi-agent RAG systems through hackathon and personal projects.' },
    { n: '02', title: 'Python Development', text: 'Writing clean Python programs and tools, backed by an 8-week internship at KODBUD.' },
    { n: '03', title: 'Frontend Development', text: 'Building responsive, mobile-first interfaces with HTML, CSS and JavaScript, plus React.' },
    { n: '04', title: 'Tools & Deployment', text: 'Version control with Git and GitHub, deploying live sites on GitHub Pages and Vercel.' },
  ],
}

export const skills = {
  heading: 'Technical Arsenal',
  subtitle: 'The languages and tools I use to turn ideas into working software.',
  groups: [
    { title: 'Programming', items: ['Python', 'Java', 'JavaScript', 'C'] },
    { title: 'Frontend & Web', items: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'SheetJS', 'REST APIs'] },
    { title: 'AI & Data', items: ['Generative AI', 'Data Science', 'Data Analytics', 'RAG', 'Google AI Essentials'] },
    { title: 'Tools & Hardware', items: ['Git', 'GitHub', 'GitHub Pages', 'VS Code', 'Vercel', 'Arduino'] },
  ],
  soft: ['Teamwork', 'Communication', 'Time Management', 'Willingness to Learn'],
}

export const projects = [
  { tag: 'AI • RAG • AGENTS', title: 'LegacyMind-AI', text: 'Multi-agent RAG system built for the Microsoft Agents League hackathon.', tech: ['Python', 'RAG', 'Multi-Agent'], code: 'https://github.com/vamsidhar-reddy-81/LegacyMind-AI' },
  { tag: 'AI • COACHING', title: 'Coach-AI', text: 'AI-based coaching project from my GitHub. Full details are in the repository.', tech: ['Python', 'AI'], code: 'https://github.com/vamsidhar-reddy-81/Coach-ai' },
  { tag: 'WEB APP • MOBILE-FIRST', title: 'HabitGrid', text: 'Habit tracker with daily check-ins, streaks, a progress ring dashboard, monthly calendar, 14-day trend analysis and Excel export.', tech: ['HTML', 'CSS', 'JavaScript', 'SheetJS'], code: 'https://github.com/vamsidhar-reddy-81/HabitGrid', live: 'https://vamsidhar-reddy-81.github.io/HabitGrid/' },
  { tag: 'WEB APP • API', title: 'Live Weather App', text: 'Search any city and see live temperature, humidity and wind speed fetched in real time from the Weatherstack API.', tech: ['HTML', 'CSS', 'JavaScript', 'API'], code: 'https://github.com/vamsidhar-reddy-81/Live-Weather-App', live: 'https://vamsidhar-reddy-81.github.io/Live-Weather-App/' },
  { tag: 'WEBSITE • GITHUB PAGES', title: 'Personal Portfolio', text: 'My first portfolio with Home, About, Skills, Projects and Contact sections, designed from scratch and deployed live.', tech: ['HTML', 'CSS', 'GitHub Pages'], code: 'https://github.com/vamsidhar-reddy-81/My-Portfolio', live: 'https://vamsidhar-reddy-81.github.io/My-Portfolio/' },
  { tag: 'EMBEDDED • IOT', title: 'RFID Door Locking System', text: 'Arduino program for an RFID-based door lock that gives access only to authorised cards.', tech: ['Arduino', 'RFID'], code: 'https://github.com/vamsidhar-reddy-81?tab=repositories' },
]

export const coding = [
  { name: 'GeeksforGeeks', stat: '23', label: 'Problems solved', url: profile.gfg },
  { name: 'LeetCode', stat: '2', label: 'Problems solved', url: profile.leetcode },
  { name: 'HackerRank', stat: '2', label: 'Badges + Java (Basic) certified', url: profile.hackerrank },
]

export const certs = [
  { n: '01', cat: 'SOFTWARE ENGINEERING', title: 'Software Engineering Job Simulation', issuer: 'JPMorgan Chase & Co. (Forage)', date: 'Jun 2026', img: '/certs/1.png' },
  { n: '02', cat: 'TECHNOLOGY', title: 'Technology Job Simulation', issuer: 'Deloitte (Forage)', date: 'Jun 2026', img: '/certs/2.png' },
  { n: '03', cat: 'DATA SCIENCE', title: 'Introduction to Data Science Job Simulation', issuer: 'Commonwealth Bank (Forage)', date: 'Jun 2026', img: '/certs/3.png' },
  { n: '04', cat: 'ARTIFICIAL INTELLIGENCE', title: 'Google AI Essentials', issuer: 'Google, Coursera', date: 'May 2026', img: '/certs/4.png', link: 'https://www.credly.com/badges/55d2793c-3941-48ed-9a39-5656b44621db/linked_in?t=tfrz62' },
  { n: '05', cat: 'GENERATIVE AI', title: 'What Is Generative AI?', issuer: 'LinkedIn Learning', date: 'May 2026', img: '/certs/5.png' },
  { n: '06', cat: 'PYTHON', title: 'Python (Kaggle Course)', issuer: 'Kaggle', date: 'Sep 2026', img: '/certs/6.png' },
  { n: '07', cat: 'JAVA', title: 'Java (Basic)', issuer: 'HackerRank', date: 'Jun 2026', img: '/certs/7.png' },
  { n: '08', cat: 'DATA ANALYTICS', title: 'Data Analytics Job Simulation', issuer: 'Deloitte (Forage)', date: 'May 2026' },
  { n: '09', cat: 'INTERNSHIP', title: 'Python Programming Internship', issuer: 'KODBUD (AICTE Approved)', date: 'Aug 2026', img: '/certs/kodbud.png' },
]

export const experience = {
  role: 'Python Programming Intern',
  company: 'KODBUD (AICTE Approved) · Remote',
  period: 'Jun 2026 – Jul 2026',
  points: [
    'Completed an 8-week online Python Programming internship (01 Jun to 31 Jul 2026).',
    'Contributed to tasks and projects assigned under KODBUD guidance.',
    'Received a Certificate of Completion on 01 Aug 2026 (ID: KSINT26908).',
  ],
}
