import React from 'react'
import '../stylesheets/AccountsContainer.css'
import Account from './Account'

export const AccountsContainer = () => {
  return (
    <div className='AccountsContainer'>
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
    </div>
  )
}
