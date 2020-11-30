import React from 'react'
import { Link } from 'react-router-dom'

export default function Info () {
  return (
    <div className='container'>
      <h3 className='mt-5'>
        Bienvenido en esta App puedes saber cuánto equivale tu dinero en otros países, incluso saber cuánto vale tu dinero en dólares u otras monedas.
      </h3>
      <p>
        Sacamos los indicadores de DolarToday.com, la cual se actualiza cada 10 minutos con datos reales y exactos, Ya con esos indicadores la App los recibe y saca las cuentas basados en esos indicadores, no recopilamos ningún dato que ingreses porque todo corre en el navegador.
      </p>
      <p>Las tasas e indicadores son solo de uso referencial.</p>

      <Link to='/proyecto-tasa-cambio/'>Aquí puedes ver algunos indicadores (tabla ubicada en la parte inferior)</Link>
    </div>
  )
}
