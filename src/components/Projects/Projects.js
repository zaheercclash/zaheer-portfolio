import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

// SVG Icons Components
const WebIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MobileIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const Projects = () => {
  const [isVisible, setIsVisible] = useState({});
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "Hotel Room Booking Website",
      description:
        "A full-stack hotel booking platform with real-time availability, online reservations, and admin dashboard. Built with modern technologies for seamless user experience.",
      technologies: ["Next.js", "Sanity CMS", "React", "Node.js", "MongoDB"],
      category: "Web Application",
      icon: <WebIcon />,
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
      icon: <MobileIcon />,
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
      icon: <MobileIcon />,
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
      icon: <MobileIcon />,
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
      icon: <MobileIcon />,
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
      icon: <MobileIcon />,
      features: [
        "Expense tracking",
        "Financial charts",
        "Budget planning",
        "Data export",
      ],
      status: "Completed",
    },
  ];

  useEffect(() => {
    const currentRefs = projectRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.index]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on, showcasing my skills in
          web and mobile development.
        </p>
        <div className="projects-grid-container">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index}
              className={`project-item ${
                isVisible[index] ? "project-visible" : "project-hidden"
              }`}
            >
              <div className="project-header-info">
                <div className="project-type">
                  <span className="project-type-icon">{project.icon}</span>
                  {project.category}
                </div>
                <div className="project-completion">
                  <span className="completion-dot"></span>
                  {project.status}
                </div>
              </div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-summary">{project.description}</p>

              <div className="project-highlights">
                <h4 className="highlights-heading">
                  <span className="highlights-icon">
                    <CheckIcon />
                  </span>
                  Key Features:
                </h4>
                <ul className="features-container">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-point">
                      <span className="feature-icon">
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                <h4 className="tech-heading">
                  <span className="tech-icon">
                    <CodeIcon />
                  </span>
                  Technologies:
                </h4>
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
