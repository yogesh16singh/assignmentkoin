import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdOutlineNewspaper } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div className="bg-blue-100 rounded-lg p-4 !flex !gap-4 flex-wrap">
        <MdOutlineNewspaper className="size-10 text-blue-100 rounded-full p-2 bg-blue-700 " />
        <div className="flex flex-col gap-2 md:max-w-sm max-w-xs">
          <h4 className="text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h4>
          <h4 className="text-xs font-regular leading-5">
            tempor incididunt ut labore et dolore magna aliqua. Ridiculusmus
            mauris vitae ultricies leo integer malesuada. Nulla facilisi cras
            fermentum odio eu feugiat pretium nibh ipsum. Morbi leo urna
            molestie at elementum eu. Pellentesque habitant morbi tristique
            senectus et. Elit eget gravida.
          </h4>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg p-4 !flex gap-4 flex-wrap">
        <MdAutoGraph className="size-10 text-green-100 rounded-full p-2 bg-green-700" />
        <div className="flex flex-col gap-2 md:max-w-sm max-w-xs">
          <h4 className="text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h4>
          <h4 className="text-xs font-regular leading-5">
            tempor incididunt ut labore et dolore magna aliqua. Ridiculusmus
            mauris vitae ultricies leo integer malesuada. Nulla facilisi cras
            fermentum odio eu feugiat pretium nibh ipsum. Morbi leo urna
            molestie at elementum eu. Pellentesque habitant morbi tristique
            senectus et. Elit eget gravida.
          </h4>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
