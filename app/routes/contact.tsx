const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-12">
          We are here to help! Get in touch with us for any inquiries or
          support.
        </p>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <form>
            <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-start text-lg mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-200 bg-gray-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-start text-lg mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-200 bg-gray-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-start text-lg mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-200 bg-gray-200"
                  rows={6}
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Contact Information
          </h3>
          <div className="text-left space-y-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 10c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM13 6a7 7 0 01-7 7 7 7 0 017 7M3 14a7 7 0 0110 0"
                />
              </svg>
              <span className="ml-3 text-gray-600">
                123 Main Street, Suite 456, City, Country
              </span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7-7 7 7M3 16l7 7 7-7"
                />
              </svg>
              <span className="ml-3 text-gray-600">
                Mon - Fri: 9:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7-7 7 7M3 16l7 7 7-7"
                />
              </svg>
              <span className="ml-3 text-gray-600">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7-7 7 7M3 16l7 7 7-7"
                />
              </svg>
              <span className="ml-3 text-gray-600">info@company.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
