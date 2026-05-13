import { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-6
      py-4
    "
    >
      <div
        className="
        max-w-[95%]
        mx-auto
        flex
        justify-between
        items-center

        bg-[#2b0a16]/60
        backdrop-blur-md

        border
        border-[#d4a017]/30

        rounded-2xl

        px-6
        py-0

        shadow-lg
      "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hotel Logo"
            className="w-25 h-25 object-contain"
          />

          <div>
            <p className="text-sm tracking-[8px] text-white">
              HOTEL
            </p>

            <h1 className="luxury-heading text-4xl font-bold text-white">
              SHRI RAM INN
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex  gap-17 text-white text-lg font-semibold">

          <li>
            <a
              href="#home"
              className="hover:text-[#d4a017] transition focus:outline-none focus:ring-0"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#rooms"
              className="hover:text-[#d4a017] transition focus:outline-none focus:ring-0"
            >
              Rooms
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-[#d4a017] transition focus:outline-none focus:ring-0"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="hover:text-[#d4a017] transition focus:outline-none focus:ring-0 "
            >
              Gallery
            </a>
          </li>

        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Call */}
          <a
            href="tel:+919876543210"
            className="
              w-12
              h-12
              rounded-full

              border
              border-[#d4a017]

              flex
              items-center
              justify-center

              text-[#d4a017]

              hover:bg-[#d4a017]
              hover:text-black

              transition
            "
          >
            <FaPhoneAlt />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2

              bg-[#4b1022]
              text-[#f5d77a]

              border
              border-[#d4a017]

              px-6
              py-3

              rounded-full

              hover:bg-[#d4a017]
              hover:text-black

              transition
            "
          >
            <FaWhatsapp />

            Book Now
          </a>

        </div>

        {/* Mobile Menu Icon */}
        <div
          className="
            lg:hidden
            text-3xl
            text-white
            cursor-pointer
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            lg:hidden

            mt-4

            bg-[#2b0a16]/90
            backdrop-blur-md

            border
            border-[#d4a017]/30

            rounded-2xl

            p-6

            text-white
          "
        >
          <ul className="flex flex-col gap-6 text-lg">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#rooms">Rooms</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>

          </ul>

          {/* Mobile Buttons */}
          <div className="flex gap-4 mt-8">

            <a
              href="tel:+919876543210"
              className="
                flex-1
                text-center

                border
                border-[#d4a017]

                py-3
                rounded-full
              "
            >
              Call
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                text-center

                bg-[#d4a017]
                text-black

                py-3
                rounded-full
              "
            >
              WhatsApp
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;