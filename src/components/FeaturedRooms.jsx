import RoomCard from "./RoomCard";

import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";

const FeaturedRooms = () => {
  return (
    <div
      id="rooms"
      className="
        featured-rooms-section
        py-5
      "
    >

      <div className="container">

        <h1
          className="
            featured-rooms-heading
            luxury-heading
            text-center
            mb-5
          "
        >
          Featured Rooms
        </h1>

        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-4">
            <RoomCard
              image={room1}
              title="Deluxe Room"
              price="4999"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <RoomCard
              image={room2}
              title="Luxury Suite"
              price="7999"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <RoomCard
              image={room3}
              title="Luxury Suite"
              price="7999"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default FeaturedRooms;