import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
// import gallery5 from "../assets/gallery5.jpg";
// import gallery6 from "../assets/gallery6.jpg";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="py-20 px-6 bg-gray-100"
    >

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <img
          src={gallery1}
          alt="Gallery"
          className="rounded-2xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
        />

        <img
          src={gallery2}
          alt="Gallery"
          className="rounded-2xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
        />

        <img
          src={gallery3}
          alt="Gallery"
          className="rounded-2xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
        />

        <img
          src={gallery4}
          alt="Gallery"
          className="rounded-2xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
        />

        {/* <img
          src={gallery5}
          alt="Gallery"
          className="rounded-2xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
        />

        <img
          src={gallery6}
          alt="Gallery"
          className="rounded-2xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
        /> */}

      </div>

    </div>
  );
};

export default Gallery;