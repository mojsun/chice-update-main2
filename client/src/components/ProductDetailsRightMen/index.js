import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../scss/pages/ProductDetails.scss";
import { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS, UPDATE_CURRENT_PRODUCTS } from "../../utils/actions";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import Auth from "../../utils/auth";
function ProductDetailsRightMen({ selectedSize, selectedColor, maxPrice }) {
  const { menProductItems } = useParams();
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [state, dispatch] = useStoreContext();
  const { cart } = state;
  const { loading, data: productsData } = useQuery(QUERY_ALL_PRODUCTS);
  useEffect(() => {
    if (productsData) {
      dispatch({
        type: UPDATE_PRODUCTS,
        productsData: productsData.products,
      });
    } else if (!loading) {
      idbPromise("products", "get").then((productsData) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          productsData: productsData,
        });
      });
    }
  }, [productsData, loading, dispatch]);
  // const handleClick = (id) => {
  //   dispatch({
  //     type: UPDATE_CURRENT_PRODUCTS,
  //     currentproductsData: id,
  //   });
  // };
  console.log("productsData:", productsData);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (
    !productsData ||
    !productsData.products ||
    productsData.products.length === 0
  ) {
    return <p>No products available.</p>;
  }

  const renderMenProductCards = () => {
    let filteredProducts = productsData.products.filter(
      (product) =>
        product.name === menProductItems && product.category === "men"
    );

    if (selectedSize) {
      filteredProducts = filteredProducts.filter(
        (product) => product.size === selectedSize
      );
    }

    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === selectedColor
      );
    }

    if (typeof maxPrice === "number") {
      filteredProducts = filteredProducts.filter((product) => {
        const priceValue = Number(product.price);
        return !Number.isNaN(priceValue) && priceValue <= maxPrice;
      });
    }

    if (filteredProducts.length === 0) {
      return <p>No products available for this category.</p>;
    }

    const addToCart = (product) => {
      const cartProduct = {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.size,
        color: product.color,
      };

      const itemInCart = cart.find(
        (cartItem) => cartItem._id === cartProduct._id
      );

      if (itemInCart) {
        const newQuantity = parseInt(itemInCart.purchaseQuantity) + 1;

        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: cartProduct._id,
          purchaseQuantity: newQuantity,
        });

        idbPromise("cart", "put", {
          ...itemInCart,
          purchaseQuantity: newQuantity,
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...cartProduct, purchaseQuantity: 1 },
        });

        idbPromise("cart", "put", { ...cartProduct, purchaseQuantity: 1 });
      }
    };
    return filteredProducts.map((product) => (
      <div
        className="card p-4 m-4 d-inline-block border rounded-3 shadow"
        key={product._id}
      >
        <Link to={`/products/${product._id}`}>
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="card-imge border rounded-2"
          />
        </Link>
        <div className="card-body">
          <ul className="list-unstyled">
            <li>name: {product.name}</li>
            <li>
              price: <strong>${product.price}</strong>
            </li>
            <li>color: {product.color}</li>
            <li>size: {product.size}</li>
          </ul>
          <button
            onClick={() => addToCart(product)}
            className=" card-body-button btn btn-primary border rounded-3 p-2 w-100 shadow d-flex justify-content-center align-items-center gap-2"
          >
            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
            <span className="text-decoration-none text-white">
              Add to cart
            </span>
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {showLoginAlert && (
        <div className="alert alert-warning d-flex justify-content-between align-items-center">
          <span>Please log in before adding items to your cart.</span>
          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        </div>
      )}
      {renderMenProductCards()}
    </div>
  );
}

export default ProductDetailsRightMen;
