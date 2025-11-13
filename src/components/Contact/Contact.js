import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPaperPlane,
  faEnvelope,
  faUser,
  faComments,
  faMapMarkerAlt,
  faPhone,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:zaheercclash@gmail.com?subject=Portfolio Inquiry&body=Hello Zaheer, I would like to discuss a project with you.";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/94775888849", "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        "service_44ok3bp",
        "template_o78jjkd",
        templateParams,
        "XEblNjgbar2lqU2oq"
      );

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error Details:", error);
      alert(
        `Error: ${
          error.text || "Please email me directly at zaheercclash@gmail.com"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="contact-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="contact-glow"></div>
        <div className="contact-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      <div className="container">
        <div className="contact-header">
          <div className="header-decoration">
            <div className="decoration-orb orb-1"></div>
            <div className="decoration-orb orb-2"></div>
            <div className="decoration-orb orb-3"></div>
          </div>

          <div className="title-container">
            <div className="title-wrapper">
              <span className="title-pretext">Ready to Collaborate?</span>
              <h2 className="section-titl">
                <span className="title-text">Get In Touch</span>
                <div className="title-underline">
                  <div className="underline-main"></div>
                  <div className="underline-glow"></div>
                </div>
              </h2>
              <span className="title-subtext">
                Let's create something amazing together
              </span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="card-glow"></div>
              <div className="info-card-header">
                <div className="header-icon">
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div className="header-content">
                  <h3>Start Your Project</h3>
                  <p className="card-subtitle">
                    Let's build something extraordinary
                  </p>
                </div>
              </div>

              <p>
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Whether you need a website, mobile app, or
                have any other digital solution in mind, I'd love to hear from
                you!
              </p>

              <div className="contact-methods">
                <div className="contact-method" onClick={handleEmailClick}>
                  <div className="method-glow"></div>
                  <div className="method-icon email-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="method-content">
                    <h4>Email Directly</h4>
                    <p>zaheercclash@gmail.com</p>
                    <span className="method-hint">Opens your email client</span>
                  </div>
                  <div className="method-arrow">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                </div>

                <div className="contact-method" onClick={handleWhatsAppClick}>
                  <div className="method-glow"></div>
                  <div className="method-icon whatsapp-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div className="method-content">
                    <h4>WhatsApp</h4>
                    <p>+94 7 758 88849</p>
                    <span className="method-hint">Quick responses</span>
                  </div>
                  <div className="method-arrow">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                </div>
              </div>

              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Based in</span>
                    <span className="detail-value">Kandy, Sri Lanka</span>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Call me</span>
                    <span className="detail-value">+94 77 588 8849</span>
                  </div>
                </div>
              </div>

              <div className="availability">
                <div className="availability-status">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <div className="status-pulse"></div>
                  </div>
                  <div className="status-content">
                    <span className="status-text">
                      Available for new projects
                    </span>
                    <span className="status-subtext">
                      Responds within 2 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-glow"></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <div className="form-icon-wrapper">
                  <FontAwesomeIcon icon={faPaperPlane} className="form-icon" />
                </div>
                <div className="form-title-content">
                  <h3>Send Message</h3>
                  <p className="form-subtitle">
                    Get your project started today
                  </p>
                </div>
              </div>

              {isSent && (
                <div className="success-message">
                  <div className="success-glow"></div>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="success-icon"
                  />
                  <div className="success-content">
                    <strong>Message Sent Successfully!</strong>
                    <p>
                      Thank you for your message! I'll get back to you within 2
                      hours.
                    </p>
                  </div>
                </div>
              )}

              <div className="form-group">
                <div className="input-container">
                  <div className="input-glow"></div>
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    disabled={isLoading}
                  />
                  <div className="input-focus-border"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <div className="input-glow"></div>
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading}
                  />
                  <div className="input-focus-border"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container textarea-container">
                  <div className="input-glow"></div>
                  <FontAwesomeIcon icon={faComments} className="input-icon" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows="5"
                    required
                    disabled={isLoading}
                  ></textarea>
                  <div className="input-focus-border"></div>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                <div className="btn-glow"></div>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Sending Your Message...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                    <span>Launch Project</span>
                    <div className="btn-hover-effect"></div>
                  </>
                )}
              </button>

              <div className="form-security">
                <div className="security-badge">
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="security-icon"
                  />
                  <span>Your information is secure and encrypted</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
