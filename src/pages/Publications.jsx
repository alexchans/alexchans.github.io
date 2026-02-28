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

      <section className="publication-item card">
        <h3 className="pub-title">
          <a
            href="https://pubs.acs.org/doi/abs/10.1021/acs.jctc.5c01579"
            target="_blank"
            rel="noopener noreferrer"
          >
            Efficient Sampling of Short Protein Trajectories with Conditional Diffusion Models
          </a>
        </h3>
        <p className="pub-authors">
          Chuanye Xiong, Dongyang Chen, et al.
        </p>
        <p className="pub-venue">
          <em>Journal of Chemical Theory and Computation</em> · January 2, 2026
        </p>
      </section>
    </div>
  );
}
