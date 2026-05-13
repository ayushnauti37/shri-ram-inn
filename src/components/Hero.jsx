import heroImage from "../assets/hotel.jpeg";

import {
  FaWhatsapp,
  FaHotel,
  FaParking,
} from "react-icons/fa";

import { MdCelebration } from "react-icons/md";

const Hero = () => {
  return (
    <div
      id="home"
      className="
        h-screen
        bg-cover
        bg-center
        relative
        flex
        items-center
        justify-center
        text-white
        px-6
        pt-25
        pb-32
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          text-center
          max-w-4xl
        "
      >

        {/* Tagline */}
        <p
          className="
            uppercase
            tracking-[8px]
            text-[#d4a017]
            mb-4
            text-sm
            md:text-base
          "
        >
          Welcome To Shri Ram Inn
        </p>

        {/* Main Heading */}
        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            luxury-heading
            leading-tight
            mb-6
          "
        >
          Luxury Stay <br />

          With Premium Comfort
        </h1>

        {/* Description */}
        <p
          className="
            text-gray-300
            text-lg
            md:text-xl
            leading-8
            mb-10
          "
        >
          Experience elegant rooms, premium hospitality,
          delicious dining, and unforgettable memories
          at Shri Ram Inn.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-5
            justify-center
            items-center
          "
        >

          {/* View Rooms */}
          <a
            href="#rooms"
            className="
              bg-[#d4a017]
              text-black

              px-8
              py-4

              rounded-full

              text-lg
              font-semibold

              hover:scale-105
              transition
            "
          >
            View Rooms
          </a>

          {/* WhatsApp Booking */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-white

              px-8
              py-4

              rounded-full

              text-lg
              font-semibold

              flex
              items-center
              gap-3

              hover:bg-white
              hover:text-black

              transition
            "
          >
            <FaWhatsapp />

            WhatsApp Booking
          </a>

        </div>

        {/* Features */}
        <div
          className="
            mt-10

            flex
            flex-wrap
            justify-center
            gap-6
          "
        >

          <div
            className="
              bg-white/10
              backdrop-blur-md

              px-6
              py-3

              rounded-full

              flex
              items-center
              gap-3
            "
          >
            <FaHotel />

            Deluxe Rooms
          </div>

          <div
            className="
              bg-white/10
              backdrop-blur-md

              px-6
              py-3

              rounded-full

              flex
              items-center
              gap-3
            "
          >
            <MdCelebration />

            Party Hall
          </div>

          <div
            className="
              bg-white/10
              backdrop-blur-md

              px-6
              py-3

              rounded-full

              flex
              items-center
              gap-3
            "
          >
            <FaParking />

            Free Parking
          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;