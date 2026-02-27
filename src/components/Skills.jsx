const Skills = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "SCSS",
    "Redux",
    "Context API",
    "Node.js",
    "REST APIs",
    "Performance Optimization",
    "Responsive Design",
    "Git",
    "GitHub",
    "Jira",
    "Confluence",
    "Docker",
    "AWS",
    "KCS (Krutrim Cloud Service)",
    "Jenkins",
    "Material UI"
  ];
  
    return (
      <section id="skills" style={styles.section}>
        <h2 style={styles.heading}>Skills</h2>
  
        <div style={styles.list}>
          {skills.map((s, i) => (
            <span key={i} style={styles.tag}>{s}</span>
          ))}
        </div>
      </section>
    );
  };
  
  const styles = {
    section: {
      padding: "80px 20px",
      maxWidth: "1100px",
      margin: "0 auto"
    },
    heading: {
      textAlign: "center",
      marginBottom: "40px",
      fontSize: "32px",
      color: "#0f172a"
    },
    list: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      justifyContent: "center"
    },
    tag: {
      padding: "10px 18px",
      borderRadius: "999px",
      background: "#eef2ff",
      border: "1px solid #e5e7eb",
      color: "#1e293b",
      fontSize: "14px",
      boxShadow: "0 6px 18px rgba(15,23,42,0.06)"
    }
  };
  
  export default Skills;