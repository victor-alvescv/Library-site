import React from "react";
import { Link } from "react-router-dom";
import Movielogofooter from "../assets/movielogofooter.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#040814" }}>
      <div className="container">
        <div className="row row__column">
          <figure className="footer__logo">
            <img src={Movielogofooter} className="footer__logo--img" alt="" />
          </figure>
          <div className="footer__list">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="footer__link"
            >
              Home
            </Link>
            <span
              href="/"
              style={{ textDecoration: "none" }}
              className="footer__link no-cursor"
            >
              About
            </span>
            <Link
              to="/books"
              style={{ textDecoration: "none" }}
              className="footer__link"
            >
              Movies
            </Link>
            <Link
              to="/cart"
              style={{ textDecoration: "none" }}
              className="footer__link"
            >
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
