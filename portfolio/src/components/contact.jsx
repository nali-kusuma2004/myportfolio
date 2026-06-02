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
    <section className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-16">
      <h2 className="mb-3 text-center text-4xl font-bold">Contact Me</h2>

      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-300">
        Have a question, project idea, or internship opportunity?  
        Feel free to send me a message.
      </p>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

        {/* Contact Info */}
        <div className="rounded-2xl bg-slate-900 p-7">
          <h3 className="mb-5 text-2xl font-semibold text-sky-400">Get in Touch</h3>

          <p className="mb-3 text-sm">
            <strong>Email:</strong>{" "}
            <a href="mailto:nalikusuma2004@gmail.com">
              nalikusuma2004@gmail.com
            </a>
          </p>

          <p className="mb-3 text-sm">
            <strong>Phone:</strong>{" "}
            <a href="tel:+919398732719">
              +91 93987 32719
            </a>
          </p>

          <p className="mb-3 text-sm">
            <strong>Location:</strong> Nellore, Andhra Pradesh
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-700 px-4 py-2 text-sm text-white transition hover:bg-sky-400 hover:text-slate-950"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nali-kusuma2004/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-700 px-4 py-2 text-sm text-white transition hover:bg-sky-400 hover:text-slate-950"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} className="flex flex-col gap-4 rounded-2xl bg-slate-900 p-7" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required className="rounded-lg border-none bg-white px-3 py-3 text-sm text-slate-900 outline-none" />
          <input type="email" name="user_email" placeholder="Your Email" required className="rounded-lg border-none bg-white px-3 py-3 text-sm text-slate-900 outline-none" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="rounded-lg border-none bg-white px-3 py-3 text-sm text-slate-900 outline-none"
          ></textarea>

          <button type="submit" className="mt-2 rounded-lg bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Send Message</button>
        </form>

      </div>
    </section>
  );
}
