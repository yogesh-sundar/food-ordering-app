import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { FoodappContext } from "../App";
import { Container } from "reactstrap";

function Home() {
  let context = useContext(FoodappContext);
  return (
    <Container>
      <div className="home">
        {context.item.map((data, index) => {
          return (
            <Fragment key={index}>
              <Link to={`/` + data.name.toLowerCase()} className="home-item-link">
                <div className = "home-item">
                  <img className="home-item-image" src={data.image} alt={data.name} ></img>
                  <div className="home-item-name">{data.name}</div>
                </div>
              </Link>
            </Fragment>
          );
        })}
      </div>
    </Container>
  );
}

export default Home;
