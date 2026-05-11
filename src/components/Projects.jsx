const Projects = () => {
    const projects = [
      {
      title: "Task Dashboard",
      desc: "A comprehensive task management dashboard for organizing and tracking tasks efficiently. Features include task creation, editing, deletion, and status tracking. Live demo: https://task-dashboard-ten-iota.vercel.app/ | GitHub: https://github.com/gowthamraju007/Task-dashboard",
      tech: "React, JavaScript, CSS"
    },
    {
      title: "E-Commerce Rating App",
      desc: "An e-commerce application with product rating and review functionality. Allows users to browse products, leave ratings, and read reviews. Live demo: https://e-commerce-rating-app.vercel.app/ | GitHub: https://github.com/gowthamraju007/E-Commerce-rating-app",
      tech: "React, JavaScript, CSS"
    },
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