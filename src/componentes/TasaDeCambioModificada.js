import React from "react";

export default function TasaDeCambioModificada(props) {
  // destruturamos los props
  const { moneda_formateada, moneda, tasaPersonalizada, valor } = props;

  // moneda_formateada es la cantidad de dinero pero separada por . | 20.000
  // moneda es cantidad de dinero (input) | ejemplo 20mil pesos
  // tasaPersonalizada es el valor de la tasa que se reemplaza por la real
  // valor es el valor del tipo de cambio

  if (valor === "pesosadolar") {
    return (
      <div className="mt-3 p-3 bg-success text-white">
          Tus {moneda_formateada} pesos son:{" "}
          {(moneda / tasaPersonalizada).toFixed(2)} dolares 💲💵 con tu tasa
          personalizada de {tasaPersonalizada} que acabas de modificar.
      </div>
    );
  } else if (valor === "pesosabs") {
    return (
      <div className="mt-3 p-3 bg-success text-white">
          Tus {moneda_formateada} pesos son:{" "}
          {new Intl.NumberFormat().format(
            (moneda / tasaPersonalizada).toFixed(2)
          )}{" "}
          bolivares ✅ con tu tasa personalizada de {tasaPersonalizada} que
          acabas de modificar.
      </div>
    );
  } else if (valor === "bsadolar") {
    return (
      <div className="mt-3 p-3 bg-success text-white">
          Tus {moneda_formateada} bs son:{" "}
          {(moneda / tasaPersonalizada).toFixed(2)} dolares 💰💲 con tu tasa
          personalizada de {new Intl.NumberFormat().format(tasaPersonalizada)}{" "}
          que acabas de modificar.
      </div>
    );
  } else if (valor === "bsapesos") {
    return (
      <div className="mt-3 p-3 bg-success text-white">
          Tus {moneda_formateada} bs son:{" "}
          {new Intl.NumberFormat().format(
            (moneda * tasaPersonalizada).toFixed(0)
          )}{" "}
          pesos ✅ con tu tasa personalizada de{" "}
          {new Intl.NumberFormat().format(tasaPersonalizada)} que acabas de
          modificar.
      </div>
    );
  } else if (valor === "dolaresapesos") {
    return (
      <div className="mt-3 p-3 bg-success text-white">
          Tus {moneda_formateada} dolares son:{" "}
          {new Intl.NumberFormat().format(
            (moneda * tasaPersonalizada).toFixed(0)
          )}{" "}
          pesos colombianos✅ con tu tasa personalizada de{" "}
          {new Intl.NumberFormat().format(tasaPersonalizada)} que acabas de
          modificar.
      </div>
    )}

  return "";
}
