import React, { useState, useEffect } from 'react';
import { getAccounts } from '../js/api';
import '../stylesheets/AccountsContainer.css'
import '../stylesheets/Accounts.css'
import Account from './Account';

export const AccountsContainer = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const data = await getAccounts();
      setAccounts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPageAccounts = () => {
    const startIndex = currentPage * pageSize;
    return accounts.slice(startIndex, startIndex + pageSize);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {currentPage!=0 &&
        <Account 
          key={-1}
          tipoCuenta = {"<< Opciones anteriores"}
          onClick={handlePreviousPage}
        />
      }
      {getPageAccounts().map((account, index) => (
        <Account 
          key={index}
          tipoCuenta = {account.tipo_letras=="CC"?"Cuenta Corriente":"Cuenta de Ahorro"}
          nroCuenta = {"Nro: "+account.n}
          onClick={handlePreviousPage}
        />
      ))}
      {(getPageAccounts().length >= pageSize) &&
        <Account 
          key={6}
          tipoCuenta = {"Mas opciones >>"}
          onClick={handleNextPage}
        />
      }
    </div>
  );
};
