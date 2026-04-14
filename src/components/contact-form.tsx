"use client";

import { useActionState, useState } from "react";
import { submitInquiry, type FormState } from "@/lib/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(submitInquiry, null);
  const [hearAbout, setHearAbout] = useState("");

  return (
    <form action={formAction} className="space-y-5">
      {state && (
        <div className={`p-4 rounded-md text-sm ${
          state.success
            ? "bg-green-50 text-green-800 border border-green-200"
            : "bg-red-50 text-red-800 border border-red-200"
        }`}>
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm text-brown-text mb-1">Name <span className="text-orange">*</span></label>
        <input type="text" id="name" name="name" required
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
          placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-brown-text mb-1">Email <span className="text-orange">*</span></label>
        <input type="email" id="email" name="email" required
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
          placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-brown-text mb-1">Phone</label>
        <input type="tel" id="phone" name="phone"
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
          placeholder="(555) 555-5555" />
      </div>

      <div>
        <label htmlFor="preferredContact" className="block text-sm text-brown-text mb-1">Preferred Contact Method</label>
        <select id="preferredContact" name="preferredContact"
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors">
          <option value="">Select contact method</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
          <option value="Text Message">Text Message</option>
        </select>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm text-brown-text mb-1">Service Type</label>
        <select id="service" name="service"
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors">
          <option value="">Select a service</option>
          <option value="Portrait Session">Portrait Session</option>
          <option value="Wedding">Wedding</option>
          <option value="Event">Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm text-brown-text mb-1">Preferred Date</label>
        <input type="date" id="date" name="date"
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors" />
      </div>

      <div>
        <label htmlFor="hearAbout" className="block text-sm text-brown-text mb-1">How did you hear about me?</label>
        <select
          id="hearAbout"
          name="hearAbout"
          value={hearAbout}
          onChange={(e) => setHearAbout(e.target.value)}
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
        >
          <option value="">Select an option</option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media (Instagram, Facebook)</option>
          <option value="Referral">Referral</option>
          <option value="Previous Client">Previous Client</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {hearAbout === "Referral" && (
        <div>
          <label htmlFor="referralName" className="block text-sm text-brown-text mb-1">
            Who referred you? <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="referralName"
            name="referralName"
            required
            className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
            placeholder="Name of the person who referred you"
          />
        </div>
      )}

      <div>
        <label htmlFor="details" className="block text-sm text-brown-text mb-1">Tell me more</label>
        <textarea id="details" name="details" rows={3}
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="Describe the occasion, location, number of people, or any specific details..." />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-brown-text mb-1">Your Vision <span className="text-orange">*</span></label>
        <textarea id="message" name="message" required rows={5}
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="Tell us about your vision..." />
      </div>

      <button type="submit" disabled={isPending} className="btn-primary w-full">
        {isPending ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
