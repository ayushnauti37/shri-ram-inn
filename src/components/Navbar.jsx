import { useState } from "react";

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
    <nav className="fixed-top w-100 px-3 py-3">

      <div
        className="
          container-fluid
          d-flex
          justify-content-between
          align-items-center
          navbar-glass
          rounded-pill
          px-4
          py-1
        "
      >

        {/* Logo */}
        <div className="d-flex align-items-center gap-2">

          <img
            src={logo}
            alt="Hotel Logo"
            className="navbar-logo"
          />

          <div>

            <p className="hotel-text text-white mb-0">
              HOTEL
            </p>

            <h1 className="luxury-heading hotel-name text-white mb-0">
              SHRI RAM INN
            </h1>

          </div>

        </div>

        {/* Desktop Menu */}
        <ul
          className="
            d-none
            d-lg-flex
            gap-5
            text-white
            fs-5
            fw-semibold
            list-unstyled
            mb-0
          "
        >

          <li>
            <a
              href="#home"
              className="nav-link-custom"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#rooms"
              className="nav-link-custom"
            >
              Rooms
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="nav-link-custom"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="nav-link-custom"
            >
              Gallery
            </a>
          </li>

        </ul>

        {/* Desktop Buttons */}
        <div
          className="
            d-none
            d-lg-flex
            align-items-center
            gap-3
          "
        >

          {/* Call */}
          <a
            href="tel:+919456795771"
            className="call-btn"
          >
            <FaPhoneAlt />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918923766728"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />

            Book Now
          </a>

        </div>

        {/* Mobile Menu Icon */}
        <div
          className="
            d-lg-none
            fs-2
            text-white
            mobile-menu-icon
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
            d-lg-none
            mobile-menu
            text-white
            mt-3
            p-4
          "
        >

          <ul
            className="
              d-flex
              flex-column
              gap-4
              fs-5
              list-unstyled
            "
          >

            <li>
              <a
                href="#home"
                className="nav-link-custom"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#rooms"
                className="nav-link-custom"
              >
                Rooms
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="nav-link-custom"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                className="nav-link-custom"
              >
                Gallery
              </a>
            </li>

          </ul>

          {/* Mobile Buttons */}
          <div className="d-flex gap-3 mt-4">

            <a
              href="tel:+919876543210"
              className="mobile-call-btn"
            >
              Call
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="mobile-whatsapp-btn"
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