import React, { useState, useEffect } from 'react';
import { getAccounts } from '../js/api';
import '../stylesheets/AccountsContainer.css'
import '../stylesheets/Accounts.css'
import Account from './Account';

export const AccountsContainer = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 4;
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const data = await getAccounts();
    setAccounts(data);
  };

  const getPageAccounts = () => {
    if(accounts.length===6) return accounts
    if(currentPage===0) return accounts.slice(0, 5)
    else{
      const startIndex = currentPage * pageSize +1;
      return accounts.slice(startIndex, startIndex + pageSize);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleAccountClick = (accountNumber) => {
    const selectedAcc = accounts.find((account) => account.n === accountNumber);
    setSelectedAccount(selectedAcc);
  };

  const handleBackToButtons = () => {
    setSelectedAccount(null);
  };

  return (
    <div>
      {selectedAccount?(
        <>
          <div data-testid='account-details'>
            <p>{"Saldo de la Cuenta: "+selectedAccount.saldo}</p>
            <p>{"Tipo de la Cuenta: "+selectedAccount.tipo_letras==="CC"?"Cuenta Corrienteen ":"Caja de Ahorro en "}{selectedAccount.moneda==="$"?"Pesos":"Dolares"}</p>
            <p>{"Nrto: "+selectedAccount.n}</p>
          </div>
        </>
      ):(
        <>
          {currentPage!==0 &&
            <Account
              key={-1}
              tipoCuenta = {"<< Opciones anteriores"}
              onClick={handlePreviousPage}
              dataTestId='previous-page-button'
            />
          }
          {getPageAccounts().map((account, index) => (
            <Account
              key={index}
              tipoCuenta = {account.tipo_letras==="CC"?"Cuenta Corriente":"Cuenta de Ahorro"}
              nroCuenta = {"Nro: "+account.n}
              onClick={() => handleAccountClick(account.n)}
              dataTestId='account-button' 
            />
          ))}
          {(accounts.length > 5+(currentPage*pageSize)) &&
            <Account
              key={6}
              tipoCuenta = {"Mas opciones >>"}
              onClick={handleNextPage}
              dataTestId='next-page-button'
            />
          }
        </>
      )}
      <div>
        <button className='ExitButton' data-testid='exit-button' onClick={handleBackToButtons}>Salir</button>
      </div>
    </div>
  );
};
