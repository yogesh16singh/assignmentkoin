import { createContext } from "react";
import useTrendingCoins from "../hooks/useTrendingCoins";
export const TrendingContext = createContext();

export const TrendingContextProvider = ({ children }) => {
  const { trendingCoins, isLoading } = useTrendingCoins();
  return (
    <TrendingContext.Provider value={{ trendingCoins, isLoading }}>
      {children}
    </TrendingContext.Provider>
  );
};
