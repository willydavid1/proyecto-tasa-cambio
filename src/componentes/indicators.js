import React from 'react'

export default function Indicators ({ indicatorsValues }) {
  return (
    <div className='mb-5'>
      <div className='table-responsive container tabla'>
        <h5 className='text-center'>
          Indicadores Hoy {indicatorsValues?._timestamp?.fecha_corta} 💹〽
        </h5>
        <table className='table table-bordered mb-0'>
          <thead>
            <tr>
              <th>pesos a dolares:</th>
              <th>oro:</th>
              <th>pesos a bolivares:</th>
              <th>precio del dolar en venezuela:</th>
              <th>precio del euro en venezuela:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{indicatorsValues?.USDCOL?.ratecash}</td>
              <td>{indicatorsValues?.GOLD?.rate} oz</td>
              <td>{indicatorsValues?.COL?.efectivo}</td>
              <td>{indicatorsValues?.USD?.transferencia}bs x $</td>
              <td>{indicatorsValues?.EUR?.transferencia}bs x euro</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
