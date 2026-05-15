import hotelImage from "../assets/hotel.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="
        about-section
      "
    >

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-12 col-md-6">

            <img
              src={hotelImage}
              alt="Hotel"
              className="about-image"
            />

          </div>

          {/* Content */}
          <div className="col-12 col-md-6">

            <h1
              className="
                about-heading
                luxury-heading
                mb-4
              "
            >
              About Our Hotel
            </h1>

            <p className="about-text">
              Welcome to Hotel Shri Ram Inn, where comfort meets elegance.
              We provide world-class rooms, premium hospitality,
              delicious dining, and unforgettable experiences for
              our guests.
            </p>

            <p className="about-text mt-4">
              Whether you are traveling for business or vacation,
              our hotel ensures a relaxing and luxurious stay.
            </p>

            <button className="about-btn mt-4">
              Learn More
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;