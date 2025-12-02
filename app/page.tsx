import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-extrabold text-center">Kairo Studio</h1>
        <p className="text-lg text-gray-300 mt-4 text-center max-w-2xl">
          We help content creators grow faster with professional thumbnails,
          engaging scripts, channel audits, comeback strategies, LinkedIn
          optimization, and complete branding support.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#services" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            View Services
          </a>
          <a href="#contact" className="border border-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700">
            Contact Us
          </a>
        </div>
      </main>

      <section id="services" className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="p-6 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-semibold mb-2">Thumbnail Design</h3>
            <p className="text-gray-300">Eye-catching thumbnails that boost clicks and maximize views.</p>
          </div>

          <div className="p-6 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-semibold mb-2">Script Writing</h3>
            <p className="text-gray-300">High-retention scripts crafted to engage your audience.</p>
          </div>

          <div className="p-6 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-semibold mb-2">Channel Audits</h3>
            <p className="text-gray-300">Complete analysis of your channel with actionable improvement tips.</p>
          </div>

          {/*} add the other service cards here */}
        </div>
      </section>
      {/* PRICING SECTION */}
<section id="pricing" className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Pricing</h2>
    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
      Simple, transparent pricing made for creators. Start small and scale as your channel grows.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Basic */}
      <div className="p-8 border border-gray-700 rounded-xl">
        <div className="text-sm text-gray-400">Basic</div>
        <div className="text-3xl font-bold my-4">₹5,999</div>
        <ul className="text-gray-300 space-y-2 mb-6">
          <li>Thumbnail pack (10)</li>
          <li>1 script (up to 6 mins)</li>
          <li>Email support</li>
        </ul>
        <a href="#contact" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold">Get Basic</a>
      </div>

      {/* Pro */}
      <div className="p-8 border-2 border-white rounded-xl bg-white/5">
        <div className="text-sm text-gray-200">Pro</div>
        <div className="text-3xl font-bold my-4">₹14,999</div>
        <ul className="text-gray-300 space-y-2 mb-6">
          <li>Thumbnail pack (30)</li>
          <li>5 scripts + CTA optimization</li>
          <li>Channel audit (1)</li>
          <li>Priority support</li>
        </ul>
        <a href="#contact" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold">Get Pro</a>
      </div>

      {/* Agency */}
      <div className="p-8 border border-gray-700 rounded-xl">
        <div className="text-sm text-gray-400">Agency</div>
        <div className="text-3xl font-bold my-4">Custom</div>
        <ul className="text-gray-300 space-y-2 mb-6">
          <li>Full channel management</li>
          <li>Content calendar + production</li>
          <li>Dedicated account manager</li>
        </ul>
        <a href="#contact" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold">Talk to Us</a>
      </div>
    </div>
  </div>
</section>

{/* CONTACT SECTION */}
{/* CONTACT SECTION */}
<section id="contact" className="bg-black text-white py-20 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Contact</h2>
    <p className="text-gray-400 mb-8">Ready to level up? Drop your details and we’ll get back within 24 hours.</p>

    {/* client-side form component */}
    <div className="text-left">
      <ContactForm />
    </div>

    <p className="text-gray-600 text-sm mt-6">Prefer a direct email? hello@kairostudio.io</p>
  </div>
</section>
    </>
  );
}
