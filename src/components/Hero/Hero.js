import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import profileImage from "../../assets/images/zaheer-profile.jpeg";

// SVG Icons Components
const RocketIcon = () => (
  <svg
    width="20"
    height="20"
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

const CodeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
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

const WorkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const currentRef = heroRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="hero-glow"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div
            className={`hero-badge ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <span className="badge-icon">
              <RocketIcon />
            </span>
            <span>Available for Freelance Projects</span>
          </div>

          <h1 className={isVisible ? "hero-visible" : "hero-hidden"}>
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Zaheer</span>
          </h1>

          <h2
            className={`hero-title ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <span className="title-text-hero">Software Engineer</span>
            <span className="title-underline-hero"></span>
          </h2>

          <p
            className={`hero-description ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            I craft <span className="highlight-text">digital experiences</span>{" "}
            that blend beautiful design with powerful functionality.
            Specializing in modern web and mobile applications using{" "}
            <span className="tech-text">React</span>,{" "}
            <span className="tech-text">Next.js</span>,{" "}
            <span className="tech-text">Flutter</span>, and cutting-edge
            technologies.
          </p>

          <div
            className={`hero-buttons ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <a href="#projects" className="btn btn-primary">
              <span className="btn-icon">
                <WorkIcon />
              </span>
              <span>View My Work</span>
              <div className="btn-hover-effect"></div>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-icon">
                <CalendarIcon />
              </span>
              <span>Let's Talk</span>
              <div className="btn-hover-effect"></div>
            </a>
          </div>

          <div
            className={`hero-stats ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <div className="stat">
              <div className="stat-icon">
                <WorkIcon />
              </div>
              <div className="stat-content">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <CalendarIcon />
              </div>
              <div className="stat-content">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Exp</div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <HeartIcon />
              </div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div
            className={`image-container ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <img
              src={profileImage}
              alt="Zaheer - Software Engineer"
              className="profile-image"
            />
            <div className="image-frame"></div>
            <div className="image-glow"></div>
            <div className="floating-elements">
              <div className="floating-element element-1">
                <CodeIcon />
              </div>
              <div className="floating-element element-2">
                <MobileIcon />
              </div>
              <div className="floating-element element-3">
                <RocketIcon />
              </div>
            </div>
          </div>

          <div
            className={`experience-card ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <div className="card-icon">
              <StarIcon />
            </div>
            <div className="card-content">
              <h3>2+ Years Experience</h3>
              <p>Web & Mobile Development</p>
            </div>
            <div className="card-sparkle"></div>
          </div>
        </div>
      </div>

      <div
        className={`scroll-indicator ${
          isVisible ? "hero-visible" : "hero-hidden"
        }`}
      >
        <div className="scroll-line"></div>
        <span>Scroll to Explore</span>
        <div className="scroll-arrow">
          <ArrowDownIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;
