import { createContext } from "react";
import useTrendingCoins from "../hooks/useTrendingCoins";
import useCoinMarket from "../hooks/useCoinMarket";
export const CryptoCoinContext = createContext();

export const CryptoCoinContextProvider = ({ children }) => {
  const { trendingCoins, isLoading } = useTrendingCoins();

  const { coinMarketDetail } = useCoinMarket();

  return (
    <CryptoCoinContext.Provider
      value={{ trendingCoins, isLoading, coinMarketDetail }}
    >
      {children}
    </CryptoCoinContext.Provider>
  );
};
