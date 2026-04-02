"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const interestOptions = [
  "Physical Security",
  "Cybersecurity",
  "Commercial Cleaning",
  "Residential Cleaning",
  "Post-Construction Cleanup",
  "Multiple Services",
  "General Inquiry",
];

export default function TalkPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    interest: "",
    message: "",
    preferredTime: "",
    howHeard: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Meeting Request",
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle2 className="w-16 h-16 text-gold-dark mx-auto mb-6" />
          <h1 className="font-serif text-3xl font-semibold text-[#111] mb-3">
            Meeting Request Sent!
          </h1>
          <p className="text-[#555] leading-relaxed mb-6">
            Thank you for reaching out. We&#39;ll get back to you within 1 business day
            to schedule a time that works for you.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-dark hover:bg-gold text-white font-medium text-sm tracking-wide transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="bg-background border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Hayne Industries" width={40} height={40} className="opacity-90" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
              Hayne Industries
            </span>
          </a>
          <a
            href="/"
            className="flex items-center gap-1.5 text-xs text-foreground-muted hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111] mb-2">
            Let&#39;s <span className="text-gold-dark">Talk</span>
          </h1>
          <p className="text-[#555] text-sm leading-relaxed mb-8">
            Interested in learning more? Tell us a bit about yourself and we&#39;ll
            schedule a meeting to discuss how we can help.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#333] mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#333] mb-1.5">
                Your Title / Role
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
                placeholder="Facility Manager, Procurement Officer, etc."
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#333] mb-1.5">
                What Are You Interested In? *
              </label>
              <select
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
              >
                <option value="">Select an area</option>
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#333] mb-1.5">
                Message / Questions
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors resize-none"
                placeholder="Anything you'd like us to know before the meeting..."
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#333] mb-1.5">
                Preferred Meeting Time
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
              >
                <option value="">Select preferred time</option>
                <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
                <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
                <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
                <option value="Flexible">Flexible / Any time</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#333] mb-1.5">
                How Did You Hear About Us?
              </label>
              <input
                type="text"
                value={formData.howHeard}
                onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                className="w-full px-4 py-3 border border-[#ddd] bg-white text-sm text-[#111] focus:border-gold-dark focus:outline-none transition-colors"
                placeholder="Google, referral, government listing, etc."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gold-dark hover:bg-gold text-white font-medium text-sm tracking-wide transition-all duration-200 disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Request a Meeting
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again or email us directly at megan.ayala@hayneindustries.com
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
