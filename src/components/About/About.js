import React, { useState, useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

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

  useEffect(() => {
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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          data-section="header"
          className={`about-header ${
            isVisible.header ? "about-visible" : "about-hidden"
          }`}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <div
                ref={(el) => (sectionRefs.current[1] = el)}
                data-section="intro"
                className={`intro-card ${
                  isVisible.intro ? "about-visible" : "about-hidden"
                }`}
              >
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

              <div
                ref={(el) => (sectionRefs.current[2] = el)}
                data-section="skills"
                className={`skills-grid ${
                  isVisible.skills ? "about-visible" : "about-hidden"
                }`}
              >
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

            <div
              ref={(el) => (sectionRefs.current[3] = el)}
              data-section="stats"
              className={`about-stats ${
                isVisible.stats ? "about-visible" : "about-hidden"
              }`}
            >
              <div className="stat-card">
                <div className="stat-icon">🚀</div>
                <div className="stat-content">
                  <h3>3+</h3>
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

          <div
            ref={(el) => (sectionRefs.current[4] = el)}
            data-section="education"
            className={`education-section ${
              isVisible.education ? "about-visible" : "about-hidden"
            }`}
          >
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
