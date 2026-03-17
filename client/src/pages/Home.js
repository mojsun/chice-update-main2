import "intersection-observer"; // Import the intersection-observer polyfill
import React from "react";
import { useEffect } from "react";

import CategoryMenu from "../components/CategoryMenu";
import { useState } from "react";
import "../scss/pages/home.scss";
import ChatWindow from "../components/chat/index";
import ChatButton from "../components/ChatButton/index";
import "../assets/js/chat";
import HandleScroll from "../assets/js/scroll";
import "../assets/js/popup-model";
export default function Home() {
  //****for making animation to start after that user scroll 20% of the height
  useEffect(() => {
    // Call the handleScroll function when the page loads
    HandleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", HandleScroll);
    };
  }, []); // Empty dependency array to run this effect only once

  //**** for having the minichat opens and closes
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <section className="Popup-Model">
        <div className="Popup-Model-modal-container " id="modal-container">
          <div className="Popup-Model-modal d-flex flex-column ">
            <span
              className="close-button close-button-icon align-self-start"
              id="close-button"
            >
              &times;
            </span>
            <h1 className="p-1">Give 20$ ,Get 20$</h1>
            <h3 className="m-5">Refer friend and you both get discount</h3>
            <form className="Popup-Model-modal-form" id="modal-form">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <button type="submit">Submit</button>
              <div
                id="submitted-message"
                className="submitted-Message text-primary"
              >
                Form Submitted
              </div>
            </form>
          </div>
          <div className="Popup-Model-modal-2 ">
            <img
              src="./images/homepage-pictures/section-popular/image11.jpeg"
              alt="women in beautifull black dress"
            ></img>
          </div>
        </div>
      </section>
      <section className="headerVideo">
        <video className="headerVideo_content" autoPlay muted loop playsInline>
          <source src="/videos/header-video.mp4" type="video/mp4"></source>
        </video>
        <div className="headerVideo_text">
          {/* Header overlay text removed per request */}
        </div>
      </section>

      {/* Desktop/Laptop Category section (unchanged) */}
      <section className="CategoryMenu d-none d-lg-block">
        <h1 className="text-center mt-7">Choose By Category</h1>
        <CategoryMenu />
        <img src="./images/woman6.png" alt="women-face" className="CategoryMenu-women"></img>
        <img src="./images/man2.png" alt="men-face" className="CategoryMenu-men "></img>
      </section>

      {/* Mobile/Tablet Category section - smaller circles in one horizontal line */}
      <section className="CategoryMenuMobile d-lg-none">
        <h1 className="text-center mt-7">Choose By Category</h1>
        <div className="CategoryMenuMobile-inner">
          <CategoryMenu />
          <img src="./images/woman6.png" alt="women-face" className="CategoryMenu-women"></img>
          <img src="./images/man2.png" alt="men-face" className="CategoryMenu-men "></img>
        </div>
      </section>

      <section className="container">
        <img
          src="./images/homepage-pictures/section-picture/image7.jpeg"
          alt="model-women-one"
          className="left-to-right-1"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image3.jpeg"
          alt="model-men-one"
          className="right-to-left-1"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image4.jpeg"
          alt="model-women-one"
          className="left-to-right-2"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image17.jpeg"
          alt="model-men-one"
          className="right-to-left-2"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image8.jpeg"
          alt="model-women-one"
          className="left-to-right-3"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image5.jpeg"
          alt="model-men-one"
          className="right-to-left-3"
        ></img>
      </section>

      <section className="latest-Trend ">
        <div className="latest-shell">
          <div className="latest-inner">
            {/* Headline card */}
            <section className="latest-card latest-card--hero">
              <h2 className="latest-headline">
                Get The Latest Trends At Our Affordable Prices
              </h2>
              <a href="/ProductListwomen" className="latest-products-btn" aria-label="View products">Products</a>
            </section>

            {/* Elegance Suits */}
            <article className="latest-card">
              <h3 className="latest-card-title">Elegance Suits</h3>
              <p className="latest-card-text">
                Elegance Suits embodies sophistication and style with its meticulously tailored suits, designed to
                elevate your wardrobe. Each suit exudes timeless elegance, crafted from premium materials and
                showcasing impeccable attention to detail. Whether for formal occasions or daily refinement, Elegance
                Suits ensures you make a lasting impression with every wear.
              </p>
              <h3 className="latest-showmore">show more</h3>
            </article>

            {/* Formal Clothes */}
            <article className="latest-card">
              <h3 className="latest-card-title">Formal Clothes</h3>
              <p className="latest-card-text">
                Formal Clothes is your go-to destination for impeccable attire that makes a statement at every formal
                event. Our exquisite collection features finely tailored suits, tuxedos, and evening gowns, perfect for
                weddings, galas, and black-tie affairs. With a focus on quality, fit, and design, Formal Clothes ensures
                you radiate confidence and sophistication on every formal occasion.
              </p>
              <h3 className="latest-showmore">show more</h3>
            </article>

            {/* Leather Jacket */}
            <article className="latest-card">
              <h3 className="latest-card-title">Leather Jacket</h3>
              <p className="latest-card-text">
                Leather Jackets at their finest! Our collection showcases premium leather jackets crafted with precision
                and style in mind. Whether you're seeking a classic biker look, a timeless bomber, or a contemporary
                design, our Leather Jackets offer both fashion-forward aesthetics and durability. Elevate your outerwear
                game with these versatile and iconic pieces that stand the test of time.
              </p>
              <h3 className="latest-showmore">show more</h3>
            </article>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Opinion layout - hidden on lg and above */}
      <section className="OpinionMobile lg:hidden">
        <div className="OpinionMobile-inner">
          <div className="OpinionMobile-top">
            <img
              src="./images/homepage-pictures/section-opinion/fabric-3.jpg"
              alt="fabric"
              className="OpinionMobile-top-image"
            />
            <div className="OpinionMobile-commas" aria-hidden>
              <span>“</span><span className="ms-1">”</span>
            </div>
            <div className="OpinionMobile-body">
              <img
                src="./images/homepage-pictures/section-opinion/opinion-man3.jpg"
                alt="author"
                className="OpinionMobile-face"
              />
              <div className="OpinionMobile-text">
                <h3 className="OpinionMobile-title">Choice Becomes Your Choice</h3>
                <p className="OpinionMobile-paragraph">
                  Choice becomes your ultimate fashion destination, where your unique style
                  finds a perfect match. We're offering you a curated selection of clothing.
                </p>
                <p className="OpinionMobile-author">Andrea-lawrence / Fashion-Artist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Opinion layout (unchanged) - hidden on small/medium */}
      <section className="Opinion d-none d-lg-block">
        <div className="container ps-8 pe-8 my-7">
          <div className=" d-flex col-md-12 justify-content-center">
            <div className="Opinion-image col-md-5">
              <img
                src="./images/homepage-pictures/section-opinion/fabric-3.jpg"
                alt="Picture1"
                className="w-100 h-100"
              />
            </div>
            <div className="Opinion-details d-flex align-items-center col-md-5">
              <div className="Opinion-details-image  col-md-5">
                <img
                  src="./images/homepage-pictures/section-opinion/opinion-man3.jpg"
                  alt="Picture1"
                  className="w-75 h-75 py-3"
                />
              </div>
              <div className="Opinion-details-quote col-md-5">
                <h3> Choice Becomes Your Choice</h3>
                <p>
                  Choice becomes your ultimate fashion destination, where your
                  unique style finds a perfect match. we're offering you
                  selection of clothing
                </p>
                <h6> Andrea-lawrence/Fashion-Artist</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular">
        <h1 className="popular-header text-center p-5 m-2">
          Most popular clothes of the week
        </h1>
        <div className="carousel slide" id="slider">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex">
                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image11.jpeg"
                    alt="Picture1"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image12.jpeg"
                    alt="Picture2"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image13.jpeg"
                    alt="Picture3"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="d-flex">
                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image15.jpeg"
                    alt="Picture1"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image9.jpeg"
                    alt="Picture2"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image16.jpeg"
                    alt="Picture3"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="d-flex">
                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image6.jpeg"
                    alt="Picture1"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image2.jpeg"
                    alt="Picture2"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image14.jpeg"
                    alt="Picture3"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#slider"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#slider"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <ChatButton onClick={toggleChat} isOpen={isChatOpen} />
      {isChatOpen && (
        <div className="chat-overlay">
          <ChatWindow onClose={toggleChat} />
        </div>
      )}
    </div>
  );
}
