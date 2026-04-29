"use client";

import { Mail, MapPin, Palette, Monitor, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HoldingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:contact@marquingyase.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  };
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Image
            src="/logos/long-blue-logo.svg"
            alt="marquingyase logo"
            width={200}
            height={200}
          />
          <a
            href="mailto:contact@marquingyase.com"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <Mail size={16} />
            <span>contact@marquingyase.com</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "#31db06", color: "black" }}
              >
                Coming Soon
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tight">
              Creative
              <br />
              <span style={{ color: "#191bdf" }}>Camp</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              Graphic design, IT support, and modern web development — crafted
              with precision and a sharp eye for detail.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 text-sm font-medium">
                <Palette size={16} style={{ color: "#191bdf" }} />
                Graphic Design
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 text-sm font-medium">
                <Monitor size={16} style={{ color: "#191bdf" }} />
                IT Support
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 text-sm font-medium">
                <Code size={16} style={{ color: "#191bdf" }} />
                Web Development
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#191bdf" }}
              >
                Get in touch
                <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all"
              >
                View Work
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500 pt-4">
              <MapPin size={16} style={{ color: "#ff00ff" }} />
              <span>Based in Accra, GHA — Available worldwide</span>
            </div>
          </div>

          {/* Right Column - Abstract Graphic Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main shape using primary color */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-3xl rotate-6 opacity-90"
                style={{ backgroundColor: "#191bdf" }}
              />
              {/* Overlapping shape with tertiary */}
              <div
                className="absolute bottom-10 left-0 w-64 h-64 rounded-full opacity-80"
                style={{ backgroundColor: "#31db06" }}
              />
              {/* Small accent with quaternary */}
              <div
                className="absolute top-20 left-10 w-16 h-16 rounded-2xl rotate-12"
                style={{ backgroundColor: "#ff00ff", opacity: 0.7 }}
              />
              {/* Secondary accent */}
              <div className="absolute bottom-32 right-10 w-24 h-24 border-4 border-black rounded-full opacity-20" />
              {/* Small black circle */}
              <div className="absolute top-40 right-20 w-6 h-6 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Contact Section */}
      <footer className="bg-black text-white py-20 px-6" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div className="space-y-6">
              <p
                className="text-sm font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#31db06" }}
              >
                Let&apos;s collaborate
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to start
                <br />
                your next project?
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                Whether you need a brand identity, technical support, or a
                custom website — I&apos;m here to help.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "#31db06" }}
                />
                <span className="text-sm text-gray-300">
                  Available for new projects
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#31db06", color: "black" }}
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="flex gap-6 pt-8 text-sm text-gray-400">
                <span>
                  © {new Date().getFullYear()} marquingyase. All rights
                  reserved.
                </span>
                <a
                  href="https://www.instagram.com/marquingyase/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/marquingyase/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Small quaternary accent on dark background */}
          <div className="mt-16 flex justify-end">
            <div
              className="w-12 h-1 rounded-full"
              style={{ backgroundColor: "#ff00ff", opacity: 0.6 }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
