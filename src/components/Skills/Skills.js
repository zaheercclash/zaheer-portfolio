import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
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
      icon: "📱",
      skills: [
        { name: "Flutter", level: 85, color: "#02569B" },
        { name: "Dart", level: 80, color: "#0175C2" },
        { name: "React Native", level: 70, color: "#61DAFB" },
        { name: "Firebase", level: 75, color: "#FFCA28" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
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
    const currentRefs = sectionRefs.current; // Copy to variable inside effect

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
            <div className="summary-icon">🚀</div>
            <div className="summary-content">
              <h3>Fast Development</h3>
              <p>Quick prototyping and efficient coding practices</p>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <div className="summary-content">
              <h3>Clean Code</h3>
              <p>Maintainable and scalable solutions</p>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📈</div>
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
