import React from "react";
// import { Link } from "react-router-dom";
import "../../scss/components/Footer.scss";

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
function Footer() {
  return (
    <footer className="w-100">
      {/* MOBILE + TABLET footer (visible < 1024px) */}
      <section id="footer-mobile" className="FooterMobile d-lg-none w-100">
        <div className="FooterMobile-inner">
          {/* Exclusive Offers */}
          <section className="mb-4">
            <h3 className="FooterMobile-title mb-2">Exclusive Offers</h3>
            <p className="FooterMobile-text mb-2">
              Discover exclusive offers that redefine luxury and savings in one delightful
              package.
            </p>
            <ul className="FooterMobile-list">
              <li><a href="#">Offers For Summer</a></li>
              <li><a href="#">Sales of the month</a></li>
              <li><a href="#">End Season Sales</a></li>
              <li><a href="#">Hollowin Sales</a></li>
            </ul>
          </section>

          {/* About Choice */}
          <section className="mb-4">
            <h3 className="FooterMobile-title mb-2">About Choice</h3>
            <p className="FooterMobile-text mb-1">Choice: Where Style Meets Individuality.</p>
            <p className="FooterMobile-text mb-1">Elevate Your Wardrobe with Choice.</p>
            <p className="FooterMobile-text">Unleash Your Fashion Freedom with Choice.</p>
          </section>

          {/* Interest + Email */}
          <section className="mb-4">
            <h3 className="FooterMobile-title mb-2">What styles are you interested?</h3>
            <div className="d-flex gap-3 mb-2 FooterMobile-tabs">
              <a href="/ProductListwomen" className="text-decoration-underline">Women</a>
              <a href="/ProductListmen" className="text-decoration-underline">Men</a>
            </div>
            <form className="d-flex flex-column flex-sm-row gap-2 align-items-sm-center">
              <input type="email" className="form-control" placeholder="Enter Your Email!" />
              <button className="btn btn-dark">Submit</button>
            </form>
          </section>

          {/* Contact */}
          <section className="mb-3">
            <h3 className="FooterMobile-title-sm">Contact with Us • Give us Feedback!</h3>
          </section>

          {/* Socials */}
          <section className="FooterMobile-social d-flex flex-wrap gap-3">
            <a className="FooterMobile-socialIcon" href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a className="FooterMobile-socialIcon" href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a className="FooterMobile-socialIcon" href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a className="FooterMobile-socialIcon" href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </section>
        </div>
      </section>

      {/* DESKTOP footer (visible ≥ 1024px) - unchanged */}
      <section className="Footer bg-info p-5 d-none d-lg-block">
        <section className="Footer-Header d-flex justify-content-between">
          <div className="Footer-Header-offers">
            <h2>Exclusive Offers</h2>
            <p>
              Discover exclusive offers that redefine luxury and savings in one
              delightful package.
            </p>
            <ul>
              <li>
                <a href="#">Offers For Summer</a>
              </li>
              <li>
                <a href="#">Sales of the month </a>
              </li>
              <li>
                <a href="#">End Seasone Sales</a>
              </li>
              <li>
                <a href="#">Hollowin Sales</a>
              </li>
            </ul>
          </div>

          <div className="Footer-Header-email me-7">
            <h2>What styles are you interested?</h2>

            <ul className="Footer-Header-email-details d-flex flex-row hstack gap-5 mt-4 list-unstyled me-3 ">
              <li>
                <a href="/ProductListwomen" className="text-decoration-none">
                  Women
                </a>
              </li>
              <li>
                <a href="/ProductListmen" className="text-decoration-none">
                  Men
                </a>
              </li>
            </ul>
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email!"
                ></input>
                <button className="btn btn-outline-secondary">Submit</button>
              </div>
            </form>
          </div>
        </section>
        <section className="Footer-Main d-flex flex-row justify-content-between">
          <div className="Footer-Main-AboutUs">
            <h2>About Choice</h2>
            <ul>
              <li className="list-unstyled mb-2">
                Choice: Where Style Meets Individuality.
              </li>
              <li className="list-unstyled mb-2">
                Elevate Your Wardrobe with Choice.
              </li>
              <li className="list-unstyled mb-2">
                Unleash Your Fashion Freedom with Choice.
              </li>
            </ul>
          </div>
          <div className="Footer-Main-ContactUs me-7 d-flex flex-column align-items-start ">
            <h3 className="ps-6">Contact with Us Give us FeedBack!</h3>

            <div className="footer-social text-center ps-3">
              <a href="#">
                <i className="fab fa-facebook fa-3x text-primary m-5"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter fa-3x text-primary m-5"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin fa-3x text-primary m-5"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram fa-3x text-primary m-5"></i>
              </a>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}
export default Footer;
