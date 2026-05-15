import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing hospitality and very clean rooms. The staff was extremely friendly and supportive throughout our stay.",
  },

  {
    name: "Priya Verma",
    review:
      "Beautiful ambience with premium comfort. The rooms and party hall were absolutely शानदार.",
  },

  {
    name: "Aman Gupta",
    review:
      "One of the best hotels in the area. Great service, spacious parking, and excellent food quality.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <p className="testimonials-tagline">
            Guest Reviews
          </p>

          <h1 className="testimonials-heading luxury-heading">
            What Our Guests Say
          </h1>

        </div>

        {/* Cards */}
        <div className="row g-4">

          {testimonials.map((item, index) => (
            <div className="col-lg-4" key={index}>

              <div className="testimonial-card h-100">

                {/* Stars */}
                <div className="d-flex gap-1 mb-4">

                  <FaStar className="testimonial-star" />
                  <FaStar className="testimonial-star" />
                  <FaStar className="testimonial-star" />
                  <FaStar className="testimonial-star" />
                  <FaStar className="testimonial-star" />

                </div>

                {/* Review */}
                <p className="testimonial-review">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="d-flex align-items-center gap-3 mt-4">

                  <div className="testimonial-avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h5 className="testimonial-name mb-0">
                      {item.name}
                    </h5>

                    <p className="testimonial-role mb-0">
                      Google Review
                    </p>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;