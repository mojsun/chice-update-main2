import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "../../scss/components/Nav.scss";
// import shoppingbagicon from "../Nav/shopping-bag.svg";
function Nav() {
  const [womenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [menDropdownOpen, setMenDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function renderAuthListItems() {
    if (Auth.loggedIn()) {
      return (
        <>
          <li className="mx-1">
            <Link to="/orderHistory" className="text-decoration-none">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <a
              href="/"
              className="text-decoration-none"
              onClick={() => Auth.logout()}
            >
              Logout
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="mx-1">
            <Link to="/signup" className="text-decoration-none">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </li>
        </>
      );
    }
  }

  return (
    <header
      className={`Nav d-flex justify-content-between align-items-center flex-row px-5 bg-info ${
        mobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      <h1 className="display-3 fw-bold">
        <Link to="/" className="text-decoration-none">
          {/* <img
            src={shoppingbagicon}
            alt="shopping-cart svg"
            className="me-1 pb-1"
          ></img> */}
          Choice
        </Link>
      </h1>
      <button
        className="Nav-toggler btn p-2 d-lg-none"
        aria-label="Toggle navigation"
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((p) => !p)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="center" onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <button
            className="mobile-close btn d-lg-none"
            aria-label="Close navigation"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="d-flex hstack gap-4 flex-row pe-5 me-1 list-unstyled ">
          <li
            className={`mx-1 dropdown ${womenDropdownOpen ? "show" : ""}`}
            onMouseEnter={() => setWomenDropdownOpen(true)}
            onMouseLeave={() => setWomenDropdownOpen(false)}
            onClick={() => setWomenDropdownOpen((prev) => !prev)}
          >
            <a
              href="#"
              className="text-decoration-none"
              data-bs-toggle="dropdown"
              onClick={(e) => e.preventDefault()}
            >
              Women
            </a>
            <div
              className={`dropdown-menu bg-info ${
                womenDropdownOpen ? "show" : ""
              }`}
            >
              <h1 className="dropdown-header">Products</h1>
              <Link to="/ProductDetails/jacket" className="dropdown-item w-75">
                Jackets
              </Link>
              <Link to="/ProductDetails/blouse" className="dropdown-item w-75">
                blouse
              </Link>
              <Link to="/ProductDetails/T-shirt" className="dropdown-item w-75">
                T-Shirts
              </Link>
              <Link
                to="/ProductDetails/sweatshirt"
                className="dropdown-item w-75"
              >
                sweatshirt
              </Link>
              <Link to="/ProductDetails/pants" className="dropdown-item w-75">
                pants
              </Link>
              <Link to="/ProductDetails/shorts" className="dropdown-item w-75">
                shorts
              </Link>
              <Link to="/ProductDetails/skirt" className="dropdown-item w-75">
                skirt
              </Link>
              <Link to="/ProductDetails/T-shirt" className="dropdown-item w-75">
                T-Shirts
              </Link>
            </div>
          </li>
          <li
            className={`mx-1 dropdown ${menDropdownOpen ? "show" : ""}`}
            onMouseEnter={() => setMenDropdownOpen(true)}
            onMouseLeave={() => setMenDropdownOpen(false)}
            onClick={() => setMenDropdownOpen((prev) => !prev)}
          >
            <a
              href="#"
              className="text-decoration-none"
              data-bs-toggle="dropdown"
              onClick={(e) => e.preventDefault()}
            >
              Men
            </a>
            <div
              className={`dropdown-menu bg-info ${
                menDropdownOpen ? "show" : ""
              }`}
            >
              <h1 className="dropdown-header fw-bold">Products</h1>
              <Link
                to="/MenProductDetails/blouse"
                className="dropdown-item w-75"
              >
                blouse
              </Link>
              <Link
                to="/MenProductDetails/T-shirt"
                className="dropdown-item w-75"
              >
                T-Shirts
              </Link>
              <Link
                to="/MenProductDetails/hoodie"
                className="dropdown-item w-75"
              >
                hoodie
              </Link>
              <Link
                to="/MenProductDetails/pants"
                className="dropdown-item w-75"
              >
                pants
              </Link>
              <Link
                to="/MenProductDetails/shorts"
                className="dropdown-item w-75"
              >
                shorts
              </Link>
              <Link
                to="/MenProductDetails/sweatshirt"
                className="dropdown-item w-75"
              >
                sweatshirt
              </Link>
            </div>
          </li>
          <li className="mx-1">
            <div className="search-box  border rounded-3">
              <input
                type="text"
                placeholder="Search here!"
                className="search-input border rounded-3 p-2"
              />

              <i className="fas fa-search ps-3 pe-3"></i>
            </div>
          </li>
          {renderAuthListItems()}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
