import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

const Featured = () => {
  console.log(books);
  console.log(); // qualquer teu otario pesquisa essa merda
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h2 className="section__title">
              New <span className="purple">Movies</span>
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="30"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="books">
              {books
                .filter((book) => book.rating === 5)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
