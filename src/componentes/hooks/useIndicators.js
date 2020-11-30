import { useState, useEffect } from 'react'

export const useIndicators = () => {
  const [exchangeRate, setExchangeRate] = useState({ data: null, error: null, isLoading: false, separator: ',', type: '', quantity: '', customRate: null })

  async function fetchData () {
    setExchangeRate({ ...exchangeRate, error: null, isLoading: true })
    try {
      const data = await (await fetch('https://s3.amazonaws.com/dolartoday/data.json')).json()
      setExchangeRate({ ...exchangeRate, data, isLoading: false })
    } catch (error) {
      setExchangeRate({ ...exchangeRate, error, isLoading: false })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    exchangeRate,
    setExchangeRate
  }
}
