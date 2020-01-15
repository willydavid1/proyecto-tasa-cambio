import React from "react";
import Base from "./base.js"
import Menu from "./menu"
import Explicacion from "./explicacion"

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"; //importamos el BrowserRouter

function app(props) {
  return (
    <BrowserRouter>
          <Menu />
          <Route exact path="/proyecto-tasa-cambio/" component={Base} />
          <Route exact path="/" component={Base} />
          <Route exact path="/como-lo-hacemos" component={Explicacion} />
    </BrowserRouter>
  );
}

export default app;
