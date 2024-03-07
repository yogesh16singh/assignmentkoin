import { useContext } from "react";
import { TrendingContext } from "../../context/TrendingContext";
import { BiSolidUpArrow } from "react-icons/bi";

import { H2 } from "../shared/Typography";
import clsx from "clsx";

import { formatPercentage, PositiveTrend } from "../../utils";

const TrendingSidebar = () => {
  const { trendingCoins } = useContext(TrendingContext);

  const sidebarTrendingCoinColumn = trendingCoins?.slice(0, 3);

  return (
    <div className="bg-white rounded-lg max-w-md p-4 my-4">
      <H2 value={"Trending Coins (24h)"} />
      <div className="flex flex-col">
        {sidebarTrendingCoinColumn.map((coin) => (
          <div
            className="flex justify-between items-center py-2"
            key={coin.item.id}
          >
            <span className="flex gap-2 ">
              <img
                src={coin?.item.thumb}
                alt="coin-1"
                className="h-5 w-5 object-contain"
              />
              <span className="text-sm uppercase font-semibold tracking-tight">
                {coin?.item.symbol}
              </span>
            </span>
            {
              <span
                className={clsx(
                  PositiveTrend(coin?.item.data.price_change_percentage_24h.usd)
                    ? "bg-green-100 text-green-500"
                    : "bg-red-100 text-red-500",
                  `py-0.5 w-20 px-1 text-sm font-medium rounded-md flex items-center justify-center gap-1`,
                )}
              >
                <BiSolidUpArrow
                  className={clsx(
                    "text-xs",
                    PositiveTrend(
                      coin?.item.data.price_change_percentage_24h.usd,
                    )
                      ? ""
                      : "rotate-180",
                  )}
                />
                {formatPercentage(
                  coin?.item.data.price_change_percentage_24h.usd,
                )}
                %
              </span>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSidebar;
