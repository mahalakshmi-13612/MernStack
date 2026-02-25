import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>YouTube APP</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/add" style={styles.link}>Add Channel</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#111",
    color: "white"
  },
  link: {
    marginLeft: "15px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;