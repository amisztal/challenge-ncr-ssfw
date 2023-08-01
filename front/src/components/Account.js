import React from 'react'
import '../stylesheets/Accounts.css'

export default function Account({tipoCuenta, nroCuenta, onClick}) {


  return (
    <button className='Accounts' onClick={onClick}>
        <p>{tipoCuenta}</p>
        <p>{nroCuenta}</p>
    </button>
  )
}
