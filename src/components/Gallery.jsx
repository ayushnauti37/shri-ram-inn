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
      className="
        gallery-section
      "
    >

      <div className="container">

        <h1
          className="
            gallery-heading
            luxury-heading
            text-center
            mb-5
          "
        >
          Our Gallery
        </h1>

        <div className="row g-4">

          <div className="col-12 col-sm-6 col-lg-3">

            <img
              src={gallery1}
              alt="Gallery"
              className="gallery-image"
            />

          </div>

          <div className="col-12 col-sm-6 col-lg-3">

            <img
              src={gallery2}
              alt="Gallery"
              className="gallery-image"
            />

          </div>

          <div className="col-12 col-sm-6 col-lg-3">

            <img
              src={gallery3}
              alt="Gallery"
              className="gallery-image"
            />

          </div>

          <div className="col-12 col-sm-6 col-lg-3">

            <img
              src={gallery4}
              alt="Gallery"
              className="gallery-image"
            />

          </div>

          {/* <div className="col-12 col-sm-6 col-lg-3">

            <img
              src={gallery5}
              alt="Gallery"
              className="gallery-image"
            />

          </div>

          <div className="col-12 col-sm-6 col-lg-3">

            <img
              src={gallery6}
              alt="Gallery"
              className="gallery-image"
            />

          </div> */}

        </div>

      </div>

    </div>
  );
};

export default Gallery;