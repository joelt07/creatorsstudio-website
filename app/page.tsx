export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-extrabold text-center">Creators Studio</h1>
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
    </>
  );
}
