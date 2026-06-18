"use client";

import { Mail, MapPin, Palette, Monitor, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  BsBehance,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTiktok,
  BsTwitch,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

export default function HoldingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">(
    "email",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Hi, I am ${formData.name} with email ${formData.email}.%0D%0A%0D%0A${formData.message}`;
    if (contactMethod === "email") {
      window.location.href = `mailto:contact@marquingyase.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    } else {
      // WhatsApp
      const phone = "233555155455";
      const waMessage = `*PROJECT INQUIRY*\n\nHi, I'm ${formData.name}.\n${formData.message}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Social links data (matching your schema)
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/marquingyase",
      icon: BsInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/marquingyase",
      icon: BsLinkedin,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/marquingyase",
      icon: BsFacebook,
    },
    { name: "Twitter", href: "https://x.com/marquingyase_", icon: BsTwitter },
    {
      name: "YouTube",
      href: "https://youtube.com/@marquingyase",
      icon: BsYoutube,
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@marquingyase",
      icon: BsTiktok,
    },
    {
      name: "Behance",
      href: "https://behance.net/marquingyase",
      icon: BsBehance,
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/marquingyase",
      icon: BsPinterest,
    },
    { name: "Twitch", href: "https://twitch.tv/marquingyase", icon: BsTwitch },
    { name: "GitHub", href: "https://github.com/marquingyase", icon: BsGithub },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="w-full sticky top-0 z-10 border-b bg-white border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Image
            src="/logos/long-blue-logo.svg"
            alt="marquingyase logo"
            width={200}
            height={200}
            className="h-auto"
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
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pb-24">
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

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter">
              Web Development,
              <br />
              <span style={{ color: "#191bdf" }}>Graphic Design</span>
              <br />
              &amp; IT Support
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
              Helping businesses and individuals build strong digital
              experiences through modern websites, creative branding, graphic
              design, technical support and IT solutions.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 text-sm font-medium"
              >
                <Palette size={16} style={{ color: "#191bdf" }} />
                Graphic Design
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 text-sm font-medium"
              >
                <Monitor size={16} style={{ color: "#191bdf" }} />
                IT Support
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 text-sm font-medium"
              >
                <Code size={16} style={{ color: "#191bdf" }} />
                Web Development
              </a>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#191bdf" }}
              >
                Get in touch
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all"
              >
                View Work
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={16} style={{ color: "#ff00ff" }} />
              <span>Based in Accra, GHA — Available worldwide</span>
            </div>
          </div>

          {/* Right Column - Abstract Graphic Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-3xl rotate-6 opacity-90"
                style={{ backgroundColor: "#191bdf" }}
              />
              <div
                className="absolute bottom-10 left-0 w-64 h-64 rounded-full opacity-80"
                style={{ backgroundColor: "#31db06" }}
              />
              <div
                className="absolute top-20 left-10 w-16 h-16 rounded-2xl rotate-12"
                style={{ backgroundColor: "#ff00ff", opacity: 0.7 }}
              />
              <div className="absolute bottom-32 right-10 w-24 h-24 border-4 border-black rounded-full opacity-20" />
              <div className="absolute top-40 right-20 w-6 h-6 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </main>

      {/* ===== NEW SERVICES SECTION ===== */}
      <section className="py16 md:py-24 px-6 bg-gray-50" id="services">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#191bdf" }}
          >
            What I Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            Services that <span style={{ color: "#191bdf" }}>empower</span> your
            digital presence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Web Development */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all hover:-translate-y-1 group">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "#191bdf20" }}
            >
              <Code size={28} style={{ color: "#191bdf" }} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Web Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Custom websites, business websites, portfolios, landing pages,
              Next.js applications and web solutions.
            </p>
          </div>

          {/* Graphic Design */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all hover:-translate-y-1 group">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "#ff00ff20" }}
            >
              <Palette size={28} style={{ color: "#ff00ff" }} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Graphic Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Logo design, flyers, posters, social media graphics, branding and
              visual identity design.
            </p>
          </div>

          {/* IT Support */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all hover:-translate-y-1 group">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "#31db0620" }}
            >
              <Monitor size={28} style={{ color: "#31db06" }} />
            </div>
            <h3 className="text-2xl font-bold mb-3">IT Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Computer troubleshooting, software installation, maintenance and
              technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="bg-black text-white py-20 px-6" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p
                className="text-sm font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#ff00ff" }}
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
                {/* TOGGLE BUTTON - Choose contact method */}
                <div className="flex bg-gray-800/70 rounded-full p-1 border border-gray-700 w-fit">
                  <button
                    type="button"
                    onClick={() => setContactMethod("email")}
                    className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      contactMethod === "email"
                        ? "bg-[#31db06] text-black shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Mail size={16} />
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod("whatsapp")}
                    className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      contactMethod === "whatsapp"
                        ? "bg-[#31db06] text-black shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-base">
                      <BsWhatsapp />
                    </span>
                    WhatsApp
                  </button>
                </div>

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
                {contactMethod === "email" && (
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
                )}
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
                  Send via {contactMethod === "email" ? "Email" : "WhatsApp"}
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* Social Links - Updated with all platforms */}
              <div className="flex flex-wrap gap-4 pt-8">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={name}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-400 pt-4">
                <span>
                  © {new Date().getFullYear()} marquingyase. All rights
                  reserved.
                </span>
              </div>
            </div>
          </div>

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
