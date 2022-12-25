import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorite from "./pages/Favorite";
import { useSelector } from "react-redux";
import "assets/style.css"

const App = () => {
  const isDark = useSelector((state) => state.mode.isDark);

  useEffect(() => {
    window.document.title = "SHOW BOOKS.";
  }, []);

  return (
    <div className={`App ${isDark && "dark"}`}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/product/:id">
          <Product />
        </Route>

        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
