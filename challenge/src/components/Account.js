import React from 'react'
import '../stylesheets/Accounts.css'

export default function Account({tipoCuenta, nroCuenta, indexAccount, onClick }) {
  return (
    <button className='Accounts' onClick={() => onClick(indexAccount+5)}>
        <p>{tipoCuenta}</p>
        <p>{nroCuenta}</p>
    </button>
  )
}
