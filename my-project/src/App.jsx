import { useEffect, useMemo, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const links = {
  linkedin: 'https://www.linkedin.com/in/gauthami-poojary-9a9185354',
  github: 'https://github.com/',
  resume: '/resume.pdf',
}

const education = [
  {
    title: 'B.Tech in Information Science & Engineering',
    institution: 'NMAM Institute of Technology, Karkala',
    period: 'Aug 2023 – May 2027 (Expected)',
    details: ['Current CGPA: 7.38', 'Coursework: AI, Web Development, Data Structures'],
  },
  {
    title: 'Pre-University (PCMB)',
    institution: 'Poorna Prajna College',
    period: 'Jun 2021 – Mar 2023',
  },
  {
    title: 'High School',
    institution: "St. Mary's", 
    period: 'Jun 2017 – Apr 2021',
  },
]

const internships = [
  {
    title: 'Machine Learning Intern',
    company: 'Manipal Institute of Technology',
    period: 'Jun 2025 – Aug 2025',
    summary: 'Supported predictive analytics using data cleaning, EDA, and model evaluation on real-world datasets.',
  },
  {
    title: 'E-Waste Management Research',
    company: 'Academic Project',
    period: '2025',
    summary: 'Investigated recycling workflows and eco-friendly disposal methods to support sustainable systems.',
  },
  {
    title: 'IoT, VR & 3D Scanning Intern',
    company: 'AIC Nitte Incubation Centre (Fab Lab)',
    period: '2024',
    summary: 'Learned practical IoT and VR fundamentals while contributing to immersive prototype workflows.',
  },
]

const projects = [
  {
    name: 'Credit Card Approval Prediction',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy'],
    description:
      'Built a classification pipeline to predict card approvals. Cleaned data, engineered features, and trained Logistic Regression and Random Forest models.',
    github: 'https://github.com/',
    demo: null,
  },
  {
    name: 'Recruiter-Friendly Portfolio',
    stack: ['React', 'Vite', 'CSS', 'Responsive Design'],
    description:
      'Designed a modern portfolio focusing on clarity, recruiter-first sections, and polished interactions for final-year tech students.',
    github: 'https://github.com/',
    demo: null,
  },
]

function Section({ title, children }) {
  return (
    <section className="section fade-up">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-line" />
      </div>
      {children}
    </section>
  )
}

function SkillTag({ label }) {
  return <span className="skill-tag">{label}</span>
}

function ProjectCard({ project }) {
  return (
    <article className="card project-card hover-card fade-up">
      <div className="card-head">
        <h3>{project.name}</h3>
        <div className="chip-list">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p>{project.description}</p>
      <div className="card-actions">
        <a href={project.github} target="_blank" rel="noreferrer" className="button button-secondary">
          GitHub
        </a>
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer" className="button button-primary">
            View Demo
          </a>
        ) : null}
      </div>
    </article>
  )
}

function TimelineCard({ item }) {
  return (
    <article className="card timeline-card hover-card fade-up">
      <div className="timeline-meta">
        <span className="timeline-title">{item.title}</span>
        <span className="timeline-company">{item.company}</span>
      </div>
      <p className="timeline-period">{item.period}</p>
      <p>{item.summary}</p>
    </article>
  )
}

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const themeLabel = useMemo(() => (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'), [theme])

  return (
    <div className="app">
      <header className="topbar fade-up">
        <div className="container topbar-inner">
          <div>
            <p className="eyebrow">Final-year Information Science Engineer</p>
            <h1>Building practical AI and web experiences with strong data intuition.</h1>
          </div>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={themeLabel}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <main className="container">
        <section className="hero-grid fade-up">
          <div className="hero-copy">
            <span className="eyebrow">Hi, I’m Gauthami</span>
            <h2>Final-year Information Science student focused on AI, analytics and modern web development.</h2>
            <p>
              I combine strong problem solving with practical project experience in machine learning, data analytics and full-stack portfolio development to build recruiter-friendly solutions.
            </p>
            <div className="button-group">
              <a className="button button-primary" href={links.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="button button-secondary" href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-card hover-card">
            <img src={heroImg} alt="Creative portrait" className="hero-photo" />
            <div className="hero-stats">
              <div>
                <strong>AI & ML</strong>
                <p>Python, Scikit-learn, Flask</p>
              </div>
              <div>
                <strong>Web</strong>
                <p>React, Vite, HTML, CSS</p>
              </div>
            </div>
          </div>
        </section>

        <Section title="About Me">
          <div className="about-card card fade-up">
            <p>
              I’m a final-year Information Science engineer with a strong interest in AI and web development. I deliver polished, recruiter-friendly projects by combining data-driven insights with user-centered interfaces.
            </p>
            <p>
              My experience includes building machine learning pipelines, designing efficient data workflows, and creating modern web applications using best practices for performance and maintainability.
            </p>
          </div>
        </Section>

        <Section title="Education & Experience">
          <div className="grid cards-grid">
            {education.map((item) => (
              <article key={item.title} className="card hover-card">
                <h3>{item.title}</h3>
                <p className="meta">{item.institution}</p>
                <p className="meta-muted">{item.period}</p>
                {item.details?.length ? (
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="grid cards-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section title="Internships">
          <div className="grid cards-grid">
            {internships.map((item) => (
              <TimelineCard key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="skills-grid fade-up">
            {['Python', 'HTML', 'CSS', 'MySQL', 'Tableau', 'Excel', 'Google Colab', 'React', 'Flask'].map((label) => (
              <SkillTag key={label} label={label} />
            ))}
          </div>
        </Section>

        <Section title="Certifications">
          <ul className="cert-list fade-up">
            <li>Software Engineering Fundamentals Development and Testing — Infosys Springboard</li>
            <li>TypeScript Programming for Web Development — Infosys Springboard</li>
            <li>AINNOVATION 2025: Applied AI Learning Challenge</li>
            <li>AINNOVATION 2025: Microsoft AI & Azure Learning Challenges</li>
          </ul>
        </Section>

        <Section title="Contact">
          <div className="contact-card card fade-up">
            <p>Ready to collaborate on AI-driven web solutions and student-focused engineering projects.</p>
            <a href="mailto:sngauthami@gmail.com" className="button button-primary">Email Me</a>
          </div>
        </Section>
      </main>

      <footer className="footer fade-up">
        <div className="container">© {new Date().getFullYear()} Gauthami Poojary • Portfolio built with React + Vite</div>
      </footer>
    </div>
  )
}
