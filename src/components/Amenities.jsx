import {
  FaWifi,
  FaParking,
  FaHotel,
} from "react-icons/fa";

import { MdRestaurant,MdCelebration } from "react-icons/md";

const Amenities = () => {
  return (
    <div className="bg-gray-100 py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Amenities
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Amenity Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
          <FaWifi className="text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold">
            Free WiFi
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
            <MdCelebration className="text-5xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold">
                Party Hall
            </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
          <MdRestaurant className="text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold">
            Restaurant
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
          <FaParking className="text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold">
            Free Spacious Parking
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
            <FaHotel className="text-5xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold">
                Deluxe Rooms
            </h2>
        </div>

      </div>

    </div>
  );
};

export default Amenities;