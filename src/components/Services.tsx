export default function Services() {
    return (
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="text-xl font-semibold">Academic Proofreading</h3>
            <p className="text-gray-600 mt-2">Theses, dissertations, and research papers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="text-xl font-semibold">Business Proofreading</h3>
            <p className="text-gray-600 mt-2">Reports, proposals, and presentations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="text-xl font-semibold">Personal Documents</h3>
            <p className="text-gray-600 mt-2">Resumes, cover letters, and more.</p>
          </div>
        </div>
      </section>
    );
  }
  