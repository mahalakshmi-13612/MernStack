import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2>Contact Me</h2>

      <p>Email: mahalack3@gmail.com</p>
      <p>Phone: 9894269757</p>

      <button onClick={() => setMessage("Thank you! I will contact you soon.")}>
        Hire Me
      </button>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </section>
  );
}

export default Contact;