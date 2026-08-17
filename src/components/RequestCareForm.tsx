"use client";

import { useState } from "react";
import { careTypeOptions, locationOptions } from "@/data/request-care";

export default function RequestCareForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/request-care", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Thank you! Our care coordinator will contact you shortly." });
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setSubmitStatus({ type: "error", message: result.error || "Something went wrong." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Network error. Please call us directly at 408-332-5843." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full space-y-6 rounded-3xl border border-white bg-white p-8 shadow-xl shadow-brand-ink/5 sm:p-10 transition-all hover:shadow-2xl hover:shadow-brand-ink/10"
    >
      {/* Status Messages */}
      {submitStatus.type === "success" && (
        <div className="rounded-xl bg-green-50 p-4 text-sm font-bold text-green-800 border border-green-200">
          {submitStatus.message}
        </div>
      )}
      {submitStatus.type === "error" && (
        <div className="rounded-xl bg-red-50 p-4 text-sm font-bold text-brand-red border border-red-200">
          {submitStatus.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-brand-ink">Full Name <span className="text-brand-red">*</span></label>
          <input type="text" id="name" name="name" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" placeholder="John Doe" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-brand-ink">Phone Number <span className="text-brand-red">*</span></label>
          <input type="tel" id="phone" name="phone" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" placeholder="(408) 555-0123" disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-brand-ink">Email Address <span className="text-brand-red">*</span></label>
          <input type="email" id="email" name="email" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" placeholder="john@example.com" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-bold text-brand-ink">City / Location</label>
          <select id="location" name="location" defaultValue="" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-brand-ink transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" disabled={isSubmitting}>
            <option value="" disabled>Select a city</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="careType" className="text-sm font-bold text-brand-ink">Type of Care Needed</label>
        <select id="careType" name="careType" defaultValue="" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-brand-ink transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" disabled={isSubmitting}>
          <option value="" disabled>Select care type</option>
          {careTypeOptions.map((care) => (
            <option key={care} value={care}>{care}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-brand-ink">Briefly describe your situation</label>
        <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 resize-none" placeholder="How can we help your loved one?" disabled={isSubmitting}></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_rgb(255,49,49,0.2)] transition-all hover:-translate-y-1 hover:bg-brand-red-dark hover:shadow-[0_8px_30px_rgb(199,36,57,0.3)] disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        <span>{isSubmitting ? "Submitting..." : "Submit Request"}</span>
        {!isSubmitting && (
           <svg width={20} height={20} className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        )}
      </button>
    </form>
  );
}