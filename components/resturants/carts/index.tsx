/* eslint-disable @next/next/no-img-element */
import React from "react";

const Carts = () => {
  return (
    <div className="foodcats hover:shadow-2xl">
      <div className="relative ">
        <img
          src="../12.jpg"
          alt="shop_banner"
          className="w-full h-[200px] rounded-t-md"
        />
        <div className="absolute right-1/2 translate-x-1/2 top-[150px] border-8 border-white rounded-lg shadow-md">
          <img
            src="../62cc4427f2dfe.jpg"
            alt="logo"
            className="w-20 h-20"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-14">
        <h5 className="text-lg font-bold	">شبدیر(قدس)</h5>
        <div className="flex mt-3">
          <span className="material-icons-outlined text-lg text-yellow-200">
            star
          </span>
          <span className="text-xs font-bold mr-1 ml-2">4.5</span>
          <span className="text-xs text-gray-400">(۳۱,۶۱۹ امتیاز)</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">
          فست‌فود، پیتزا، پیش غذا
        </span>
        <div className="flex shadow-md rounded-3xl p-3 mt-10 mb-5">
          <span className="material-icons-outlined">sports_motorsports</span>
          <span className="text-xs">ارسال اکسپرس</span>
          <span className="text-xs font-bold">14,000</span>
          <span className="text-xs">تومان</span>
        </div>
      </div>
    </div>
  );
};

export default Carts;
