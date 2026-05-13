const RoomCard = ({ image, title, price }) => {

  const whatsappMessage =
    `https://wa.me/918923766728?text=Hello,%20I%20want%20to%20book%20the%20${title}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="text-gray-600 mt-2">
          ₹{price} / night
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">

          {/* WhatsApp */}
          <a
            href={whatsappMessage}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+918923766728"
            className="border border-black px-4 py-2 rounded-lg"
          >
            Call Now
          </a>

        </div>

      </div>
    </div>
  );
};

export default RoomCard;