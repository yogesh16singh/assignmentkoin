import Carousel from "../Carousel";
import { H2, H3 } from "../shared/Typography";
import { IoMdInformationCircle } from "react-icons/io";
const Sentiment = () => {
  return (
    <section className="p-6 rounded-lg shadow-lg bg-white max-w-5xl w-full my-4">
      <div>
        <H2 value={"Sentiment"} />
        <div className="flex items-center gap-2">
          <H3 value={`Key Events `} />
          <IoMdInformationCircle
            className="h-5 w-5 text-slate-500 cursor-pointer"
            title="Check Key Events"
          />
        </div>
        <Carousel />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <H3 value={`Analysts Estimate`} />
          <IoMdInformationCircle
            className="h-5 w-5 text-slate-500 cursor-pointer"
            title="Check Estimates"
          />
        </div>
        <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
          <div className="size-36 text-5xl font-medium flex items-center justify-center bg-green-100 text-green-600 rounded-full">
            76 <span className="text-lg">%</span>
          </div>

          <div className="flex flex-col gap-3 font-semibold w-full max-w-md">
            <div className="text-sm inline-flex items-center gap-4">
              <span className="opacity-70 w-8">Buy </span>
              <div className=" w-[76%] h-2 bg-green-600"></div> 76%
            </div>
            <div className="text-sm inline-flex items-center gap-4">
              <span className="opacity-70 w-8">Hold </span>
              <div className=" w-[8%] h-2 bg-slate-500"></div>8%
            </div>
            <div className="text-sm inline-flex items-center gap-4">
              <span className="opacity-70 w-8">Sell</span>
              <div className=" w-[16%] h-2 bg-red-600"></div> 16%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentiment;
