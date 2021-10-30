import React from "react";
import Circle from "./assets/images/circle.png";

const Home = () => {
  return (
    <div className="mt-5 md:mt-16">
      <div className="flex flex-col md:flex-row md:mt-36 ml-24 md:ml-0 md:justify-between">
        <div className="relative ml-0 md:ml-10">
          <img src={Circle} alt="cirlce" className="w-3/5 md:w-3/4 image" />
          <div className="text-on-image">
            <h3 className="uppercase font-bold tracking-widest text-xs sm:text-sm lg:text-xl -ml-8 sm:-ml-10 md:ml-0"><span>Cornerspace</span></h3>
          </div>
        </div>
        <div className="relative">
          <img src={Circle} alt="cirlce" className="w-3/5 md:w-3/4" />
          <div className="text-on-image">
            <h3 className="uppercase font-bold tracking-widest text-xs sm:text-sm lg:text-xl -ml-10 sm:-ml-12 md:ml-0"><span>Boombox</span></h3>
          </div>
        </div>
        <div className="relative">
          <img src={Circle} alt="cirlce" className="w-3/5 md:w-3/4" />
          <div className="text-on-image">
            <h3 className="uppercase font-bold tracking-widest text-xs sm:text-sm lg:text-xl -ml-8 sm:-ml-10 md:ml-0"><span>Cornerspace</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;