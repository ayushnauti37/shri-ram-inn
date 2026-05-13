import hotelImage from "../assets/hotel.jpeg";

const About = () => {
  return (
    <div id="about" className="py-20 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src={hotelImage}
            alt="Hotel"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>

          <h1 className="text-4xl font-bold mb-6">
            About Our Hotel
          </h1>

          <p className="text-gray-600 leading-8">
            Welcome to Hotel Shri Ram Inn, where comfort meets elegance.
            We provide world-class rooms, premium hospitality,
            delicious dining, and unforgettable experiences for
            our guests.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            Whether you are traveling for business or vacation,
            our hotel ensures a relaxing and luxurious stay.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
            Learn More
          </button>

        </div>

      </div>

    </div>
  );
};

export default About;