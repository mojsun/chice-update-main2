import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/pages/ProductDetails.scss";
import { useEffect } from "react";
import ProductDetailsRightWomen from "../components/ProductDetailsRightWomen/index";

function ProductDetails() {
  const { womenProductItems } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [maxPrice, setMaxPrice] = useState(400);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handlePriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };
  return (
    <div className="ProductDetails mb-5">
      {/* Desktop/Laptop header */}
      <div className="ProductDetails-Header p-4 ms-4 d-none d-lg-block">
        <h1 className="mt-3 mb-4 ">Details for {womenProductItems}</h1>
        <p className="lh-lg">
          <span className="text-warning fw-bold">Choice</span> is a reputable
          clothing company known for its commitment to delivering high-quality
          fashion options for both men and women. With a passion for style and a
          dedication to craftsmanship, Choice has gained a strong following
          among fashion enthusiasts seeking timeless and on-trend apparel. Their
          extensive collection features a diverse range of clothing items, from
          classic essentials to cutting-edge designs, ensuring that every
          customer can find the perfect pieces to express their individuality
          and elevate their wardrobe. Choice's unwavering focus on quality,
          paired with a keen sense of customer satisfaction, makes them a go-to
          destination for those who value both style and substance in their
          clothing choices.
        </p>
      </div>

      {/* Desktop/Laptop layout (unchanged) */}
      <div className="ProductDetails-Main d-none d-lg-flex flex-row ">
        <div className="ProductDetails-Main-Left col-md-3 d-flex flex-column ms-5 mt45">
          <div className="ProductDetails-Main-Left-size p-4 ">
            <h4>Choose The Size You Want</h4>
            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                Size
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedSize === "small" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSizeSelect("small");
                    }}
                  >
                    small
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedSize === "medium" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSizeSelect("medium");
                    }}
                  >
                    medium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedSize === "large" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSizeSelect("large");
                    }}
                  >
                    large
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ProductDetails-Main-Left-color p-4">
            <h4>Choose The color You Want</h4>
            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                Color
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedColor === "black" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect("black");
                    }}
                  >
                    black
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedColor === "blue" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect("blue");
                    }}
                  >
                    blue
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedColor === "brown" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect("brown");
                    }}
                  >
                    brown
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedColor === "green" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect("green");
                    }}
                  >
                    green
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedColor === "white" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect("white");
                    }}
                  >
                    white
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedColor === "orange" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect("orange");
                    }}
                  >
                    orange
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedColor === "pink" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect("pink");
                    }}
                  >
                    pink
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ProductDetails-Main-Left-price p-4">
            <h5>
              Price Range: $<span id="range-value-min">0</span> - $
              <span id="range-value-max">{maxPrice}</span>
            </h5>
            <input
              type="range"
              className="custom-range"
              id="price-range"
              min="0"
              max="400"
              step="50"
              value={maxPrice}
              onChange={handlePriceChange}
            ></input>
          </div>
        </div>
        <div className="ProductDetails-Main-Right col-md-8  d-felx flex-row d-inline bg-warning boredr rounded-4 shadow ">
          <div className="product-card-container">
            <ProductDetailsRightWomen
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet layout (stacked as in screenshot) */}
      <div className="ProductDetails-Mobile d-lg-none">
        <div className="px-3 py-3 bg-light">
          {/* Header text moved to the top for mobile/tablet */}
          <div className="my-3">
            <h3 className="mb-2">Details for {womenProductItems}</h3>
            <p className="lh-base">
              <span className="text-warning fw-bold">Choice</span> is a reputable
              clothing company known for its commitment to delivering high-quality
              fashion options for both men and women. With a passion for style and a
              dedication to craftsmanship, Choice has gained a strong following among
              fashion enthusiasts seeking timeless and on-trend apparel. Their
              extensive collection features a diverse range of clothing items, from
              classic essentials to cutting-edge designs, ensuring that every customer
              can find the perfect pieces to express their individuality and elevate
              their wardrobe. Choice's unwavering focus on quality, paired with a keen
              sense of customer satisfaction, makes them a go-to destination for those
              who value both style and substance in their clothing choices.
            </p>
          </div>
          <div className="ProductDetails-Mobile-controls d-flex justify-content-between gap-3 mb-3">
            {/* Size dropdown */}
            <div>
              <h6 className="mb-2">Choose The Size You Want</h6>
              <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle text-white" data-bs-toggle="dropdown">Size</button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#"
                      className={`dropdown-item ${
                        selectedSize === "small" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSizeSelect("small");
                      }}
                    >
                      small
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`dropdown-item ${
                        selectedSize === "medium" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSizeSelect("medium");
                      }}
                    >
                      medium
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`dropdown-item ${
                        selectedSize === "large" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSizeSelect("large");
                      }}
                    >
                      large
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Color dropdown */}
            <div>
              <h6 className="mb-2">Choose The color You Want</h6>
              <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle text-white" data-bs-toggle="dropdown">Color</button>
                <ul className="dropdown-menu">
                  <li><a href="#" className={`dropdown-item ${selectedColor === "black" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleColorSelect("black"); }}>black</a></li>
                  <li><a href="#" className={`dropdown-item ${selectedColor === "blue" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleColorSelect("blue"); }}>blue</a></li>
                  <li><a href="#" className={`dropdown-item ${selectedColor === "brown" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleColorSelect("brown"); }}>brown</a></li>
                  <li><a href="#" className={`dropdown-item ${selectedColor === "green" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleColorSelect("green"); }}>green</a></li>
                  <li><a href="#" className={`dropdown-item ${selectedColor === "white" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleColorSelect("white"); }}>white</a></li>
                  <li><a href="#" className={`dropdown-item ${selectedColor === "orange" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleColorSelect("orange"); }}>orange</a></li>
                  <li><a href="#" className={`dropdown-item ${selectedColor === "pink" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleColorSelect("pink"); }}>pink</a></li>
                </ul>
              </div>
            </div>
            {/* Price range */}
            <div>
              <h6 className="mb-2">Price Range: $0 - ${maxPrice}</h6>
              <input
                type="range"
                className="custom-range"
                id="price-range-mobile"
                min="0"
                max="400"
                step="50"
                value={maxPrice}
                onChange={handlePriceChange}
              />
            </div>
          </div>

          {/* Product cards list */}
          <div className="ProductDetails-Mobile-list d-flex flex-column align-items-center gap-4">
            {/* Reuse the same right component for a single card preview if needed */}
            <div className="w-100" style={{ maxWidth: "22rem" }}>
              <ProductDetailsRightWomen
                selectedSize={selectedSize}
                selectedColor={selectedColor}
                maxPrice={maxPrice}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
