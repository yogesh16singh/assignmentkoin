import { H2 } from "../shared/Typography";

const TrendingSidebar = () => {
  return (
    <div className="bg-white rounded-lg max-w-md p-4 my-2">
      <H2 value={"Trending Coins (24h)"} />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="flex gap-2 ">
            <img src="" alt="coin-1" className="h-5 w-5 object-contain" />
            <span className="text-sm uppercase font-semibold tracking-tight">
              Cine Coin
            </span>
          </span>
          <span className="bg-green-400 p-1 text-sm font-semibold rounded-md flex items-center justify-center text-green-800">
            2.76 %
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex gap-2 ">
            <img src="" alt="coin-1" className="h-5 w-5 object-contain" />
            <span className="text-sm uppercase font-semibold tracking-tight">
              Cine Coin
            </span>
          </span>
          <span className="bg-green-400 p-1 text-sm font-semibold rounded-md flex items-center justify-center text-green-800">
            2.76 %
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex gap-2 ">
            <img src="" alt="coin-1" className="h-5 w-5 object-contain" />
            <span className="text-sm uppercase font-semibold tracking-tight">
              Cine Coin
            </span>
          </span>
          <span className="bg-green-400 p-1 text-sm font-semibold rounded-md flex items-center justify-center text-green-800">
            2.76 %
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingSidebar;
