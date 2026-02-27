const Navbar = () => {
    return (
      <nav style={styles.nav}>
        <h2>Gowtham Raju | Portfolio</h2>
  
        <div style={styles.links}>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#contact" style={styles.link}>Contact</a>
          <a
            href="/Gowtham%20Raju%20G_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Resume
          </a>
        </div>
      </nav>
    );
  };
  
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 16px",
      borderBottom: "1px solid #e5e7eb",
      position: "sticky",
      top: 0,
      background: "#ffffff",
      zIndex: 100,
      boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      flexWrap: "wrap",
      rowGap: "8px"
    },
    links: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      justifyContent: "flex-end"
    },
    link: {
      color: "#0f172a",
      textDecoration: "none",
      fontSize: "14px"
    }
  };
  
  export default Navbar;