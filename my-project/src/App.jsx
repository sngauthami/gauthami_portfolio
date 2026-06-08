import './App.css'
import heroImg from './assets/hero.png'

function Section({ id, title, children }) {
  return (
    <section id={id} className="section container">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <h1 className="name">GAUTHAMI</h1>
            <p className="tagline">Software Engineering</p>
          </div>
          <nav className="contact">
            <a href="tel:8296807163">8296807163</a>
            <a href="mailto:sngauthami@gmail.com">sngauthami@gmail.com</a>
            <a href="http://www.linkedin.com/in/gauthami-poojary-9a9185354" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="resume-btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <img src={heroImg} alt="profile" className="hero-photo" />
          <div className="hero-text">
            <h2>Information Science student with interest in AI and web development</h2>
            <p>
              Looking for opportunities to apply my skills in real-world projects and gain hands-on industry experience.
            </p>
          </div>
        </section>

        <Section id="about" title="Education & Experience">
          <div className="grid">
            <div>
              <strong>NMAM Institute of Technology — B.Tech</strong>
              <div>Information Science & Engineering — Aug 2023 - May 2027 (Expected)</div>
              <div>CGPA: 7.38</div>
            </div>
            <div>
              <strong>Pre-University — Poorna Prajna College</strong>
              <div>June 2021 - March 2023 (KSEEB)</div>
            </div>
            <div>
              <strong>High School — St. Mary's</strong>
              <div>June 2017 - April 2021 (CBSE)</div>
            </div>
          </div>
        </Section>

        <Section id="internships" title="Internships">
          <ul>
            <li><strong>Machine Learning Intern</strong> — Manipal Institute of Technology (Jun 2025 – Aug 2025). Worked on predictive analytics, EDA and data processing.</li>
            <li><strong>E-Waste Management</strong> — Researched recycling processes and eco-friendly disposal methods.</li>
            <li><strong>IoT, VR & 3D Scanning Internship</strong> — AIC Nitte Incubation Centre (Fab Lab). Learned basics of IoT systems and VR applications.</li>
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="project">
            <h3>Credit Card Approval Prediction</h3>
            <p>Developed a machine learning model to predict credit card approval using Python and Flask. Performed data cleaning, preprocessing, EDA. Implemented Logistic Regression and Random Forest using Pandas, NumPy, and Scikit-learn.</p>
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="chips">
            <span>Python</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>MySQL</span>
            <span>Visual Studio Code</span>
            <span>Tableau</span>
            <span>Microsoft Excel</span>
            <span>Google Colab</span>
          </div>
        </Section>

        <Section id="certs" title="Certifications">
          <ul>
            <li>Software Engineering Fundamentals Development and Testing — Infosys Springboard</li>
            <li>TypeScript Programming for Web Development — Infosys Springboard</li>
            <li>AINNOVATION 2025: Applied AI Learning Challenge</li>
            <li>AINNOVATION 2025: Microsoft AI & Azure Learning Challenges</li>
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>If you'd like to connect, email me at <a href="mailto:sngauthami@gmail.com">sngauthami@gmail.com</a> or call <a href="tel:8296807163">8296807163</a>.</p>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Gauthami — Built with React + Vite</div>
      </footer>
    </div>
  )
}
