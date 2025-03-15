export default function Contact() {
    return (
      <section id="contact" className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-lg text-gray-700 mt-4">
          Fill out the form below, and we’ll get back to you soon!
        </p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg mb-4"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  