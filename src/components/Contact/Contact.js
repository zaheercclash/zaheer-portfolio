import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
              <h3>Let's Start a Project</h3>
              <p>
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Whether you need a website, mobile app, or
                have any other digital solution in mind, I'd love to hear from
                you!
              </p>

              <div className="contact-methods">
                <div className="contact-method" onClick={handleEmailClick}>
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h4>Email Me Directly</h4>
                    <p>zaheercclash@gmail.com</p>
                    <span className="method-hint">
                      Click to open your email client
                    </span>
                  </div>
                </div>

                <div className="contact-method" onClick={handleWhatsAppClick}>
                  <div className="method-icon whatsapp-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
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
              <h3>Send me a message</h3>

              {isSent && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully. I'll
                  get back to you soon!
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
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

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
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

              <button
                type="submit"
                className={`submit-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <div className="btn-hover-effect"></div>
                  </>
                )}
              </button>

              <p className="form-note">
                Or email me directly at <strong>zaheercclash@gmail.com</strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
