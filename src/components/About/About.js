import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: "💻" },
    { name: "Mobile Development", icon: "📱" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Problem Solving", icon: "🔍" },
  ];

  const education = [
    {
      institution: "Kandy eSoft",
      degree: "Software Engineering Degree",
      year: "2022-2024",
    },
    {
      institution: "Kandy BCAS Campus",
      degree: "HND in Computing",
      year: "2020-2022",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <div className="intro-card">
                <h3>My Journey</h3>
                <p>
                  I'm a passionate <strong>Software Engineer</strong> with
                  expertise in modern web and mobile technologies. My journey
                  began at Kandy BCAS Campus where I completed my HND, followed
                  by advancing my skills at Kandy eSoft for my degree.
                </p>
                <p>
                  I specialize in creating{" "}
                  <strong>responsive web applications</strong> using React.js
                  and Next.js, and{" "}
                  <strong>cross-platform mobile applications</strong> using
                  Flutter and Dart. Every project I undertake is crafted with
                  attention to detail, performance, and user experience.
                </p>
              </div>

              <div className="skills-grid">
                <h4>What I Do</h4>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon">🚀</div>
                <div className="stat-content">
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">💼</div>
                <div className="stat-content">
                  <h3>5+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-content">
                  <h3>15+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h3>Education & Background</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="edu-icon">🎓</div>
                  <div className="edu-content">
                    <h4>{edu.institution}</h4>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-year">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
