import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 기본값을 지정하는 것은 중요하다
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading</strong> :
        <select>
          {coins.map((coin) =>
            <option>
              {coin.name} ({coin.symbol}): ${
                coin.hasOwnProperty("quotes") ?
                  coin.quotes.hasOwnProperty("USD") ? coin.quotes.USD.price : null : null} USD
            </option>
          )}
        </select>}
    </div>
  );
}

export default App;
