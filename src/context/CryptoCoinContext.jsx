import { createContext } from "react";
import { useParams } from "react-router-dom";
import useTrendingCoins from "../hooks/useTrendingCoins";
import useCoinMarket from "../hooks/useCoinMarket";
export const CryptoCoinContext = createContext();

export const CryptoCoinContextProvider = ({ children }) => {
  const { id } = useParams();
  const { trendingCoins, isLoading } = useTrendingCoins();

  const { coinMarketDetail, description } = useCoinMarket(id);

  return (
    <CryptoCoinContext.Provider
      value={{ trendingCoins, isLoading, coinMarketDetail, description }}
    >
      {children}
    </CryptoCoinContext.Provider>
  );
};
