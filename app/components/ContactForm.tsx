"use client";

import React from "react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value || "—";
    const email = (form.elements.namedItem("email") as HTMLInputElement).value || "—";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value || "—";
    const subject = encodeURIComponent(`Kairo Studio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    // open user's email client
    window.location.href = `mailto:hello@kairostudio.io?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" type="text" placeholder="Full name" required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg" />
        <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg" />
      </div>

      <textarea name="message" placeholder="Tell us about your needs..." rows={6} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg"></textarea>

      <div className="text-center">
        <button type="submit" className="bg-white text-black px-8 py-3 rounded-lg font-semibold">Send Message</button>
      </div>
    </form>
  );
}
