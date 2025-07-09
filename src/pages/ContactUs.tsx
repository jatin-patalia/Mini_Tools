import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const initialInput = {
  name: "",
  email: "",
  message: "",
};
const ContactUs = () => {
  const [input, setInput] = useState(initialInput);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInput(initialInput);
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We'd love to hear from you! Whether it's feedback, feature requests,
          or collaboration ideas — reach out through the form below or connect
          with us on social media.
        </p>

        {/* Contact Form (non-functional placeholder) */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid grid-cols-1 gap-4 mb-8"
        >
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Your Name"
            className="p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            name="email"
            value={input.email}
            placeholder="Your Email"
            className="p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            onChange={(e) => handleChange(e)}
          />
          <textarea
            name="message"
            value={input.message}
            placeholder="Your Message"
            rows={5}
            className="p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Connect With Us
          </h2>
          <div className="flex gap-6 text-gray-700 dark:text-gray-300 text-lg">
            <a
              href="mailto:jatin@example.com"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://github.com/jatinpatalia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
