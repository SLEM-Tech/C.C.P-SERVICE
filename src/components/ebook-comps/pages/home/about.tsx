"use client";

export default function AboutUs() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
        {/* Left Column - Text + Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Did you know us?
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are about books and our purpose is to show you the book who can
            change your life or distract you from the real world in a better
            one. BWorld works with the must popular publishs just for your
            delight. <br />
            <br />
            If you are about books, you must to subscribe to our newsletter.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Column - Map or Illustration */}
        <div>
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px] rounded-lg border"
            loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
}
