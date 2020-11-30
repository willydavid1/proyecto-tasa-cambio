import React from 'react'
import CurrencyExchanges from './currencyExchanges.js'
import Menu from './menu'
import Info from './info'

import { BrowserRouter, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path='/proyecto-tasa-cambio/' component={CurrencyExchanges} />
      <Route exact path='/' component={CurrencyExchanges} />
      <Route exact path='/como-lo-hacemos' component={Info} />
    </BrowserRouter>
  )
}

export default App
