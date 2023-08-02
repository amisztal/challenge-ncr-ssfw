import React from 'react'
import '../stylesheets/Accounts.css'

export default function Account({tipoCuenta, nroCuenta, indexAccount, onClick, dataTestId }) {
  return (
    <button className='Accounts' data-testid={dataTestId} onClick={() => onClick(indexAccount+5)}>
      <p>{tipoCuenta}</p>
      <p>{nroCuenta}</p>
    </button>
  )
}
