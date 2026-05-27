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
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger canvas confetti celebration
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#6366f1", "#8b5cf6", "#a855f7"],
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto bg-transparent">
      {/* Background ambient orbs */}
      <div className="absolute top-[60%] left-[20%] w-[300px] h-[300px] bg-indigo-500 rounded-full glow-orb animate-pulse-slow pointer-events-none opacity-5 dark:opacity-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white m-0 tracking-tight">
          Get In <span className="text-gradient-primary">Touch</span>
        </h2>
        <div className="h-1 w-16 bg-indigo-500 rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-lg">
          Have an exciting project or vacancy? Let's connect and build something awesome.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch text-left relative z-10">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-slate-855 dark:text-white m-0">
              Contact Info
            </h3>
            
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0">
              Feel free to reach out via email, phone, or fill out the form. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4 pt-1">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4.5 h-4.5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Email Me</span>
                  <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4.5 h-4.5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Call Me</span>
                  <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {portfolioData.personal.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-650 dark:text-indigo-400">
                  <MapPin className="w-4.5 h-4.5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Location</span>
                  <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-semibold">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card text-center bg-gradient-to-r from-indigo-50/30 to-violet-50/30 dark:from-indigo-950/5 dark:to-[#020204]/5 py-6">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Open to New Opportunities
            </span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-2xl glass-card h-full flex flex-col justify-center">
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
                      <label htmlFor="name" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`px-4 py-2.5 bg-slate-100/50 dark:bg-white/[0.01] border ${
                          errors.name ? "border-rose-500/50" : "border-slate-200 dark:border-white/10"
                        } focus:border-indigo-500 focus:bg-white dark:focus:bg-black/20 rounded-xl text-xs md:text-sm text-slate-800 dark:text-white placeholder-slate-400 outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-0.5 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`px-4 py-2.5 bg-slate-100/50 dark:bg-white/[0.01] border ${
                          errors.email ? "border-rose-500/50" : "border-slate-200 dark:border-white/10"
                        } focus:border-indigo-500 focus:bg-white dark:focus:bg-black/20 rounded-xl text-xs md:text-sm text-slate-800 dark:text-white placeholder-slate-400 outline-none transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-0.5 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="px-4 py-2.5 bg-slate-100/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:bg-white dark:focus:bg-black/20 rounded-xl text-xs md:text-sm text-slate-800 dark:text-white placeholder-slate-400 outline-none transition-all"
                      placeholder="Project Discussion"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`px-4 py-2.5 bg-slate-100/50 dark:bg-white/[0.01] border ${
                        errors.message ? "border-rose-500/50" : "border-slate-200 dark:border-white/10"
                      } focus:border-indigo-500 focus:bg-white dark:focus:bg-black/20 rounded-xl text-xs md:text-sm text-slate-800 dark:text-white placeholder-slate-400 outline-none transition-all resize-none`}
                      placeholder="Hi Shubham, I would love to connect..."
                    />
                    {errors.message && (
                      <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-0.5 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10 dark:shadow-none mt-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-overlay"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center"
                >
                  <span className="p-3 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 inline-block">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </span>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-800 dark:text-white m-0">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. I have received your message and will get back to you shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl transition-colors font-bold text-[10px] uppercase tracking-wider cursor-pointer"
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
