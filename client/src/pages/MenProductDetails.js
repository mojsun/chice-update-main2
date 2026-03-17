import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../scss/pages/ProductDetails.scss";
import { useEffect } from "react";
import ProductDetailsRightMen from "../components/ProductDetailsRightMen/index";

function MenProductDetails() {
  const { menProductItems } = useParams();
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
    <div className="ProductDetails">
      {/* Desktop header */}
      <div className="ProductDetails-Header p-4 d-none d-lg-block">
        <h1>Details for {menProductItems}</h1>
        <p>
          <span className="text-primary fw-bold">Choice</span> is renowned for
          its unwavering commitment to delivering exceptional quality in its
          men's products. With a meticulous attention to detail and a passion
          for craftsmanship, every Choice item reflects the brand's dedication
          to excellence. From finely tailored suits to everyday essentials,
          Choice offers a diverse range of clothing and accessories that not
          only exude style but also stand the test of time. Each product
          undergoes rigorous quality control to ensure durability and comfort,
          making Choice the go-to destination for those who seek both
          sophistication and substance in their wardrobe choices. When you
          choose Choice, you're choosing a standard of quality that elevates
          your personal style and enhances your confidence with every wear.
        </p>
      </div>
      {/* Desktop/Laptop layout (unchanged) */}
      <div className="ProductDetails-Main d-none d-lg-flex flex-row mb-5">
        <div className="ProductDetails-Main-Left col-md-3 d-flex flex-column">
          <div className="ProductDetails-Main-Left-size p-4 ">
            <h4>Choose The Size You Want</h4>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle text-white"
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
                className="btn btn-primary dropdown-toggle text-white"
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
          {/* <div className="ProductDetails-Main-Left-image-man">
            <img src="../images/men4.png" alt="women-face"></img>
          </div> */}
        </div>
        <div className="ProductDetails-Main-Right col-md-8 bg-primary d-felx flex-row d-inline border rounded-4 shadow">
          <div className="product-card-container">
            <ProductDetailsRightMen
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              maxPrice={maxPrice}
            />
          </div>
        </div>
        <div className="col-md-1  "></div>
      </div>

      {/* Mobile/Tablet layout mirrors the women page small-screen structure */}
      <div className="ProductDetails-Mobile d-lg-none px-3 py-3 bg-light">
        {/* header moved on top */}
        <div className="my-3">
          <h3 className="mb-2">Details for {menProductItems}</h3>
          <p className="lh-base">
            <span className="text-primary fw-bold">Choice</span> is renowned for its unwavering commitment to delivering exceptional quality in its men's products. With a meticulous attention to detail and a passion for craftsmanship, every Choice item reflects the brand's dedication to excellence. From finely tailored suits to everyday essentials, Choice offers a diverse range of clothing and accessories that not only exude style but also stand the test of time. Each product undergoes rigorous quality control to ensure durability and comfort, making Choice the go-to destination for those who seek both sophistication and substance in their wardrobe choices.
          </p>
        </div>

        <div className="ProductDetails-Mobile-controls d-flex justify-content-between gap-3 mb-3">
          {/* Size */}
          <div>
            <h6 className="mb-2">Choose The Size You Want</h6>
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle text-white" data-bs-toggle="dropdown">Size</button>
              <ul className="dropdown-menu">
                <li><a href="#" className={`dropdown-item ${selectedSize === "small" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleSizeSelect("small"); }}>small</a></li>
                <li><a href="#" className={`dropdown-item ${selectedSize === "medium" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleSizeSelect("medium"); }}>medium</a></li>
                <li><a href="#" className={`dropdown-item ${selectedSize === "large" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); handleSizeSelect("large"); }}>large</a></li>
              </ul>
            </div>
          </div>
          {/* Color */}
          <div>
            <h6 className="mb-2">Choose The color You Want</h6>
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle text-white" data-bs-toggle="dropdown">Color</button>
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
          {/* Price */}
          <div>
            <h6 className="mb-2">Price Range: $0 - ${maxPrice}</h6>
            <input
              type="range"
              className="custom-range"
              id="price-range-men-mobile"
              min="0"
              max="400"
              step="50"
              value={maxPrice}
              onChange={handlePriceChange}
            />
          </div>
        </div>

        {/* Half-size cards list, centered */}
        <div className="ProductDetails-Mobile-list d-flex flex-column align-items-center gap-4">
          <div className="w-100" style={{ maxWidth: "22rem" }}>
            <ProductDetailsRightMen
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenProductDetails;
