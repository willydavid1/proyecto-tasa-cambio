import React, { useCallback, useRef } from 'react'
import Indicators from './indicators'
import Loader from './loader'
import { useIndicators } from './hooks/useIndicators'
import './styles/base.css'

function CurrencyExchanges () {
  const {
    exchangeRate,
    setExchangeRate
  } = useIndicators()
  const inputEl = useRef(null)

  function handleChangeValue (e) {
    if (e.target.name === 'quantity' && !(/^\d*$/.test(e.target.value))) return
    setExchangeRate({ ...exchangeRate, [e.target.name]: e.target.value })
  }

  const handleClickSeparator = (separator) => {
    setExchangeRate({ ...exchangeRate, separator, quantity: formatNumber(exchangeRate.quantity?.toString().replace(/,|\./g, ''), separator) })
  }

  const formatNumber = useCallback((number = '', separator = '') => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }, [])

  function getDescriptions (value) {
    switch (value) {
      case 'pesosadolar':
        return { label: 'Cuantos pesos quieres pasar a dólares?', from: 'pesos', to: 'dólares' }
      case 'pesosabs':
        return { label: 'Cuantos pesos quieres pasar a bs', from: 'pesos', to: 'bs' }
      case 'bsadolar':
        return { label: 'Cuantos bs quieres pasar a dólares', from: 'bs', to: 'dólares' }
      case 'bsapesos':
        return { label: 'Cuantos bs quieres pasar a pesos', from: 'bs', to: 'pesos' }
      case 'dolaresapesos':
        return { label: 'Cuantos dólares quieres pasar a pesos', from: 'dólares', to: 'pesos' }
      default:
        break
    }
  }

  const getTheConversion = (type, quantityInt, customRate) => {
    switch (type) {
      case 'pesosadolar':
        return { conversion: (quantityInt / (customRate || exchangeRate.data.USDCOL.ratecash)).toFixed(0), exchangeRateValue: exchangeRate.data.USDCOL.ratecash }
      case 'pesosabs':
        return { conversion: (quantityInt / (customRate || exchangeRate.data.COL.efectivo)).toFixed(0), exchangeRateValue: exchangeRate.data.COL.efectivo }
      case 'bsadolar':
        return { conversion: (quantityInt / (customRate || exchangeRate.data.USD.transferencia)).toFixed(0), exchangeRateValue: exchangeRate.data.USD.transferencia }
      case 'bsapesos':
        return { conversion: (quantityInt * (customRate || exchangeRate.data.COL.efectivo)).toFixed(0), exchangeRateValue: exchangeRate.data.COL.efectivo }
      case 'dolaresapesos':
        return { conversion: (quantityInt * (customRate || exchangeRate.data.USDCOL.ratecash)).toFixed(0), exchangeRateValue: exchangeRate.data.USDCOL.ratecash }
      default:
        break
    }
  }

  function renderExchangeRateResults () {
    const quantityInt = parseInt(exchangeRate.quantity?.toString().replace(/,|\./g, ''))
    const formattedCurrency = exchangeRate.quantity.toString().includes(exchangeRate.separator) ? exchangeRate.quantity : formatNumber(exchangeRate.quantity, exchangeRate.separator)

    return (
      <>
        <p>
          Tus {formattedCurrency} {getDescriptions(exchangeRate.type)?.from} son &nbsp;
          {formatNumber(getTheConversion(exchangeRate.type, quantityInt)?.conversion, exchangeRate.separator)} {getDescriptions(exchangeRate.type)?.to} 💲💵 el
          cambio promedio esta en &nbsp;
          <input
            type='Number'
            className='inputModificadorTasaCambio'
            placeholder={getTheConversion(exchangeRate.type, quantityInt)?.exchangeRateValue}
            value={exchangeRate.customRate}
            name='customRate'
            onChange={handleChangeValue}
          />
        </p>

        {
          exchangeRate.customRate && (
            <div className='mt-3 p-3 bg-success text-white'>
              Tus {formattedCurrency} {getDescriptions(exchangeRate.type)?.from} son &nbsp;
              {getTheConversion(exchangeRate.type, quantityInt, exchangeRate.customRate)?.conversion} {getDescriptions(exchangeRate.type)?.to} 💵 con tu nueva tasa
              personalizada de {exchangeRate.customRate}
            </div>
          )
        }
      </>
    )
  }

  return (
    <>
      <div className='base__contenido container-fluid color pb-3'>
        <h1 className='h3 text-center'>
          Bienvenido aquí podrás saber cuánto vale tu dinero en otros países -
          online
        </h1>
        <div className='separador' />
        <p>
          Aquí sabrás tu tasa de conversión y saber cuánto vale tu dinero en
          otros países (Con una tasa real o tu propia tasa de cambio), puedes
          sacar cuentas como:
        </p>
        <p>- Pesos colombianos a Dólares? (¿cuántos dólares son mis pesos?)</p>
        <p>
          - Pesos colombianos a bolívares Soberanos? (¿cuántos bs son mis
          pesos?)
        </p>
        <p>- Bolívares soberanos a dólares? (¿cuántos dólares son mis bs?)</p>
        <p>- Bolívares soberanos a pesos? (¿cuántos pesos son mis bs?)</p>
        <p>- Dólares a pesos? (¿cuántos pesos son mis dólares?)</p>
        <p>- Pronto más operaciones.</p>
      </div>

      {
        exchangeRate.isLoading && (<Loader />)
      }
      {
        exchangeRate.error && (
          <div className='p-3 mb-2 bg-danger text-white mt-5'>
            <p>Hubo un error y en este momento, intenta más tarde</p>
          </div>
        )
      }
      {
        (!exchangeRate.isLoading && !exchangeRate.error) && (
          <div className='container'>
            <h1>Que enviaras?</h1>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <label className='input-group-text' htmlFor='inputGroupSelect01'>
                  Tipo de cambio...
                </label>
              </div>
              <select
                value={exchangeRate.type}
                name='type'
                onChange={handleChangeValue}
                className='custom-select'
                id='inputGroupSelect01'
              >
                <option value='' disabled hidden>Selecciona un tipo de cambio.</option>
                <option value='pesosadolar'>Pesos a Dólares</option>
                <option value='pesosabs'>Pesos a bs</option>
                <option value='bsadolar'>Bolívares a Dólares</option>
                <option value='bsapesos'>Bolívares a pesos</option>
                <option value='dolaresapesos'>Dólares a pesos</option>
              </select>
            </div>

            {
              exchangeRate.type ? (
                <>
                  <p className='mb-1'>{getDescriptions(exchangeRate.type)?.label}</p>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>$</span>
                    </div>
                    <input
                      ref={inputEl}
                      type='text'
                      className='form-control'
                      value={exchangeRate.quantity}
                      name='quantity'
                      onFocus={(e) => setExchangeRate({ ...exchangeRate, [e.target.name]: e.target.value.toString().replace(/,|\./g, '') })}
                      onBlur={(e) => setExchangeRate({ ...exchangeRate, [e.target.name]: formatNumber(e.target.value, exchangeRate.separator) })}
                      onChange={handleChangeValue}
                      onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                          e.target.blur()
                        }
                      }}
                      autoFocus
                    />
                    <div class='input-group-append'>
                      <button class='btn btn-outline-primary' type='button' onClick={() => handleClickSeparator(exchangeRate.separator === ',' ? '.' : ',')}> Separador (<strong>{exchangeRate.separator}</strong>)</button>
                    </div>
                  </div>
                </>
              ) : 'No has seleccionado el tipo de cambio.'
            }

            {exchangeRate.quantity && renderExchangeRateResults()}
          </div>
        )
      }
      {exchangeRate.data && <Indicators indicatorsValues={exchangeRate.data} />}
    </>
  )
}

export default CurrencyExchanges
