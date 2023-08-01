/*import { useEffect, useState } from 'react'

export function useGetUsedAccounts(accountIndex) {
  const [usedAccounts, setUsedAccounts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showNextButton, setShowNextButton] = useState(true)

  let filteredAccountsArray

  useEffect(() => {
    setLoading(true)
    fetch("https://api.npoint.io/97d89162575a9d816661")
      .then((response) => response.json())
      .then((data) => {
        filteredAccountsArray = data.cuentas.filter( account => {
          return ( (account.moneda == "$" || account.moneda == "u$s" ) && (account.tipo_letras == "CA" || account.tipo_letras == "CC" ) && account.n.replace(" ", "") )
        })
        let lastAccount = filteredAccountsArray?.slice(-1)[0]

        if(filteredAccountsArray.length==6) setUsedAccounts(filteredAccountsArray)
        else{
          let slicedAccountsArray = filteredAccountsArray?.slice(accountIndex,accountIndex+5)
          
          let lastUsedAccount = slicedAccountsArray?.slice(-1)[0]
          setShowNextButton(!(lastAccount == lastUsedAccount))
          setUsedAccounts(slicedAccountsArray)
        }
      })
      .finally(() => setLoading(false))
  }, []);

  
  const usedAccountsStack = []
  let additionalButtons = 0
  if(acountsArray){
    if(firstIndex>0){
      additionalButtons++
    }
    if( (acountsArray.length-(5+(4*firstIndex))) > (6-additionalButtons) ){
      additionalButtons++
    }
    for(let i=0; i<6-additionalButtons; i++){
      usedAccountsStack.push(
        acountsArray[firstIndex+i]
      )
    }
  }
  
  return { usedAccounts, loading, showNextButton} 
}
*/