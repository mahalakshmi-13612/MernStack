import styles from "./About.module.css";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className={styles.aboutContainer}>
        <p>
          I am currently pursuing B.Tech in Computer Science Engineering
          at Achariya College of Engineering Technology with CGPA 8.9.
        </p>

        <h3 style={{ marginTop: "20px" }}>Technical Skills</h3>
        <div className={styles.skills}>
          <span className={styles.skill}> Java <br></br> </span>
          <span className={styles.skill}> Python<br></br> </span>
          <span className={styles.skill}> DBMS<br></br> </span>
          <span className={styles.skill}> HTML <br></br></span>
          <span className={styles.skill}> CSS <br></br></span>
          <span className={styles.skill}> React<br></br> </span>
        </div>
      </div>
    </section>
  );
}

export default About;