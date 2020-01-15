import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu color">
      <Link to="/proyecto-tasa-cambio/">Inicio</Link>
      <Link to="/como-lo-hacemos">Como lo hacemos?</Link>
    </nav>
  );
}
