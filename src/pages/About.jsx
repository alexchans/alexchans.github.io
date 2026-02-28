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
          Ph.D. student in Theoretical and Computational Chemistry at{' '}
          <a href="https://www.smu.edu/" target="_blank" rel="noopener noreferrer">
            Southern Methodist University
          </a>
          , specializing in protein prediction and trajectory generation
          via geometric graph neural networks and diffusion-based models.
        </p>
      </section>

      <section className="about-interests card">
        <h2>Research Interests</h2>
        <div className="interest-tags">
          <span className="badge">Machine Learning</span>
          <span className="badge">Graph Neural Network</span>
          <span className="badge">Diffusion Model</span>
          <span className="badge">Protein Allosteric Site Prediction</span>
          <span className="badge">Protein Trajectory Generation</span>
        </div>
      </section>

      <section className="about-education card">
        <h2>Education</h2>
        <div className="education-entries">
          <div className="education-entry">
            <div className="education-header">
              <h3>Southern Methodist University, Dallas, TX</h3>
              <span className="education-date">Jan. 2026 — May 2030</span>
            </div>
            <p className="education-degree">Ph.D. in Theoretical Computational Chemistry</p>
            <p className="education-detail">GPA: 4.0/4.0</p>
          </div>
          <div className="education-entry">
            <div className="education-header">
              <h3>Southern Methodist University, Dallas, TX</h3>
              <span className="education-date">Aug. 2022 — Dec. 2024</span>
            </div>
            <p className="education-degree">Bachelor of Science: Computer Science — Artificial Intelligence and Machine Learning Track</p>
            <p className="education-detail">GPA: 3.87/4.0</p>
          </div>
        </div>
      </section>
    </div>
  );
}
