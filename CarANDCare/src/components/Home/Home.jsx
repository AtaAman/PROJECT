import React from "react";
import carfront1 from "../assets/carFront1.png";
import carside from "../assets/carSide.png";
import carwash from "../assets/carWash.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-around mt-5 pt-5">
        <div className="items-center  pt-5 mt-5 justify-center">
          <img src={carfront1} alt="" className="h-40 md:h-60 lg:h-80" />
        </div>

        <div className="flex flex-col flex-shrink  pt-5 mt-5 justify-center gap-7 items-start max-w-[50%]">
          <p className="lg:text-5xl md:text-3xl text-4xl font-semibold text-red-800">
            Hello Car Lovers
          </p>
          <p className="lg:text-2xl md:text-1xl text-1xl">
            Lorem ipsum dolor sit amet consectetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <button className="bg-orange-700 w-[100px] p-2 text-white rounded-3xl">
            <Link to='/contact'>
            Contact </Link>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 pt-5">
        <div className="flex flex-col flex-shrink  pt-5 mt-5 justify-center gap-7 items-start max-w-[50%]">
          <p className="lg:text-5xl lg:pl-10 md:pl-10 md:text-3xl text-4xl font-semibold text-red-800">
            Rent Cars
          </p>
          <p className="lg:text-2xl lg:pl-10 md:pl-10 md:text-1xl text-1xl">
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis, est!
          </p>
        </div>

        <div className="items-center justify-center">
          <img src={carside} alt="" className="h-40 md:h-60 lg:h-80" />
        </div>
      </div>

      <div className="flex flex-wrap flex-col items-center justify-around mt-5 pt-5">
        <div className="flex flex-col flex-shrink justify-center pt-5 mt-5 items-center">
          <p className="lg:text-5xl lg:pl-10 md:pl-10 md:text-3xl text-4xl font-semibold text-red-800">
            Car Wash
          </p>
        </div>

        <div className="flex flex-wrap items-center pt-5 mt-5 justify-center">
        <div className="items-center justify-center">
          <img src={carwash} alt="" className="h-100" />
        </div>
        </div>
      </div>
    </>
  );
}
