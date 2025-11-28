export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-extrabold text-center">
        Creators Studio
      </h1>

      <p className="text-lg text-gray-300 mt-4 text-center max-w-2xl">
        We help content creators grow faster with professional thumbnails,
        engaging scripts, channel audits, comeback strategies, LinkedIn
        optimization, and complete branding support.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#services"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          View Services
        </a>

        <a
          href="#contact"
          className="border border-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
