import React from 'react'
import './styles/loader.css'

function Loader () {
  return (
    <div className='d-flex justify-content-center align-self-center mt-5'>
      <div className='lds-ring '>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
