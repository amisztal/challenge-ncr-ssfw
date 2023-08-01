export const getAccounts = async () => {
  const response = await fetch("https://api.npoint.io/97d89162575a9d816661");
  const data = await response.json();
  let fileteredData = data.cuentas.filter( account => {
    return ( (account.moneda == "$" || account.moneda == "u$s" ) && (account.tipo_letras == "CA" || account.tipo_letras == "CC" ) && account.n.replace(" ", "") )
  })
  return fileteredData;

};