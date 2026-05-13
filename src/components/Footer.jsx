import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a050d] text-white pt-20 pb-10 px-6">

      <div
        className="
          max-w-7xl
          mx-auto

          grid
          grid-cols-1
          md:grid-cols-4

          gap-10
        "
      >

        {/* Hotel Info */}
        <div>

          <h1 className="luxury-heading text-3xl mb-4">
            SHRI RAM INN
          </h1>

          <p className="text-gray-400 leading-7">
            Experience luxury, comfort, and unforgettable hospitality at Shri Ram Inn.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#rooms">Rooms</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>

          <div className="space-y-4 text-gray-400">

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />

              Delhi, India
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt />

              +91 9876543210
            </p>

            <p>
              Open 24 Hours
            </p>

          </div>

          {/* Social */}
          <div className="flex gap-4 mt-6 text-2xl">

            <FaInstagram className="hover:text-[#d4a017] cursor-pointer transition" />

          </div>

        </div>

        {/* Google Maps */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Find Us
          </h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          ></iframe>

        </div>

      </div>

      {/* Bottom */}
      <div
        className="
          border-t
          border-gray-800

          mt-12
          pt-6

          text-center
          text-gray-500
        "
      >
        © 2026 Shri Ram Inn. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;