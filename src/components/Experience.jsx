const Experience = () => {
  const role = "Software Development Engineer 1";
  const company = "OLA Electric Private Limited";

  const items = [
    "Transformed legacy UI pages into modern, responsive designs, increasing user engagement by 25% and reducing bounce rate by 30%.",
    "Led migration of storage from AWS to Krutrim Cloud Service (KCS) with bucket-ID–based redirection to ensure uninterrupted content and optimize costs.",
    "Improved mobile experience and responsiveness, contributing to a 40% increase in mobile user engagement.",
    "Used usability testing, Charles Proxy, and production debugging to resolve network/API/performance issues and improve task completion by 15%.",
    "Integrated Razorpay payments and used New Relic plus Razorpay dashboards to raise successful transactions by 50% and cut processing time by 20%.",
    "Developed deep link routing for the Brand Champion feature, enabling context-aware navigation and improving campaign tracking, user engagement, and conversion flows.",
    "Played a pivotal role in enhancing the overall user experience of the Ola product website, contributing to a 20% increase in customer satisfaction ratings.",
    "Implemented deep linking on the Ola Electric website to enable direct navigation to specific pages from external sources, improving user experience and engagement.",
    "Developed the Ola Shakti website end-to-end using React, including MoEngage analytics, deep linking, and payment flow integration.",
    "Implemented the DUX feature in the Ola Electric application using React, surfacing dynamic vehicle statistics and user-specific insights through interactive UI components.",
    "Built lead acquisition flows, dynamic test ride scheduling, and OCR-based document upload to streamline booking and verification journeys and increase retention.",
    "Documented UI design changes and feature integrations, providing reusable knowledge for future projects and onboarding.",
  ];

  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>

      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <h3 style={styles.role}>{role}</h3>
            <p style={styles.company}>{company}</p>
          </div>
          <div style={styles.meta}>
            <span>Bengaluru</span>
            <span>Dec 2021 – Present</span>
          </div>
        </div>

        <ul style={styles.list}>
          {items.map((item, idx) => (
            <li key={idx} style={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "32px",
    fontSize: "32px",
    color: "#0f172a",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "24px 24px 28px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
    border: "1px solid #e5e7eb",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  role: {
    fontSize: "20px",
    fontWeight: 600,
    margin: 0,
  },
  company: {
    margin: "4px 0 0",
    color: "#4b5563",
  },
  meta: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "4px",
    fontSize: "14px",
    color: "#6b7280",
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    color: "#374151",
    lineHeight: 1.6,
    fontSize: "15px",
  },
  item: {
    marginBottom: "6px",
  },
};

export default Experience;

