import { IoMdInformationCircle } from "react-icons/io";
import { H3 } from "../shared/Typography";

const Fundamentals = () => {
  return (
    <>
      <span className="inline-flex items-center gap-2">
        <H3 value="Fundamentals" />{" "}
        <IoMdInformationCircle
          className="text-slate-500 size-5 cursor-pointer"
          title="fundamentals"
        />
      </span>

      <div className="flex md:gap-20 justify-between flex-wrap md:flex-nowrap">
        <div className="grid-row-5 grid grid-cols-1 max-w-md w-full font-semibold">
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            Price
            <span className="text-black text-right">$16815.49</span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            24h Low / 24h High
            <span className="text-black text-right">$16815.49 / $16815.49</span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            7d Low / 7d High
            <span className="text-black text-right">$16325.49 / $16415.49</span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            Trading Volume
            <span className="text-black text-right"> $23,249,202,782</span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            Market Cap Rank
            <span className="text-black text-right"> #1</span>
          </div>
        </div>
        <div className="grid-row-5 grid grid-cols-1 max-w-md w-full font-semibold">
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            Market Cap Rank
            <span className="text-black text-right"> $323,249,202,782</span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            Market Cap Dominance
            <span className="text-black text-right"> 38.343%</span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between">
            Volume / Market Cap
            <span className="text-black text-right"> 0.0718</span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between items-center">
            All Time High
            <span className="flex flex-col">
              <span className="text-black text-right flex justify-end gap-2">
                $69,844.77 <span className="text-red-600">-75.6%</span>
              </span>
              <span className="text-black text-right text-xs">
                Nov 10,2021 (about 1 year)
              </span>
            </span>
          </div>
          <div className="text-slate-600/80 text-sm py-4 border-b-slate-700/20 border-b-2 flex justify-between items-center">
            All TIme Low{" "}
            <span className="flex flex-col">
              <span className="text-black text-right flex justify-end gap-2">
                $63.84<span className="text-green-600">1455.6%</span>
              </span>
              <span className="text-black text-right text-xs">
                Jul 06,2013 (over 9 years)
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fundamentals;
