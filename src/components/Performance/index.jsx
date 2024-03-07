import { H2 } from "../shared/Typography";
import Fundamentals from "./Fundamentals";

const Performance = () => {
  return (
    <section
      className="p-6 rounded-lg shadow-lg bg-white max-w-5xl w-full my-4"
      id="fundamentals"
    >
      <H2 value="Performance" />

      <div className="flex justify-between items-center py-4">
        <div className="flex flex-col gap-1 items-center">
          <span className="text-sm">Today&apos;s Low</span>
          <span className="text-base font-semibold">15115.15</span>
        </div>

        <div className="max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-3xl w-full h-2 rounded-md  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

        <div className="flex flex-col gap-1 items-center">
          <span className="text-sm">Today&apos;s High</span>
          <span className="font-semibold text-base">15845.12</span>
        </div>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="flex flex-col gap-1 items-center">
          <span className="text-sm">52W Low</span>
          <span className="text-base font-semibold">15115.15</span>
        </div>

        <div className="max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-3xl w-full h-2 rounded-md  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

        <div className="flex flex-col gap-1 items-center">
          <span className="text-sm">52W High</span>
          <span className="font-semibold text-base">15845.12</span>
        </div>
      </div>

      <Fundamentals />
    </section>
  );
};

export default Performance;
