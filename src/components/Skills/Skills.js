import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

// SVG Icons Components
const FrontendIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
    <polyline points="7.5 19.79 7.5 14.6 3 12" />
    <polyline points="21 12 16.5 14.6 16.5 19.79" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const MobileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const ToolsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const TargetIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <FrontendIcon />,
      skills: [
        { name: "React.js", level: 90, color: "#61DAFB" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "HTML5", level: 95, color: "#E34F26" },
        { name: "CSS3", level: 90, color: "#1572B6" },
        { name: "JavaScript", level: 88, color: "#F7DF1E" },
        { name: "TypeScript", level: 75, color: "#3178C6" },
      ],
    },
    {
      category: "Mobile Development",
      icon: <MobileIcon />,
      skills: [
        { name: "Flutter", level: 85, color: "#02569B" },
        { name: "Dart", level: 80, color: "#0175C2" },
        { name: "React Native", level: 70, color: "#61DAFB" },
        { name: "Firebase", level: 75, color: "#FFCA28" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <ToolsIcon />,
      skills: [
        { name: "Git & GitHub", level: 85, color: "#F05032" },
        { name: "REST APIs", level: 80, color: "#FF6B6B" },
        { name: "Sanity CMS", level: 75, color: "#F03E2F" },
        { name: "MongoDB", level: 70, color: "#47A248" },
        { name: "Node.js", level: 75, color: "#339933" },
        { name: "Figma", level: 65, color: "#F24E1E" },
      ],
    },
  ];

  useEffect(() => {
    const currentRefs = sectionRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.section]: entry.isIntersecting,
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
    <section id="skills" className="skills">
      <div className="container">
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          data-section="header"
          className={`skills-header ${
            isVisible.header ? "skills-visible" : "skills-hidden"
          }`}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => (sectionRefs.current[categoryIndex + 1] = el)}
              data-section={`category-${categoryIndex}`}
              className={`skill-category ${
                isVisible[`category-${categoryIndex}`]
                  ? "skills-visible"
                  : "skills-hidden"
              }`}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.category}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`skill-item ${
                      isVisible[`category-${categoryIndex}`]
                        ? "skill-visible"
                        : "skill-hidden"
                    }`}
                  >
                    <div className="skill-info">
                      <div className="skill-name-wrapper">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: isVisible[`category-${categoryIndex}`]
                              ? `${skill.level}%`
                              : "0%",
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          }}
                        >
                          <div className="progress-glow"></div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="skill-badge"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.name.split(" ")[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          data-section="summary"
          className={`skills-summary ${
            isVisible.summary ? "skills-visible" : "skills-hidden"
          }`}
        >
          <div className="summary-card">
            <div className="summary-icon">
              <RocketIcon />
            </div>
            <div className="summary-content">
              <h3>Fast Development</h3>
              <p>Quick prototyping and efficient coding practices</p>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">
              <TargetIcon />
            </div>
            <div className="summary-content">
              <h3>Clean Code</h3>
              <p>Maintainable and scalable solutions</p>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">
              <ChartIcon />
            </div>
            <div className="summary-content">
              <h3>Performance</h3>
              <p>Optimized applications for best user experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
