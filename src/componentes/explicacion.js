import React from "react";
import { Link } from "react-router-dom";

export default function Explicacion(props) {
  return (
    <div className="container">
      <h3 className="mt-5">
      Gracias a esta aplicación puedes saber cuánto equivale tu dinero en Venezuela, por si te estas preguntando cuánto vale mi dinero es otros países? incluso saber cuánto vale tu dinero en dólares...
      </h3>
      <p>
      Sacamos los indicadores de DolarToday.com, la cual se actualiza cada 10 minutos con datos reales y exactos, Ya con esos indicadores el programa los recibe y saca las cuentas basados en esos indicadores, no recopilamos ningún dato que ingreses así que puedes estar tranquil@
      </p>
      <p>Las tasas e indicadores son solo de uso referencial...</p>

      <Link to="/">Aquí puedes ver algunos indicadores (parte de abajo)</Link>
    </div>
  );
}
