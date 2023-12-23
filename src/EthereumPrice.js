// EthereumPrice.js

import React, { useState, useEffect } from 'react';

const EthereumPrice = () => {
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
        const data = await response.json();
        setEthPrice(data.USD);
      } catch (error) {
        console.error('Error fetching Ethereum price:', error);
      }
    };

    fetchEthPrice();
  }, []);

  return (
    <div className="ethereum-price">
      <h2>Current ETH Price:</h2>
      {ethPrice ? <p>{ethPrice} USD</p> : <p>Loading...</p>}
    </div>
  );
};

export default EthereumPrice;
