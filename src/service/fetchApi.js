const fetchWallet = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  return (json);
  // return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default fetchWallet;

// segui exemplo aula 15.3
