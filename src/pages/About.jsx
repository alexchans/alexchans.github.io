import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero card">
        <div className="about-greeting">
          <span className="about-wave">👋</span>
          <h1>About Me</h1>
        </div>
        <p className="about-bio">
          Senior Computer Science student from{' '}
          <a href="https://www.smu.edu/" target="_blank" rel="noopener noreferrer">
            Southern Methodist University
          </a>
          , starting PhD in Spring 2025. Research focuses on{' '}
          <span className="highlight">AI</span> and{' '}
          <span className="highlight">Healthcare</span>.
        </p>
      </section>

      <section className="about-interests card">
        <h2>Research Interests</h2>
        <div className="interest-tags">
          <span className="badge">Artificial Intelligence</span>
          <span className="badge">Healthcare</span>
          <span className="badge">Machine Learning</span>
          <span className="badge">Computer Science</span>
        </div>
      </section>

      <section className="about-resume card">
        <h2>Resume</h2>
        <p>
          Download my latest resume for a comprehensive overview of my academic
          background and experience.
        </p>
        <a
          href="/files/Alex Chen's resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Download Resume
        </a>
      </section>
    </div>
  );
}
