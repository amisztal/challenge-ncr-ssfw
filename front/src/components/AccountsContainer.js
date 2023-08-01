import React, { useEffect, useState } from 'react'
import '../stylesheets/AccountsContainer.css'
import Account from './Account'
import { useGetUsedAccounts }  from '../hooks/useGetUsedAccounts'

export const AccountsContainer = () => {
  let accountIndex=0

  const { usedAccounts, loading, showNextButton } = useGetUsedAccounts(accountIndex)

  console.log(usedAccounts)
  return (
    <div className='AccountsContainer'>
      {loading && <p>Loading...</p>}
      {(accountIndex==true && usedAccounts)  &&
        <Account
          key={-1}
          tipoCuenta = {"<< Opciones anteriores"}
        />
      }
      {usedAccounts?.map((button, index) => (
        <Account
          key={index}
          tipoCuenta = {button.tipo_letras}
          nroCuenta = {button.n}
        />
      ))}
      {(showNextButton && usedAccounts)  &&
        <Account
          key={6}
          tipoCuenta = {"Más opciones >>"}
          onClick={goNext()}
        />
      }
    </div>
  )

  function goNext(){
    console.log("hice click")
  }
}
