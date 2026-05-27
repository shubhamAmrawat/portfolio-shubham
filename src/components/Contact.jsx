import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field once user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger canvas confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#06b6d4", "#10b981"],
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background ambient orbs */}
      <div className="absolute top-[60%] left-[20%] w-[300px] h-[300px] bg-indigo-500 rounded-full glow-orb animate-pulse-slow pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white m-0">
          Get In <span className="text-gradient-primary">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-lg">
          Have an exciting project or vacancy? Let's connect and build something awesome.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch text-left relative z-10">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-6">
            <h3 className="text-xl font-bold text-white m-0">
              Contact Info
            </h3>
            
            <p className="text-sm text-slate-400 leading-relaxed m-0">
              Feel free to reach out via email, phone, or fill out the form. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <span className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Me</span>
                  <span className="text-sm md:text-base text-slate-300 font-medium group-hover:text-indigo-300 transition-colors">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <span className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Call Me</span>
                  <span className="text-sm md:text-base text-slate-300 font-medium group-hover:text-indigo-300 transition-colors">
                    {portfolioData.personal.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</span>
                  <span className="text-sm md:text-base text-slate-300 font-medium">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/5 text-center bg-gradient-to-r from-indigo-950/20 to-cyan-950/20 py-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Availability</h4>
            <span className="text-lg font-bold text-emerald-400 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              Open to New Opportunities
            </span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-2xl glass-card border border-white/5 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`px-4 py-3 bg-[#07080d] border ${
                          errors.name ? "border-rose-500/50" : "border-white/10"
                        } focus:border-indigo-500 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-xs text-rose-500 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`px-4 py-3 bg-[#07080d] border ${
                          errors.email ? "border-rose-500/50" : "border-white/10"
                        } focus:border-indigo-500 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-500 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-[#07080d] border border-white/10 focus:border-indigo-500 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      placeholder="Project Discussion"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`px-4 py-3 bg-[#07080d] border ${
                        errors.message ? "border-rose-500/50" : "border-white/10"
                      } focus:border-indigo-500 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none`}
                      placeholder="Hi Shubham, I would love to connect..."
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-950 mt-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-overlay"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 space-y-6 flex flex-col items-center"
                >
                  <span className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 inline-block">
                    <CheckCircle className="w-12 h-12 animate-bounce" />
                  </span>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white m-0">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm max-w-sm leading-relaxed mx-auto">
                      Thank you for reaching out. I have received your message and will get back to you shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-colors font-semibold text-xs uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
