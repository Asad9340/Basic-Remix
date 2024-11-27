import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a team dedicated to providing the best services and
              experiences for our users. Explore our platform to learn more
              about what we offer.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Main Street, City, Country</p>
            <p className="text-gray-400">Email: contact@website.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
