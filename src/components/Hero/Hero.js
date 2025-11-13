import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import profileImage from "../../assets/images/zaheer-profile.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const currentRef = heroRef.current; // Copy to variable inside effect

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
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div
            className={`hero-badge ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <span>🚀 Available for Freelance</span>
          </div>
          <h1 className={isVisible ? "hero-visible" : "hero-hidden"}>
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Zaheer</span>
          </h1>
          <h2
            className={`hero-title ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <span className="title-text">Software Engineer</span>
            <span className="title-underline"></span>
          </h2>
          <p
            className={`hero-description ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            I craft <span className="highlight-text">digital experiences</span>{" "}
            that blend beautiful design with powerful functionality.
            Specializing in modern web and mobile applications using React,
            Next.js, Flutter, and cutting-edge technologies.
          </p>
          <div
            className={`hero-buttons ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <div className="btn-hover-effect"></div>
            </a>
            <a href="#contact" className="btn btn-secondary">
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
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Exp</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
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
            <div className="floating-elements">
              <div className="floating-element element-1">🚀</div>
              <div className="floating-element element-2">💻</div>
              <div className="floating-element element-3">📱</div>
            </div>
          </div>

          <div
            className={`experience-card ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            <div className="card-icon">⭐</div>
            <div className="card-content">
              <h3>2+ Years Experience</h3>
              <p>Web & Mobile Development</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`scroll-indicator ${
          isVisible ? "hero-visible" : "hero-hidden"
        }`}
      >
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
