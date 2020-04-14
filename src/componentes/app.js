import React from "react";
import Principal from "./Principal.js"
import Menu from "./menu"
import Explicacion from "./explicacion"

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"; //importamos el BrowserRouter

function app(props) {
  return (
    <BrowserRouter>
          <Menu />
          <Route exact path="/proyecto-tasa-cambio/" component={Principal} />
          <Route exact path="/" component={Principal} />
          <Route exact path="/como-lo-hacemos" component={Explicacion} />
    </BrowserRouter>
  );
}

export default app;
