import TradingViewWidget from "../TradingViewWidget";
import { useContext } from "react";
import { CryptoCoinContext } from "../../context/CryptoCoinContext";
const Hero = () => {
  const { coinMarketDetail } = useContext(CryptoCoinContext);

  return (
    <section className="p-6 rounded-lg shadow-lg bg-white lg:w-4/5 w-full mb-4 h-[464px]">
      <TradingViewWidget coin_id={coinMarketDetail[0]?.symbol.toUpperCase()} />
    </section>
  );
};

export default Hero;
