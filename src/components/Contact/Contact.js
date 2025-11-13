import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp as faWhatsappBrand } from "@fortawesome/free-brands-svg-icons";
import {
  faPaperPlane,
  faEnvelope,
  faUser,
  faComments,
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
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-card-header">
                <FontAwesomeIcon icon={faComments} className="info-card-icon" />
                <h3>Start Your Project</h3>
              </div>
              <p>
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Whether you need a website, mobile app, or
                have any other digital solution in mind, I'd love to hear from
                you!
              </p>

              <div className="contact-methods">
                <div className="contact-method" onClick={handleEmailClick}>
                  <div className="method-icon email-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="method-content">
                    <h4>Email Directly</h4>
                    <p>zaheercclash@gmail.com</p>
                    <span className="method-hint">Opens your email client</span>
                  </div>
                </div>

                <div className="contact-method" onClick={handleWhatsAppClick}>
                  <div className="method-icon whatsapp-icon">
                    <FontAwesomeIcon icon={faWhatsappBrand} />
                  </div>
                  <div className="method-content">
                    <h4>WhatsApp</h4>
                    <p>+94 7 758 88849</p>
                    <span className="method-hint">Quick responses</span>
                  </div>
                </div>
              </div>

              <div className="availability">
                <div className="availability-status">
                  <div className="status-dot"></div>
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <FontAwesomeIcon icon={faPaperPlane} className="form-icon" />
                <h3>Send Message</h3>
              </div>

              {isSent && (
                <div className="success-message">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="success-icon"
                  />
                  <div>
                    <strong>Message Sent!</strong>
                    <p>Thank you! I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <div className="form-group">
                <div className="input-container">
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
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
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
                </div>
              </div>

              <div className="form-group">
                <div className="input-container textarea-container">
                  <FontAwesomeIcon icon={faComments} className="input-icon" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                    <span>Send Message</span>
                    <div className="btn-hover-effect"></div>
                  </>
                )}
              </button>

              <p className="form-note">
                Prefer email? Contact me directly at{" "}
                <strong>zaheercclash@gmail.com</strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
