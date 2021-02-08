import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "scenes/Home";
import Cart from "scenes/Cart";
import Product from "scenes/Product";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" component={Product} />
      <Redirect to="/" />
    </Switch>
  );
}
