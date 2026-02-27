const Contact = () => {
    return (
      <section id="contact" style={styles.section}>
        <h2 style={styles.heading}>Contact</h2>
  
        <p style={styles.text}>
          Interested in working together or have a role for me?
        </p>
  
        <div style={styles.links}>
          <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gowthamraju35@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    Email Me
                </a>
  
          <a href="https://www.linkedin.com/in/gowtham-raju-23bb34192/" target="_blank" style={styles.link}>
            LinkedIn
          </a>
  
          <a href="https://github.com/gowthamraju007" target="_blank" style={styles.link}>
            GitHub
          </a>
        </div>
      </section>
    );
  };
  
  const styles = {
    section: {
      padding: "80px 20px 100px",
      textAlign: "center",
      maxWidth: "1100px",
      margin: "0 auto"
    },
    heading: {
      fontSize: "32px",
      marginBottom: "20px",
      color: "#0f172a"
    },
    text: {
      marginBottom: "30px",
      color: "#4b5563"
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      flexWrap: "wrap"
    },
    link: {
      padding: "10px 20px",
      borderRadius: "999px",
      border: "1px solid #cbd5f5",
      textDecoration: "none",
      color: "#1e293b",
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(15,23,42,0.06)"
    }
  };
  
  export default Contact;
