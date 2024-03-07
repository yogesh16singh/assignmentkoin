import { useEffect, useState } from "react";

const useTrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending",
        );
        const data = await response.json();
        setTrendingCoins(data.coins);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins", error);
      }
    };
    fetchTrendingCoins();
  }, []);

  return { trendingCoins, isLoading };
};

export default useTrendingCoins;
