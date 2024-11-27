
const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-xl text-gray-600 mb-12">
          We are passionate about making a difference through innovation,
          technology, and dedication to our clients success.
        </p>

        {/* Mission Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600">
            Our mission is to provide high-quality solutions to our customers,
            ensuring satisfaction through exceptional service and innovative
            technology. We aim to make a lasting impact in our industry and
            build strong relationships with our clients.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-500">CEO & Founder</p>
              <p className="text-gray-600 mt-4">
                John is the visionary behind the company. With over 15 years of
                experience, he leads the team with passion and dedication.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h4>
              <p className="text-gray-500">COO</p>
              <p className="text-gray-600 mt-4">
                Jane ensures smooth operations within the company, optimizing
                workflows and implementing efficient processes.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Michael Lee
              </h4>
              <p className="text-gray-500">CTO</p>
              <p className="text-gray-600 mt-4">
                Michael leads the tech side of things. His expertise in
                technology and innovation has helped our company stay ahead of
                the curve.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-800">
                Innovation
              </h4>
              <p className="text-gray-600">
                We embrace new ideas and innovative solutions to stay ahead and
                meet the evolving needs of our clients.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-800">Integrity</h4>
              <p className="text-gray-600">
                Honesty and transparency are at the core of our company. We
                believe in building trust with our clients and partners.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-800">
                Excellence
              </h4>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering
                high-quality results with attention to detail and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
