import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Pizza from "./Components/Pizza";
import Home from "./Components/Home";
import Burger from "./Components/Burger";
import Cart from "./Components/Cart";

export const FoodappContext = React.createContext();
const link = "https://fod-app.herokuapp.com/food";
function App() {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(cart.length);

  const foodData = async () => {
    let data = await axios.get(`${link}`);
    setItem(data.data);
    console.log(data);
  };

  useEffect(() => {
    foodData();
  }, []);

  return (
    <BrowserRouter>
      
        <FoodappContext.Provider
          value={{
            item,
            setItem,
            cart,
            setCart,
            cartCount,
            setCartCount,
            link,
          }}
        >
          <Header />
          <Switch>
            <Route path="/pizza">
              <Pizza />
            </Route>
            <Route path="/burger">
              <Burger />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </FoodappContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;
