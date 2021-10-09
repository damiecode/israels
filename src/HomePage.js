import React from "react";
import Circle from "./assets/images/circle.png";
import Background from "./assets/images/bg_image.png";

const Home = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <div className="relative ml-10">
          <img src={Circle} alt="cirlce" className="w-3/4 image" />
          <div className="text-on-image">
            <h3 className="uppercase font-bold tracking-widest text-xl"><span>Cornerspace</span></h3>
          </div>
        </div>
        <div className="relative">
          <img src={Circle} alt="cirlce" className="w-3/4" />
          <div className="text-on-image">
            <h3 className="uppercase font-bold tracking-widest text-xl"><span>Boombox</span></h3>
          </div>
        </div>
        <div className="relative">
          <img src={Circle} alt="cirlce" className="w-3/4" />
          <div className="text-on-image">
            <h3 className="uppercase font-bold tracking-widest text-xl"><span>Cornerspace</span></h3>
          </div>
        </div>
      </div>
      <img src={Background} alt="bg" className="absolute inset-x-0 bottom-0" />
    </div>
  )
}

export default Home;