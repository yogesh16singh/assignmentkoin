import PieSVG from "../../assets/chart.png";
import { H2, H3 } from "../shared/Typography";

const Tokenomics = () => {
  return (
    <section
      className="p-6 rounded-lg shadow-lg bg-white lg:w-4/5 w-full my-4"
      id="tokenomics"
    >
      <H2 value="Tokenomics" />
      <H3 value="Intial Distribution" />
      <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
        <img src={PieSVG} alt="Donut-Chart" className="w-36" />
        <div className="flex flex-col md:gap-2 font-semibold">
          <span className="flex items-center gap-3 text-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>Crowdsale
            investor: 80%
          </span>
          <span className="flex items-center gap-3 text-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Foundation: 20%
          </span>
        </div>
      </div>

      <p className="text-sm py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex flex-col gap-4"></div>
    </section>
  );
};

export default Tokenomics;
