import { useState } from "react";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { Code, X, Zap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export const Contact: React.FC = () => {
  const { email } = usePortfolioStore((state) => state.data.main);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [emailName, setEmailName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const recipient = email;
    const subject = emailName + emailAddress;
    const body = emailMessage;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  const getStatusMessage = () => {
    switch (status) {
      case "sending":
        return (
          <p className="text-yellow-500 font-semibold flex items-center justify-center">
            <Zap className="w-5 h-5 mr-2 animate-pulse" /> Sending...
          </p>
        );
      case "success":
        return (
          <p className="text-green-500 font-semibold flex items-center justify-center">
            <Code className="w-5 h-5 mr-2" /> Message Sent Successfully!
          </p>
        );
      case "error":
        return (
          <p className="text-red-500 font-semibold flex items-center justify-center">
            <X className="w-5 h-5 mr-2" /> Failed to send message. Please try
            again later.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" id="contact-title" />
        <p className="text-center text-lg mb-8 text-gray-300">
          I'm currently open to new opportunities. <br />
          Feel free to reach out directly at{" "}
          <a
            href={`mailto:${email}`}
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            {email}
          </a>{" "}
          or use the form below!
        </p>
        <div className="p-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="block w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
                placeholder="Your Name"
                onChange={(e) => {
                  setEmailName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="block w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
                placeholder="Your Email"
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="block w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
                placeholder="Your Message"
                onChange={(e) => {
                  setEmailMessage(e.target.value);
                }}
              ></textarea>
            </div>
            {getStatusMessage()}
            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-lg ${
                  status === "sending"
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/50"
                }`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
