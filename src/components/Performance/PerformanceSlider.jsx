import { lerp } from "../../utils";
import { useState } from "react";
const PerformanceSlider = ({ low = 15115.15, high = 15845.12 }) => {
  const [sliderValue, setSliderValue] = useState(low);

  const left = (sliderValue / 100) * 94;

  const mappedValue = lerp(sliderValue, low, high);

  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-3xl relative h-2 w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className="slider w-full h-2 rounded-md"
      />
      <div
        style={{ left: `${left}%` }}
        className="text-base absolute top-9 font-semibold"
      >
        {mappedValue.toFixed(2)}
      </div>
    </div>
  );
};

export default PerformanceSlider;
