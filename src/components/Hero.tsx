export default function Hero() {
    return (
      <section className="h-screen flex flex-col items-center justify-center bg-[url('/hero-bg.png')] bg-cover bg-center flex items-center justify-center">

        <h1 className="text-4xl font-bold text-gray-900">
          Checkmate
        </h1>
        <h1 className="text-4xl font-bold text-gray-900">
          Professional Proofreading Services
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Get your documents proofread with precision and clarity.
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </a>
      </section>
    );
  }
  