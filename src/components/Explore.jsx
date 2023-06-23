import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <h2>
              Explore more <span className="purple">Movies</span>
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Link to="/movies">
              <button className="btn btn-book-info">Explore Movies</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
