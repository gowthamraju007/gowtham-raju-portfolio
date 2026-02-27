import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <section style={styles.hero}>
        <div style={styles.left}>
          <h1 style={styles.title}>Hi, I’m Gowtham 👋</h1>

          <p style={styles.subtitle}>
          React JS Developer with 4+ years of experience building scalable, high-performance web applications with strong emphasis on user experience, reliability, and conversion optimization. Proven expertise in end-to-end feature development, cloud migration support, analytics instrumentation, deep linking, and payment gateway integrations. Adept at debugging production issues, optimizing frontend architecture, and delivering measurable business impact in fast-paced product environments.
          </p>

          <div style={styles.actions}>
            <a href="#projects" style={styles.primaryBtn}>View Projects</a>
            <a
              href="/Gowtham%20Raju%20G_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.secondaryBtn}
            >
              Resume
            </a>
          </div>
        </div>

        <div style={styles.right}>
          <img
            src="/gowtham_raju_profile_phott.jpeg"
            alt="Gowtham Raju G"
            style={styles.avatar}
          />
        </div>
      </section>
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 16px"
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "48px",
    minHeight: "70vh",
    flexWrap: "wrap"
  },
  left: {
    flex: 1,
    minWidth: "260px",
    textAlign: "left"
  },
  right: {
    flex: 1,
    minWidth: "260px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: "220px",
    height: "220px",
    borderRadius: "999px",
    objectFit: "cover",
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.5)",
    border: "4px solid #e5e7eb"
  },
  title: {
    fontSize: "40px",
    fontWeight: 700,
    marginBottom: "16px"
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: 1.6,
    maxWidth: "520px",
    marginBottom: "24px",
    color: "#4b5563"
  },
  actions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  },
  primaryBtn: {
    padding: "10px 20px",
    borderRadius: "999px",
    border: "none",
    background: "#4f46e5",
    color: "#ffffff",
    fontWeight: 600,
    cursor: "pointer"
  },
  secondaryBtn: {
    padding: "10px 20px",
    borderRadius: "999px",
    border: "1px solid #cbd5f5",
    background: "transparent",
    color: "#1e293b",
    fontWeight: 500,
    cursor: "pointer"
  }
};

export default Home;
