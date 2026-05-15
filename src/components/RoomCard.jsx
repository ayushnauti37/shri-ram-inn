const RoomCard = ({ image, title, price }) => {

  const whatsappMessage =
    `https://wa.me/918923766728?text=Hello,%20I%20want%20to%20book%20the%20${title}`;

  return (
    <div className="room-card">

      <img
        src={image}
        alt={title}
        className="room-card-image"
      />

      <div className="room-card-body">

        <h2 className="room-card-title">
          {title}
        </h2>

        <p className="room-card-price">
          ₹{price} / night
        </p>

        {/* Buttons */}
        <div className="d-flex gap-3 mt-4">

          {/* WhatsApp */}
          <a
            href={whatsappMessage}
            target="_blank"
            rel="noreferrer"
            className="room-whatsapp-btn"
          >
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+918923766728"
            className="room-call-btn"
          >
            Call Now
          </a>

        </div>

      </div>
    </div>
  );
};

export default RoomCard;