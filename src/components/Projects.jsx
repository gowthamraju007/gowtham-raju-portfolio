const Projects = () => {
    const projects = [
      {
        title: "Personal Portfolio",
        desc: "Responsive portfolio website with sections for summary, experience, skills, contact, and resume download.",
        tech: "React, Vite, CSS"
      }
    ];
  
    return (
      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
  
        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} style={styles.card}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <small>{p.tech}</small>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  const styles = {
    section: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "80px 20px"
    },
    heading: {
      textAlign: "center",
      marginBottom: "40px",
      fontSize: "32px",
      color: "#0f172a"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "minmax(260px, 1fr)",
      gap: "24px",
      justifyItems: "center"
    },
    card: {
      width: "100%",
      maxWidth: "720px",
      padding: "24px",
      borderRadius: "12px",
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
    }
  };
  
  export default Projects;