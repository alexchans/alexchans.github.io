import './Experience.css';

const experiences = [
  {
    title: 'Graduate Research Assistant',
    org: 'Southern Methodist University, Dallas, TX',
    date: 'Jan. 2026 — Current',
    description:
      "Developer and maintainer of SMU's Passer server, a platform for protein allostery prediction. My research focuses on geometric GNNs and diffusion models for protein modeling, including allostery prediction and protein trajectory generation.",
  },
  {
    title: 'Graduate Teaching Assistant',
    org: 'Southern Methodist University, Dallas, TX',
    date: 'Jan. 2025 — May 2025',
    description:
      "Head TA for CS1341 (Programming Fundamental I), the first required course in SMU's CS path. Helps students via lab sessions, office hours, and email.",
  },
  {
    title: 'Summer Research Intensive',
    org: 'Southern Methodist University, Dallas, TX',
    date: 'May 2024 — Aug. 2024',
    description:
      'Write and use Python class for various lab instruments (i.e. spectrum analyzer) to perform QA test on VTRX+ transceivers for the ATLAS experiment at CERN in SMU\'s Physics Electro-Opto lab.',
  },
  {
    title: 'Undergrad Teaching Assistant',
    org: 'Southern Methodist University, Dallas, TX',
    date: 'Aug. 2023 — May 2024',
    description:
      "TA for Discrete Computation Structures. Graded student's HW/Exams and provided help for students via office hours and email.",
  },
];

export default function Experience() {
  return (
    <div className="experience-page">
      <section className="experience-header card">
        <h1>Experience</h1>
      </section>

      {experiences.map((exp, i) => (
        <section
          key={i}
          className="experience-item card"
          style={{ animationDelay: `${0.1 + i * 0.08}s` }}
        >
          <div className="exp-top">
            <h3 className="exp-title">{exp.title}</h3>
            <span className="exp-date">{exp.date}</span>
          </div>
          <p className="exp-org">{exp.org}</p>
          <p className="exp-desc">{exp.description}</p>
        </section>
      ))}
    </div>
  );
}
