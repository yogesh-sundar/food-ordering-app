import React, { useContext, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FoodappContext } from "../App";
import { Container } from "reactstrap";

function Cart() {
  let context = useContext(FoodappContext);
  let [totalPrice] = useState(0);
  const removeItem = (e) => {
    context.cart.splice(context.cart.indexOf(e), 1);
    context.setCartCount(context.cart.length);
  };
  return (
    <Container>
      <div className="product">
        {context.cart.length ? (
          <>
            <h2>You have Ordered</h2>

            {context.cart.map((list, index) => {
              totalPrice = totalPrice + parseInt(list.price);
              return (
                <div className="product-item" key={index}>
                  <div className="product-details">
                    <h4>{list.name}</h4>
                    <div className="product-price">
                      <FaRupeeSign />
                      {list.price}
                    </div>
                    <div className="product-description">
                      {list.description}
                    </div>
                    <button
                      className="product-button"
                      onClick={() => {
                        removeItem(list);
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                  <div className="product-image">
                    <img src={list.image} alt={list.name}></img>
                  </div>
                </div>
              );
            })}
            <div className="cart-wrapper">
              <div className="cart-total">Total Price:{totalPrice}</div>
              <Link to="/">
                <button
                  className="place-order-button"
                  onClick={() => {
                    context.setCart([]);
                    context.setCartCount(0);
                  }}
                >
                  Place Order
                </button>
              </Link>
            </div>
          </>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </Container>
  );
}

export default Cart;
