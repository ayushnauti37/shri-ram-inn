import {
  FaInstagram,
  FaMailBulk,
  FaMailchimp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        footer-section
      "
    >

      <div className="container">

        <div className="row g-5">

          {/* Hotel Info */}
          <div className="col-12 col-md-6 col-lg-3">

            <h1
              className="
                luxury-heading
                footer-logo
                mb-4
              "
            >
              SHRI RAM INN
            </h1>

            <p className="footer-text">
              Experience luxury, comfort, and unforgettable hospitality at Shri Ram Inn.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-2">

            <h2 className="footer-heading">
              Quick Links
            </h2>

            <ul className="footer-links list-unstyled">

              <li>
                <a href="#home">
                  Home
                </a>
              </li>

              <li>
                <a href="#rooms">
                  Rooms
                </a>
              </li>

              <li>
                <a href="#gallery">
                  Gallery
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-3">

            <h2 className="footer-heading">
              Contact
            </h2>

            <div className="footer-contact">

              <p className="d-flex align-items-center gap-3">

                <FaMapMarkerAlt />

                Matli, Uttarkashi, Uttarakhand, India
              </p>

              <p className="d-flex align-items-center gap-3">
                <FaPhoneAlt />+91 9456795771
              </p>
              <p className="d-flex align-items-center gap-3">
                <FaWhatsapp />+91 8923766728
              </p>
              <p className="d-flex align-items-center gap-3">
                <FaMailBulk/>hotelshriraminn1@gmail.com
              </p>

              <p>
                Open 24 Hours
              </p>

            </div>

            {/* Social */}
            <div className="d-flex gap-3 mt-4">

              <FaInstagram className="footer-social-icon" />

            </div>

          </div>

          {/* Google Maps */}
          <div className="col-12 col-md-6 col-lg-4">

            <h2 className="footer-heading">
              Find Us
            </h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6858.445752657091!2d78.36611151695253!3d30.740240434994597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390895f32b35b3d1%3A0x5ab42743f692616!2sHotel%20Shri%20Ram%20Inn!5e0!3m2!1sen!2sin!4v1778696887042!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="footer-map"
            ></iframe>

          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2026 Shri Ram Inn. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;