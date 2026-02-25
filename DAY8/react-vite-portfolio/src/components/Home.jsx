import { useState } from "react";

function Home() {
  const [show, setShow] = useState(true);

  return (
    <section id="home" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
       I'm <span style={{ color: "#38bdf8" }}>Mahalakshmi A</span>
      </h1>

      <h3 style={{ marginBottom: "20px" }}>
        B.Tech CSE Student | Aspiring Software Developer
      </h3>

      {show && (
        <p style={{ maxWidth: "600px", margin: "auto", marginBottom: "20px" }}>
          Motivated fresher passionate about building software solutions,
          exploring AI technologies, and continuously improving problem-solving skills.
        </p>
      )}

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Intro" : "Show Intro"}
      </button>
    </section>
  );
}

export default Home;