import './Project.css';

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-box">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <h2>Deepfake Detection</h2>
            <p>AI system using ResNext CNN + LSTM for detecting fake videos.</p>
          </div>
          <div className="project-card">
            <h2>Swiggy Clone</h2>
            <p>Responsive food ordering UI using HTML and CSS.</p>
          </div>
          <div className="project-card">
            <h2>Movie Catalog</h2>
            <p>Movie listing web app with descriptions and posters.</p>
          </div>
          <div className="project-card">
            <h2>Weather Forecasting</h2>
            <p>Weather display by region with clean HTML interface.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
