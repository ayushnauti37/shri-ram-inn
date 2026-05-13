import RoomCard from "./RoomCard";

import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";


const FeaturedRooms = () => {
  return (
    <div id="rooms" className="py-20 px-6 bg-gray-100">

      <h1 className="text-4xl font-bold text-center mb-12">
        Featured Rooms
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <RoomCard
          image={room1}
          title="Deluxe Room"
          price="4999"
        />

        <RoomCard
          image={room2}
          title="Luxury Suite"
          price="7999"
        />

        <RoomCard
          image={room3}
          title="Luxury Suite"
          price="7999"
        />


      </div>
    </div>
  );
};

export default FeaturedRooms;