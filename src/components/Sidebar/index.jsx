import sidebarImage from "../../assets/Tax-rafiki.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="fixed top-20 right-8 max-w-md">
      <div className="bg-blue-600 text-white px-6 py-10 flex flex-col items-center gap-3 max-w-sm rounded-lg">
        <h2 className="text-center text-xl font-bold leading-9">
          Get Started with KoinX <br /> for FREE
        </h2>
        <p className="text-xs text-center font-light leading-6">
          Create an account and start trading cryptocurrency today. We offer a
          simple and secure platform to trade Bitcoin, Ethereum, and more. Pay
          your taxes.
        </p>
        <img src={sidebarImage} alt="Tax Calculator" className="w-48" />
        <button className="bg-white text-black px-4 py-2 mt-2 rounded-lg capitalize font-bold text-sm flex items-center gap-2 shadow-md shadow-blue-700">
          get started for FREE <FaArrowRightLong />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
