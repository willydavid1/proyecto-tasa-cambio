import React, { useState, useEffect } from "react";
import Indicadores from "./Indicadores"
// import { Link } from "react-router-dom"
import "./estilos/base.css";

function useIndicadores() {
  const [valor, setValor] = useState(""); //tipo de cambio
  const [moneda, setMoneda] = useState(""); //cantidad de dinero (input)
  const [indicadores, setIndicadores] = useState(false); //indicadores
  const [errorPeticion, setErrorPeticion] = useState(false); //errores en el estado

  async function obtenesIndicadores() {
    try {
      const respuesta = await fetch(
        "https://s3.amazonaws.com/dolartoday/data.json"
      );
      const data = await respuesta.json(); //INDICADORES DE DOLARTODAY
      setIndicadores(data);
      // console.log(data);

    } catch (error) {
      setErrorPeticion(error)
      // console.log(error)
    }
    
  }

  useEffect(() => {
    obtenesIndicadores();
  }, []);

  return {valor, setValor, moneda, setMoneda, indicadores, errorPeticion}

}

// creamos el componente plantilla base funcional que recibe por parametro los props los recibimos y los leemos con props.VALOR
function Base(props) {

  const {valor, setValor, moneda, setMoneda, indicadores, errorPeticion} = useIndicadores()

  function manejoCambio(event) {
    setValor(event.target.value);
  }

  function retornaValor(valor) {
    switch (valor) {
      case "pesosadolar":
        return "Cuantos pesos quieres pasar a dólares?";
      case "pesosabs":
        return "Cuantos pesos quieres pasar a bs";
      case "bsadolar":
        return "Cuantos bs quieres pasar a dólares";
      case "bsapesos":
        return "Cuantos bs quieres pasar a pesos";
      case "dolaresapesos":
        return "Cuantos dólares quieres pasar a pesos";
      default:
        break
    }
  }

  function input(valor) {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          type="text"
          className="form-control"
          value={moneda}
          onChange={e => {
              setMoneda(e.target.value);
          }}
        />
      </div>
    );
  }

  function sacarCuenta() {
    
    // pasamos la moneda a entera (lo que se escribe en el input) 
    const moneda_int = parseInt(moneda)
    const moneda_formateada = new Intl.NumberFormat().format(moneda_int)
    
    // este numero es realmente un numero o no es un numero? si no es un numero entero retorna true y si es un numero retorna false
    if (Number.isNaN(moneda_int)) {
      return (
        <div className="p-3 mb-2 bg-warning text-dark">
          <p>Parece que no estas escribiendo un número, por favor escribe un número</p>
        </div>
      );
    }

    if (valor === "pesosadolar") {
      return (
        <p>
          Tus {moneda_formateada} pesos son {(moneda / indicadores.USDCOL.ratecash).toFixed(2)} dolares 💲💵 el cambio promedio en efectivo esta en {indicadores.USDCOL.ratecash} pesos colombianos
        </p>
      );
    } else if (valor === "pesosabs") {
      return (
        <p>
          Tus {moneda_formateada} pesos son {(moneda / indicadores.COL.efectivo).toFixed(0)} bolivares ✅ la tasa de cambio esta en {indicadores.COL.efectivo}
        </p>
      );
    } else if (valor === "bsadolar") {
      return (
        <p>
          Tus {moneda_formateada} bolivares son {(moneda / indicadores.USD.transferencia).toFixed(2)} dolares 💰💲 el dolar en venezuela esta en {indicadores.USD.transferencia}
        </p>
      );
    } else if (valor === "bsapesos") {
      return (
        <p>
          Tus {moneda_formateada} bolivares son {(moneda * indicadores.COL.efectivo - 0.005).toFixed(2)} pesos ✅ la tasa de bolivares a pesos oscila en un aproximado de {indicadores.COL.efectivo - 0.008}
        </p>
      );
    } else if (valor === "dolaresapesos") {
      return (
        <p>
          Tus {moneda_formateada} dolares son {new Intl.NumberFormat().format( (moneda * indicadores.USDCOL.ratecash).toFixed(2) )} pesos colombianos✅ la tasa de dolares a pesos oscila en un aproximado de {indicadores.USDCOL.ratecash}
        </p>
      );
    } 

  }

  // manejo el error
  if (errorPeticion) {
    return (
      <div className="p-3 mb-2 bg-danger text-white mt-5">
        <p>Hubo un error y en este momento, intenta más tarde</p>
      </div>
    );
  }

  return (
    <React.Fragment>

      <div className="base__contenido container-fluid color pb-3">
        <h1 className="h3 text-center">
        Bienvenido aquí podrás saber cuánto vale tu dinero en otros países - online
        </h1>
        <div className="separador"></div>
        <p>Aquí sabrás tu tasa de conversión y saber cuánto vale tu dinero en otros países, puedes sacar cuentas como:</p>
        <p>- Pesos colombianos a Dólares? (¿cuántos dólares son mis pesos?)</p>
        <p>
        - Pesos colombianos a bolívares Soberanos? (¿cuántos bs son mis pesos?)
        </p>
        <p>- Bolívares soberanos a dólares? (¿cuántos dólares son mis bs?)</p>
        <p>- Bolívares soberanos a pesos? (¿cuántos pesos son mis bs?)</p>
        <p>- Dólares a pesos? (¿cuántos pesos son mis dólares?)</p>
        <p>- Pronto más operaciones.</p>
      </div>

      <div className="container">
        <h1>Que enviaras?</h1>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Tipo de cambio...
            </label>
          </div>
          <select
            value={valor}
            onChange={manejoCambio}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="">Elije...</option>
            <option value="pesosadolar">Pesos a Dólares</option>
            <option value="pesosabs">Pesos a bs</option>
            <option value="bsadolar">Bolívares a Dólares</option>
            <option value="bsapesos">Bolívares a pesos</option>
            <option value="dolaresapesos">Dólares a pesos</option>
          </select>
        </div>
    
        {/* input para colocar, los numeros si ya definio el tipo de cambio*/}
        {valor && retornaValor(valor)}
        {valor ? input(valor) : "No has seleccionado nada"}

        {/* si ya coloco la cantidad de dinero, llama a sacarCuenta */}
        {moneda && sacarCuenta()}

      </div>

      { indicadores && <Indicadores indicadores={indicadores} />}
      
    </React.Fragment>
  );
}

export default Base;
