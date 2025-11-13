import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Zaheer</h3>
              <p className="footer-tagline">
                Software Engineer & Full-Stack Developer
              </p>
              <p className="footer-description">
                Crafting digital experiences with modern technologies and
                innovative solutions.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <span>🐙</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span>🐦</span>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Navigation</h4>
                <a onClick={() => scrollToSection("home")}>Home</a>
                <a onClick={() => scrollToSection("about")}>About</a>
                <a onClick={() => scrollToSection("skills")}>Skills</a>
                <a onClick={() => scrollToSection("projects")}>Projects</a>
                <a onClick={() => scrollToSection("contact")}>Contact</a>
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <a>Web Development</a>
                <a>Mobile Apps</a>
                <a>UI/UX Design</a>
                <a>Consultation</a>
              </div>

              <div className="link-group">
                <h4>Contact</h4>
                <a href="mailto:zaheercclash@gmail.com">
                  zaheercclash@gmail.com
                </a>
                <a href="tel:+94700000000">+94 70 000 0000</a>
                <a>Kandy, Sri Lanka</a>
              </div>
            </div>
          </div>

          <div className="footer-cta">
            <div className="cta-content">
              <h3>Ready to start your project?</h3>
              <p>Let's work together to bring your ideas to life</p>
            </div>
            <button
              className="cta-btn"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Zaheer. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
