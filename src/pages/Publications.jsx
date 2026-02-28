import './Publications.css';

export default function Publications() {
  return (
    <div className="publications-page">
      <section className="publications-header card">
        <h1>Publications</h1>
        <p>
          You can also find my articles on my{' '}
          <a
            href="https://scholar.google.com/citations?view_op=new_profile&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar profile
          </a>
          .
        </p>
      </section>

      <section className="publications-empty card">
        <div className="empty-state">
          <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48" className="empty-icon">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
          <p className="empty-title">Publications coming soon</p>
          <p className="empty-description">
            Check back later or visit my Google Scholar for the latest updates.
          </p>
        </div>
      </section>
    </div>
  );
}
