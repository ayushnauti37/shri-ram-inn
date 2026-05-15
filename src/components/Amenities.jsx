import {
  FaWifi,
  FaParking,
  FaHotel,
} from "react-icons/fa";

import {
  MdRestaurant,
  MdCelebration
} from "react-icons/md";

const Amenities = () => {
  return (
    <div
      className="
        amenities-section
      "
    >

      <div className="container">

        <h1
          className="
            amenities-heading
            luxury-heading
            text-center
            mb-5
          "
        >
          Our Amenities
        </h1>

        <div className="row g-4 justify-content-center">

          {/* Amenity Card */}
          <div className="col-12 col-sm-6 col-lg-2">

            <div className="amenity-card">

              <FaWifi className="amenity-icon" />

              <h2 className="amenity-title">
                Free WiFi
              </h2>

            </div>

          </div>

          <div className="col-12 col-sm-6 col-lg-2">

            <div className="amenity-card">

              <MdCelebration className="amenity-icon" />

              <h2 className="amenity-title">
                Party Hall
              </h2>

            </div>

          </div>

          <div className="col-12 col-sm-6 col-lg-2">

            <div className="amenity-card">

              <MdRestaurant className="amenity-icon" />

              <h2 className="amenity-title">
                Restaurant
              </h2>

            </div>

          </div>

          <div className="col-12 col-sm-6 col-lg-3">

            <div className="amenity-card">

              <FaParking className="amenity-icon" />

              <h2 className="amenity-title">
                Free Spacious Parking
              </h2>

            </div>

          </div>

          <div className="col-12 col-sm-6 col-lg-2">

            <div className="amenity-card">

              <FaHotel className="amenity-icon" />

              <h2 className="amenity-title">
                Deluxe Rooms
              </h2>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Amenities;