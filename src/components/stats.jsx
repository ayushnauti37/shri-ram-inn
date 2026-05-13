const Stats = () => {
  return (
    <div
      className="
        relative
        z-30
        -translate-y-20
        px-6
        -mb-20
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto

          bg-white

          rounded-3xl

          shadow-2xl

          grid
          grid-cols-2
          md:grid-cols-4

          gap-8

          p-10
        "
      >

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d4a017]">
            5000+
          </h1>

          <p className="mt-2 text-gray-600">
            Happy Guests
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d4a017]">
            50+
          </h1>

          <p className="mt-2 text-gray-600">
            Luxury Rooms
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d4a017]">
            4.8
          </h1>

          <p className="mt-2 text-gray-600">
            Guest Rating
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d4a017]">
            24/7
          </h1>

          <p className="mt-2 text-gray-600">
            Service
          </p>
        </div>

      </div>

    </div>
  );
};

export default Stats;