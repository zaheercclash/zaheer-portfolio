import React from "react";
import "./Hero.css";
import profileImage from "../../assets/images/zaheer-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Available for Freelance</span>
          </div>
          <h1>
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Zaheer</span>
          </h1>
          <h2 className="hero-title">
            <span className="title-text">Software Engineer</span>
            <span className="title-underline"></span>
          </h2>
          <p className="hero-description">
            I craft <span className="highlight-text">digital experiences</span>{" "}
            that blend beautiful design with powerful functionality.
            Specializing in modern web and mobile applications using React,
            Next.js, Flutter, and cutting-edge technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <div className="btn-hover-effect"></div>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Let's Talk</span>
              <div className="btn-hover-effect"></div>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">3</div>
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
          <div className="image-container">
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

          <div className="experience-card">
            <div className="card-icon">⭐</div>
            <div className="card-content">
              <h3>2+ Years Experience</h3>
              <p>Web & Mobile Development</p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
