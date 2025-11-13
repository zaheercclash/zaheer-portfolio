import React, { useState, useEffect, useRef } from "react";
import "./About.css";

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

const DesignIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 23v-4" />
  </svg>
);

const ProblemSolvingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
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

const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const LightningIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const GraduationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const skills = [
    { name: "Frontend Development", icon: <FrontendIcon /> },
    { name: "Mobile Development", icon: <MobileIcon /> },
    { name: "UI/UX Design", icon: <DesignIcon /> },
    { name: "Problem Solving", icon: <ProblemSolvingIcon /> },
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
                <div className="stat-icon">
                  <RocketIcon />
                </div>
                <div className="stat-content">
                  <h3>3+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <StarIcon />
                </div>
                <div className="stat-content">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <BriefcaseIcon />
                </div>
                <div className="stat-content">
                  <h3>5+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <LightningIcon />
                </div>
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
                  <div className="edu-icon">
                    <GraduationIcon />
                  </div>
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
