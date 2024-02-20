import React from "react";
import whiteCar from "../assets/carSide.png";
import car2 from "../assets/carFront1.png";
import car3 from "../assets/carFront2.png";
import carwash from "../assets/carWash.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
];

const Services = () => {
  return (
    <div>
      <div>
        <h1
          className="lg:text-5xl mt-10 md:text-3xl text-center text-4xl font-semibold text-red-800"
        >
          Car Rent Details
        </h1>
        <p className="text-xl text-center pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
      <div>
          <div className="flex flex-wrap gap-y-16 justify-around">
            {carList.map((data) => (
              <div className="h-[230px] w-[350px] border-2 bg-slate-200 border-gray-300 hover:border-primary p-3 rounded-xl group">
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[140px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary text-xl text-red-800 font-semibold">
                    {data.name}
                  </h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a
                      className="bg-orange-800 p-2 w-[80px] text-white text-[18px] rounded-3xl"
                      href="#"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col items-center justify-around mt-5 pt-5">
        <div className="flex flex-col flex-shrink justify-center pt-5 mt-5 items-center">
          <p className="lg:text-5xl lg:pl-10 md:pl-10 md:text-3xl text-4xl font-semibold text-red-800">
            Car Wash
          </p>
          <p className="text-xl text-center pt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
            nemo ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit consequatur nostrum, sit numquam repudiandae atque placeat
            dolores quia ea minus quam mollitia asperiores, adipisci laboriosam
            odio voluptate, in minima possimus.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <div className="items-center justify-center">
            <img src={carwash} alt="" className="h-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
