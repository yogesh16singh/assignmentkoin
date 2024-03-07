import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { H2 } from "../shared/Typography";
import { useContext } from "react";
import { CryptoCoinContext } from "../../context/CryptoCoinContext";
import clsx from "clsx";
import { PositiveTrend } from "../../utils";

const TrendingCarousel = () => {
  const { trendingCoins } = useContext(CryptoCoinContext);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pb-12">
        {" "}
        <H2 value="You May Also Like" />
        <Slider {...settings}>
          {trendingCoins.slice(0, 8).map((coin) => (
            <div
              key={coin.item.coin_id}
              className="bg-white border-2 border-slate-800/20 rounded-lg p-4 flex"
            >
              <div className="flex gap-1 items-center">
                <img src={coin.item.thumb} alt="symbol" className="size-5" />
                <div className="text-base font-bold pr-1 tracking-tight">
                  {coin.item.symbol}
                </div>
                <div
                  className={clsx(
                    "text-xs",
                    PositiveTrend(
                      coin.item.data.price_change_percentage_24h.usd,
                    )
                      ? "text-green-500 bg-green-200"
                      : "text-red-500 bg-red-200",
                  )}
                >
                  {PositiveTrend(coin.item.data.price_change_percentage_24h.usd)
                    ? "+"
                    : "-"}
                  {Math.abs(
                    coin.item.data.price_change_percentage_24h.usd,
                  ).toFixed(2) + "%"}
                </div>
              </div>
              <div
                className="text-lg font-semibold"
                dangerouslySetInnerHTML={{ __html: coin.item.data.price }}
              ></div>
              <img
                src={coin.item.data.sparkline}
                alt="svg"
                className="w-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      <H2 value="Trending Coins" />
      <Slider {...settings}>
        {trendingCoins.slice(9, trendingCoins.length - 1).map((coin) => (
          <div
            key={coin.item.coin_id}
            className="bg-white border-2 border-slate-800/20 rounded-lg p-4 flex"
          >
            <div className="flex gap-1 items-center">
              <img src={coin.item.thumb} alt="symbol" className="size-5" />
              <div className="text-base font-bold pr-1 tracking-tight">
                {coin.item.symbol}
              </div>
              <div
                className={clsx(
                  "text-xs",
                  PositiveTrend(coin.item.data.price_change_percentage_24h.usd)
                    ? "text-green-500 bg-green-200"
                    : "text-red-500 bg-red-200",
                )}
              >
                {PositiveTrend(coin.item.data.price_change_percentage_24h.usd)
                  ? "+"
                  : "-"}
                {Math.abs(
                  coin.item.data.price_change_percentage_24h.usd,
                ).toFixed(2) + "%"}
              </div>
            </div>
            <div
              className="text-lg font-semibold"
              dangerouslySetInnerHTML={{ __html: coin.item.data.price }}
            ></div>
            <img src={coin.item.data.sparkline} alt="svg" className="w-full" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TrendingCarousel;
