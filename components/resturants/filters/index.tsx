/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Filters = () => {
  const [filter, setFilter] = useState<any>({ classPrice: 0 });
  return (
    <div className="md:mt-[73px] md:top-[9npm3px] w-full md:sticky ">
      <div className="foodcats" style={{ padding: "15px" }}>
        <div className="bg-gray-200 rounded-md p-4">
          <span className="text-lg font-bold"> همه دسته بندی ها</span>
        </div>
        {Array.from(Array(5).keys()).map((item, index) => (
          <div key={index} className="flex items-center p-4">
            <img
              src="../pitza.png"
              alt="log0"
              className="w-8 h-8"
            />
            <span className="text-md mr-2">فست فود</span>
          </div>
        ))}
      </div>
      <div
        className="foodcats"
        style={{ padding: "15px", marginTop: "5px !important" }}
      >
        <span className="text-sm">کلاس قیمتی</span>
        <div className="flex mt-7 justify-between rounded-lg bg-gray-200 px-8 py-3 relative">
         {/*  <div
            className={`absolute top-1 right-0 bg-white w-16 h-9 rounded-lg z-0 transition ${
              filter?.classPrice === 0
                ? "translate-x-[-10px]"
                : filter?.classPrice === 1
                ? "-translate-x-[75px] "
                : filter?.classPrice === 2
                ? "-translate-x-[145px]"
                : "-translate-x-[205px]"
            } `}
          ></div> */}
          <span
            onClick={() => setFilter({ ...filter, classPrice: 0 })}
            className={`text-sm relative z-10 ${
              filter?.classPrice === 0 ? "text-green-500" : ""
            }`}
          >
            همه{" "}
          </span>
          <span
            onClick={() => setFilter({ ...filter, classPrice: 1 })}
            className={`text-sm relative z-10 ${
              filter?.classPrice === 1 ? "text-green-500" : ""
            }`}
          >
            اقتصادی{" "}
          </span>
          <span
            onClick={() => setFilter({ ...filter, classPrice: 2 })}
            className={`text-sm relative z-10 ${
              filter?.classPrice === 2 ? "text-green-500" : ""
            }`}
          >
            متوسط{" "}
          </span>
          <span
            onClick={() => setFilter({ ...filter, classPrice: 3 })}
            className={`text-sm relative z-10 ${
              filter?.classPrice === 3 ? "text-green-500" : ""
            }`}
          >
            گران{" "}
          </span>
        </div>
      </div>
      <div className="foodcats mt-1"  style={{ padding: "15px"  }}>
        {Array.from(Array(3).keys()).map((item, index) => (
          <div key={item} className={`flex justify-between items-center py-3 ${index !== 2 ? " border-b-[1px] border-gray-200":""}`}>
            <span className="text-md">دارای کوپن</span>
            <Switch {...label} defaultChecked />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
