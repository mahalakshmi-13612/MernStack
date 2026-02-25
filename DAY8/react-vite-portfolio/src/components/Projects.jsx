import { useState } from "react";

function Projects() {
  const [show, setShow] = useState(false);

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Anti-Theft Floor Mat</h3>

          {show && (
            <p>
              IoT-based security system using sensors and microcontroller.
              Reduced theft by 35%.
            </p>
          )}

          <button onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="project-card">
          <h3>Java Internship Project</h3>
          <p>Developed Java applications during internship.</p>
          <button>View</button>
        </div>

        <div className="project-card">
          <h3>AI Learning Projects</h3>
          <p>Projects related to AI & IoT certifications.</p>
          <button>View</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;