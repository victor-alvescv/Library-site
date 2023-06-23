import React from "react";
import { Link } from "react-router-dom";
import Movie from "../assets/movie.svg";
import Movielogo from "../assets/movielogofooter.png";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <img
              className="landing__logo"
              style={{ marginBottom: "20px", zIndex: "2" }}
              src={Movielogo}
            />
            <div
              data-aos="fade-up"
              data-aos-duration="
        2000"
              data-aos-delay="800"
              data-aos-once="true"
            >
              <h2 style={{ color: "#f9f9f9" }}>
                Find your dream movie with{" "}
                <span className="purple">Library</span>
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="
        2000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <Link to="/books">
                <button className="btn btn-book-info">Browse Movies</button>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="
        2000"
            data-aos-delay="1400"
            data-aos-once="true"
          >
            <figure className="header__img--wrapper">
              <img className="header__img" src={Movie} alt="" />
            </figure>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
