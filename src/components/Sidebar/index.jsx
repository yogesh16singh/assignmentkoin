import sidebarImage from "../../assets/Tax-rafiki.png";
import { FaArrowRightLong } from "react-icons/fa6";
import TrendingSidebar from "./TrendingSidebar";

const Sidebar = () => {
  return (
    <aside className="lg:absolute top-32 right-8 lg:w-1/5 px-4 my-4 md:hidden lg:block lg:px-0 lg:my-0">
      <div className="bg-[#0052fe] text-white px-6 py-10 flex flex-col items-center gap-3 max-w-sm rounded-lg ">
        <h2 className="text-center text-xl font-bold leading-9">
          Get Started with KoinX <br /> for FREE
        </h2>
        <p className="text-xs text-center font-light leading-6">
          Create an account and start trading cryptocurrency today. We offer a
          simple and secure platform to trade Bitcoin, Ethereum, and more. Pay
          your taxes.
        </p>
        <img src={sidebarImage} alt="Tax Calculator" className="w-36" />
        <button className="bg-white text-black px-4 py-3 rounded-lg font-bold lg:text-sm md:text-xs text-sm  flex items-center gap-2 shadow-md shadow-blue-700">
          Get Started for FREE <FaArrowRightLong />
        </button>
      </div>
      <TrendingSidebar />
    </aside>
  );
};

export default Sidebar;
