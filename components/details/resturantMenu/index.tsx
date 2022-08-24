/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import React from "react";

const ResturantMenu = () => {
  return (
    <>
      <div className="border-[1px] border-gray-200 rounded-md bg-white">
        {Array.from(Array(5).keys()).map((item, index) => (
          <div key={index}>
            <div className="w-full py-4 border-b border-gray-200">
              <h5 className="text-md text-gray-700 text-center" >
                پر‌طرفدارها
              </h5>
            </div>

            <Grid container rowSpacing={0} columnSpacing={{ md: 0 }}>
              {Array.from(Array(5).keys()).map((item, i) => (
                <Grid
                  className={`${
                    i % 2 === 0
                      ? "border-l border-b  border-gray-200"
                      : " border-b  border-gray-200"
                  }`}
                  key={i}
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <div className="p-3">
                    <div className="flex justify-between align-center">
                      <div className="flex flex-col mt-6">
                        <span className="text-md font-bold text-gray-700">
                          لاته
                        </span>
                        <span className="text-xs mt-1 text-gray-500">
                          ۳۶۰ میلی لیتر، اسپرسو سینگل، شیر
                        </span>
                      </div>
                      <img
                        src="../62f640f8ec5f5.jpg"
                        alt="late"
                        className="h-[112px] w-[112px] rounded-lg"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center">
                        <span className="text-xs font-bold">200,222</span>
                        <span className="text-xs mr-1 text-gray-500">
                          تومان
                        </span>
                      </div>
                      <button className="mainShadow text-sm  hover:bg-[#ff00a6] hover:text-white w-[110px] text-[#ff00a6]  py-2 px-4 rounded-3xl">
                        افزودن
                      </button>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResturantMenu;
