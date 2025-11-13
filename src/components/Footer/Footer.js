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

  const handleServiceClick = (service) => {
    // You can add functionality here later
    console.log(`Service clicked: ${service}`);
    // Or scroll to contact section for service inquiries
    scrollToSection("contact");
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
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💼</span>
                </a>
                <a
                  href="https://github.com/yourusername"
                  className="social-link"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>🐙</span>
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  className="social-link"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>🐦</span>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Navigation</h4>
                <button onClick={() => scrollToSection("home")}>Home</button>
                <button onClick={() => scrollToSection("about")}>About</button>
                <button onClick={() => scrollToSection("skills")}>
                  Skills
                </button>
                <button onClick={() => scrollToSection("projects")}>
                  Projects
                </button>
                <button onClick={() => scrollToSection("contact")}>
                  Contact
                </button>
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <button onClick={() => handleServiceClick("Web Development")}>
                  Web Development
                </button>
                <button onClick={() => handleServiceClick("Mobile Apps")}>
                  Mobile Apps
                </button>
                <button onClick={() => handleServiceClick("UI/UX Design")}>
                  UI/UX Design
                </button>
                <button onClick={() => handleServiceClick("Consultation")}>
                  Consultation
                </button>
              </div>

              <div className="link-group">
                <h4>Contact</h4>
                <a href="mailto:zaheercclash@gmail.com">
                  zaheercclash@gmail.com
                </a>
                <a href="tel:+94700000000">+94 70 000 0000</a>
                <span className="location">Kandy, Sri Lanka</span>
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
            <button onClick={() => console.log("Privacy Policy")}>
              Privacy Policy
            </button>
            <button onClick={() => console.log("Terms of Service")}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
