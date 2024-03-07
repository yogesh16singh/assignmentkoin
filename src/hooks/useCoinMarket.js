import { useEffect, useState } from "react";

const useCoinMarket = () => {
  const [coinMarketDetail, setCoinMarketDetail] = useState([]);

  useEffect(() => {
    const fetchCoinMarket = async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=2`,
      );

      const data = await response.json();
      setCoinMarketDetail(data);
    };

    fetchCoinMarket();
  }, []);

  return { coinMarketDetail };
};

export default useCoinMarket;
