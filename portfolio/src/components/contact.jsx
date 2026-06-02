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
    <section className="min-h-screen bg-[#020617] px-5 py-[70px] text-white md:px-[10%]">
      <h2 className="mb-[10px] text-center text-[34px]">Contact Me</h2>

      <p className="mx-auto mb-[45px] max-w-[650px] text-center text-[15px] text-[#cbd5f5]">
        Have a question, project idea, or internship opportunity?  
        Feel free to send me a message.
      </p>

      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 md:grid-cols-2">

        {/* Contact Info */}
        <div className="rounded-[20px] bg-[#0f172a] p-[30px]">
          <h3 className="mb-5 text-[#38bdf8]">Get in Touch</h3>

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

          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/in/kusuma-nali-60133b292/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#334155] px-[14px] py-2 text-[14px] text-white no-underline transition hover:bg-[#38bdf8] hover:text-[#020617]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nali-kusuma2004/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#334155] px-[14px] py-2 text-[14px] text-white no-underline transition hover:bg-[#38bdf8] hover:text-[#020617]"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} className="flex flex-col gap-[14px] rounded-[20px] bg-[#0f172a] p-[30px]" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required className="rounded-lg border-none p-3 text-[14px] text-black outline-none" />
          <input type="email" name="user_email" placeholder="Your Email" required className="rounded-lg border-none p-3 text-[14px] text-black outline-none" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="rounded-lg border-none p-3 text-[14px] text-black outline-none"
          ></textarea>

          <button type="submit" className="mt-[10px] cursor-pointer rounded-[10px] bg-[#38bdf8] p-3 text-[15px] text-[#020617] transition hover:bg-[#0ea5e9]">Send Message</button>
        </form>

      </div>
    </section>
  );
}
