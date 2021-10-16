import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FoodappContext } from "../App";
import { Container } from "reactstrap";

function Burger() {
  let context = useContext(FoodappContext);
  let [products, setProducts] = useState([]);

  const getProductsData = async () => {
    await axios.get(`${context.link}`).then((response) => {
      setProducts(response.data[1].subItemsData.subItems);
    });
  };
  useEffect(() => {
    getProductsData();
  }, [context]);

  return (
    <Container>
      <div className="product">
      <h2>Juicy Burgers</h2>
        {products.map((list, index) => {
          return (
            <div className="product-item" key={index}>
              <div className="product-details">
                <h4>{list.name}</h4>
                <div className="product-price">
                  <FaRupeeSign />
                  {list.price}
                </div>
                <div className="product-description">{list.description}</div>
                <button className="product-button"
                  onClick={() => {
                    context.cart.push(list);
                    context.setCartCount(context.cart.length);
                  }}
                >
                  Order Now
                </button>
              </div>
              <div className="product-image">
                <img
                  src={list.image}
                  alt={list.name}
                  width="150"
                  height="150"
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Burger;
