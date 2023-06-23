import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";
import Movielogofooter from "../assets/movielogofooter.png";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav style={{ backgroundColor: "#040814", zIndex: '4' }}>
      <div className="nav__container">
        <Link to="/">
          <img src={Movielogofooter} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="nav__link"
            >
              HOME
            </Link>
          </li>
          <li className="nav__list">
            <Link
              to="/movies"
              style={{ textDecoration: "none" }}
              className="nav__link"
            >
              MOVIES
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link
              to="/cart"
              style={{ border: "none" }}
              className="nav__link cart"
            >
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {!!numberOfItems && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/movies" className="menu__link">
                Movies
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
