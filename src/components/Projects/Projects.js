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
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on, showcasing my skills in
          web and mobile development.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <div className="project-status">{project.status}</div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
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
