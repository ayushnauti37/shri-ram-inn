import heroImage from "../assets/hotel.jpeg";

import {
  FaHotel,
  FaParking,
} from "react-icons/fa";

import { MdCelebration } from "react-icons/md";

const Hero = () => {
  return (
    <div
      id="home"
      className="
        hero-section
        d-flex
        align-items-center
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="container position-relative z-2">

        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-7 text-white">

            {/* Tagline */}
            <p className="hero-tagline">
              Welcome To Shri Ram Inn
            </p>

            {/* Heading */}
            <h1 className="hero-heading luxury-heading">
              Luxury Stay <br />
              With Premium Comfort
            </h1>

            {/* Description */}
            <p className="hero-description">
              Experience elegant rooms, premium hospitality,
              delicious dining, and unforgettable memories
              at Shri Ram Inn.
            </p>

          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-5">

            {/* Stats Card */}
            <div className="hero-stats-card">

              <div className="row g-4 text-center">

                <div className="col-6">
                  <h2 className="hero-stats-number">
                    500+
                  </h2>

                  <p className="hero-stats-text">
                    Happy Guests
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="hero-stats-number">
                    50+
                  </h2>

                  <p className="hero-stats-text">
                    Luxury Rooms
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="hero-stats-number">
                    4.8
                  </h2>

                  <p className="hero-stats-text">
                    Guest Rating
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="hero-stats-number">
                    24/7
                  </h2>

                  <p className="hero-stats-text">
                    Service
                  </p>
                </div>

              </div>

            </div>

            {/* Buttons + Features */}
            <div className="mt-4 text-center">

              {/* View Rooms Button */}
              <a
                href="#rooms"
                className="hero-primary-btn d-inline-block"
              >
                View Rooms
              </a>

              {/* Features */}
              <div
                className="
                  d-flex
                  flex-wrap
                  gap-3
                  mt-4
                "
              >

                <div className="hero-feature">
                  <FaHotel />
                  Deluxe Rooms
                </div>

                <div className="hero-feature">
                  <MdCelebration />
                  Party Hall
                </div>

                <div className="hero-feature">
                  <FaParking />
                  Free Parking
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;