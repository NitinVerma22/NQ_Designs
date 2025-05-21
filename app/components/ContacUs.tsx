"use client";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center h-auto mt-16 mb-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg mb-12 text-center">We'd love to hear from you!</p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Send Message</button>
        </form>
      </div>
    </div>
  );
}
