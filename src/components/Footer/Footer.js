import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faChevronRight,
  faCode,
  faMobileAlt,
  faPalette,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
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
    console.log(`Service clicked: ${service}`);
    scrollToSection("contact");
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:zaheercclash@gmail.com?subject=Portfolio Inquiry&body=Hello Zaheer, I would like to discuss a project with you.";
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-header">
                <h3>Zaheer</h3>
                <div className="brand-underline"></div>
              </div>
              <p className="footer-tagline">
                Software Engineer & Full-Stack Developer
              </p>
              <p className="footer-description">
                Crafting digital experiences with modern technologies and
                innovative solutions that drive business success.
              </p>
              <div className="footer-social">
                <a
                  href="https://linkedin.com/in/ZaheerNaim"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span className="social-tooltip">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/zaheercclash"
                  className="social-link"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="social-tooltip">GitHub</span>
                </a>
                <a
                  href="https://twitter.com/zaheernaim"
                  className="social-link"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  <span className="social-tooltip">Twitter</span>
                </a>
                <a
                  href="https://wa.me/94775888849"
                  className="social-link"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span className="social-tooltip">WhatsApp</span>
                </a>
                <button
                  className="social-link"
                  aria-label="Email"
                  onClick={handleEmailClick}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="social-tooltip">Email</span>
                </button>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <div className="link-group-header">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="group-icon"
                  />
                  <h4>Navigation</h4>
                </div>
                <button onClick={() => scrollToSection("home")}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="link-icon"
                  />
                  Home
                </button>
                <button onClick={() => scrollToSection("about")}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="link-icon"
                  />
                  About
                </button>
                <button onClick={() => scrollToSection("skills")}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="link-icon"
                  />
                  Skills
                </button>
                <button onClick={() => scrollToSection("projects")}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="link-icon"
                  />
                  Projects
                </button>
                <button onClick={() => scrollToSection("contact")}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="link-icon"
                  />
                  Contact
                </button>
              </div>

              <div className="link-group">
                <div className="link-group-header">
                  <FontAwesomeIcon icon={faCode} className="group-icon" />
                  <h4>Services</h4>
                </div>
                <button onClick={() => handleServiceClick("Web Development")}>
                  <FontAwesomeIcon icon={faCode} className="link-icon" />
                  Web Development
                </button>
                <button onClick={() => handleServiceClick("Mobile Apps")}>
                  <FontAwesomeIcon icon={faMobileAlt} className="link-icon" />
                  Mobile Apps
                </button>
                <button onClick={() => handleServiceClick("UI/UX Design")}>
                  <FontAwesomeIcon icon={faPalette} className="link-icon" />
                  UI/UX Design
                </button>
                <button onClick={() => handleServiceClick("Consultation")}>
                  <FontAwesomeIcon icon={faComments} className="link-icon" />
                  Consultation
                </button>
              </div>

              <div className="link-group">
                <div className="link-group-header">
                  <FontAwesomeIcon icon={faPaperPlane} className="group-icon" />
                  <h4>Contact</h4>
                </div>
                <a
                  href="mailto:zaheercclash@gmail.com"
                  className="contact-link"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <div>
                    <span>zaheercclash@gmail.com</span>
                    <small>Email me directly</small>
                  </div>
                </a>
                <a href="tel:+94775888849" className="contact-link">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <div>
                    <span>+94 7 758 88849</span>
                    <small>Call or WhatsApp</small>
                  </div>
                </a>
                <div className="contact-link">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="contact-icon"
                  />
                  <div>
                    <span>Kandy, Sri Lanka</span>
                    <small>Based in Sri Lanka</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-cta">
            <div className="cta-content">
              <FontAwesomeIcon icon={faPaperPlane} className="cta-icon" />
              <div>
                <h3>Ready to start your project?</h3>
                <p>
                  Let's work together to bring your ideas to life with
                  cutting-edge solutions
                </p>
              </div>
            </div>
            <button
              className="cta-btn"
              onClick={() => scrollToSection("contact")}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
              Get In Touch
              <div className="btn-hover-effect"></div>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Zaheer. All rights reserved.</p>
            <div className="copyright-decoration"></div>
          </div>
          <div className="footer-legal">
            <button onClick={() => console.log("Privacy Policy")}>
              Privacy Policy
            </button>
            <span className="legal-separator">•</span>
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
