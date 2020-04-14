import React from "react";

export default function Indicadores(props) {
  return (
    <div className="mb-5">
      <div className="table-responsive container tabla">
        <h5 className="text-center">
          Indicadores Hoy {props.indicadores._timestamp.fecha_corta} 💹〽
        </h5>
        <table className="table table-bordered mb-0">
          <thead>
            <tr>
              <th scope="col">pesos a dolares:</th>
              <th scope="col">oro:</th>
              <th scope="col">pesos a bolivares:</th>
              <th scope="col">precio del dolar en venezuela:</th>
              <th scope="col">precio del euro en venezuela:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.indicadores.USDCOL.ratecash}</td>
              <td>{props.indicadores.GOLD.rate} oz</td>
              <td>{props.indicadores.COL.efectivo}</td>
              <td>{props.indicadores.USD.transferencia}bs x $</td>
              <td>{props.indicadores.EUR.transferencia}bs x euro</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
