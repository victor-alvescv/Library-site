import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <div data-aos="fade-down" data-aos-offset="400" data-aos-once="true">
            <h2 className="section__title">
              Why choose <span className="purple">MoviePlus</span>
            </h2>
          </div>
          <div data-aos="fade-in" data-aos-offset="450" data-aos-once="true">
            <div className="highlight__wrapper">
              <Highlight
                icon={<FontAwesomeIcon icon="bolt" />}
                title="Easy and Quick"
                para="Get acess to the movie you rented online instantly."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="book-open" />}
                title="10,000+ Movies"
                para="Library has books in all your favourite categories."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="tags" />}
                title="Affordable"
                para="Get your hands on trending movies for as little as $10."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
