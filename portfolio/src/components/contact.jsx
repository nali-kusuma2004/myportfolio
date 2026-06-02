import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dpi2hcy",
        "template_orzobr6",
        form.current,
        "CLKjuZ1WZ9MLKHmsP"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-page">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        Have a question, project idea, or internship opportunity?  
        Feel free to send me a message.
      </p>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:nalikusuma2004@gmail.com">
              nalikusuma2004@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919398732719">
              +91 93987 32719
            </a>
          </p>

          <p>
            <strong>Location:</strong> Nellore, Andhra Pradesh
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nali-kusuma2004/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
