import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Room Booking Website",
      description:
        "A full-stack hotel booking platform with real-time availability, online reservations, and admin dashboard. Built with modern technologies for seamless user experience.",
      technologies: ["Next.js", "Sanity CMS", "React", "Node.js", "MongoDB"],
      category: "Web Application",
      features: [
        "Real-time booking",
        "Admin dashboard",
        "Payment integration",
        "Responsive design",
      ],
      status: "Completed",
    },
    {
      title: "Room Split Mobile App",
      description:
        "A Flutter-based mobile application for roommates to split expenses, manage bills, and track shared payments with intuitive UI and real-time updates.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider"],
      category: "Mobile Application",
      features: [
        "Expense splitting",
        "Bill tracking",
        "Real-time sync",
        "Cross-platform",
      ],
      status: "Completed",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Feature-rich e-commerce application with product catalog, shopping cart, user authentication, and order management system.",
      technologies: ["Flutter", "Dart", "REST API", "SQLite"],
      category: "Mobile Application",
      features: [
        "Product catalog",
        "Shopping cart",
        "User auth",
        "Order tracking",
      ],
      status: "Completed",
    },
    {
      title: "Task Management App",
      description:
        "Productivity application for task management with drag-drop functionality, reminders, and team collaboration features.",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
      category: "Mobile Application",
      features: [
        "Drag & drop",
        "Team collaboration",
        "Push notifications",
        "Cloud sync",
      ],
      status: "Completed",
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with location-based forecasts, detailed weather data, and customizable themes.",
      technologies: ["Flutter", "Dart", "Weather API", "Geolocation"],
      category: "Mobile Application",
      features: [
        "Location-based",
        "7-day forecast",
        "Beautiful UI",
        "Offline support",
      ],
      status: "Completed",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Mobile application for tracking personal expenses, income, and financial goals with charts and spending insights.",
      technologies: ["Flutter", "Dart", "Charts", "Local Storage"],
      category: "Mobile Application",
      features: [
        "Expense tracking",
        "Financial charts",
        "Budget planning",
        "Data export",
      ],
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-main-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of the projects I've worked on, showcasing my skills in
          web and mobile development.
        </p>
        <div className="projects-grid-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header-info">
                <div className="project-type">{project.category}</div>
                <div className="project-completion">{project.status}</div>
              </div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-summary">{project.description}</p>

              <div className="project-highlights">
                <h4 className="highlights-heading">Key Features:</h4>
                <ul className="features-container">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-point">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                <h4 className="tech-heading">Technologies:</h4>
                <div className="tech-container">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
