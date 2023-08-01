
import React, { useEffect, useState } from 'react'
import '../stylesheets/AccountsContainer.css'
import '../stylesheets/Accounts.css'
import { Accounts } from './Accounts';
import { useGetUsedAccounts }  from '../hooks/useGetUsedAccounts'
import { getAccounts }  from '../js/api'

export const AccountsContainerOld = () => {
  const [accountIndex, setAccountIndex] = useState(0)

  const { usedAccounts, loading, showNextButton } = useGetUsedAccounts(accountIndex)
  
  console.log(usedAccounts)
  console.log(accountIndex)

  useEffect(() => {

  }, [])

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
          indexAccount = {accountIndex}
          onClick={(setAccountIndex)}
        />
      }
    </div>
  )

}
