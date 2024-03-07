import { IoMdInformationCircle } from "react-icons/io";
import { H3 } from "../shared/Typography";

import clsx from "clsx";
import {
  PositiveTrend,
  formatDateAllTime,
  formattedNum,
} from "../../utils/index";
const Fundamentals = ({ coinMarketDetail }) => {
  const volumeIsToMarketCap = (
    coinMarketDetail[0]?.total_volume / coinMarketDetail[0]?.market_cap
  )?.toFixed(2);

  return (
    <>
      <span className="inline-flex items-center gap-2">
        <H3 value="Fundamentals" />
        <IoMdInformationCircle
          className="text-slate-500 size-5 cursor-pointer"
          title="fundamentals"
        />
      </span>

      <div className="flex md:gap-20 justify-between flex-wrap md:flex-nowrap">
        <div className="grid-row-5 grid grid-cols-1 max-w-md w-full font-semibold">
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            Price
            <span className="text-black text-right">
              ${coinMarketDetail[0]?.current_price}
            </span>{" "}
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            24h Low / 24h High
            <span className="text-black text-right">
              {` ${
                coinMarketDetail[0]?.low_24h
              } / ${coinMarketDetail[0]?.high_24h?.toFixed(2)} `}
            </span>{" "}
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            All Low / All High
            <span className="text-black text-right">
              $ ${coinMarketDetail[0]?.atl} / $ ${coinMarketDetail[0]?.ath}
            </span>
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            Trading Volume
            <span className="text-black text-right">
              ${formattedNum(coinMarketDetail[0]?.total_volume)}
            </span>
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            Market Cap Rank
            <span className="text-black text-right">
              #{coinMarketDetail[0]?.market_cap_rank}
            </span>{" "}
          </div>
        </div>
        <div className="grid-row-5 grid grid-cols-1 max-w-md w-full font-semibold">
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            Market Cap
            <span className="text-black text-right">
              ${formattedNum(coinMarketDetail[0]?.market_cap)}
            </span>
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            Market Cap Dominance
            <span className="text-black text-right">
              {(volumeIsToMarketCap * 120)?.toFixed(2)}%
            </span>
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between">
            Volume / Market Cap
            <span className="text-black text-right">{volumeIsToMarketCap}</span>
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between items-center">
            All Time High
            <span className="flex flex-col">
              <span className="text-black text-right flex justify-end gap-2">
                ${coinMarketDetail[0]?.ath}
                <span
                  className={clsx(
                    PositiveTrend(coinMarketDetail[0]?.ath_change_percentage)
                      ? "text-green-500"
                      : "text-red-500",
                  )}
                >
                  {coinMarketDetail[0]?.ath_change_percentage?.toFixed(2)}%
                </span>
              </span>
              <span className="text-black text-right text-xs">
                {formatDateAllTime(coinMarketDetail[0]?.ath_date)}
              </span>
            </span>
          </div>
          <div className="text-slate-600/80 text-sm py-3 border-b-slate-700/20 border-b-2 flex justify-between items-center">
            All TIme Low
            <span className="flex flex-col">
              <span className="text-black text-right flex justify-end gap-2">
                ${coinMarketDetail[0]?.atl}
                <span
                  className={clsx(
                    PositiveTrend(coinMarketDetail[0]?.atl_change_percentage)
                      ? "text-green-500"
                      : "text-red-500",
                  )}
                >
                  {coinMarketDetail[0]?.atl_change_percentage?.toFixed(2)}%
                </span>
              </span>
              <span className="text-black text-right text-xs">
                {formatDateAllTime(coinMarketDetail[0]?.atl_date)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fundamentals;
