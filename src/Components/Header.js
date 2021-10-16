import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FoodappContext } from "../App";
import { Container } from "reactstrap";
import "../index.css";

function Header() {
  let context = useContext(FoodappContext);
  return (
    <Container>
      <div className="header">
        <div className="header-title">Food Ordering Portal</div>
        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart style={{ color: "darkgreen" }} className="icon"/>
          </Link>
          <span className="count">{context.cartCount}</span>
        </div>
      </div>
    </Container>
  );
}

export default Header;
