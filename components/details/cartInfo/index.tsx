import { Collapse } from "@mui/material";
import React, { useState } from "react";

const CartInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="foodcats " style={{ height: "unset !important" }}>
        <div
          onClick={() => setOpen(!open)}
          className="flex py-3 px-2 justify-between cursor-pointer"
        >
          <div className="flex ">
            {open ? (
              <span className="material-icons-outlined text-xl ml-2">schedule</span>
            ) : (
              <span className="material-icons-outlined text-xl text-yellow-300  ml-2">
                {" "}
                bolt
              </span>
            )}

            <span className="text-xs">دریافت در سریع‌ترین زمان ممکن</span>
          </div>
          <span className="material-icons-outlined">expand_more</span>
        </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="flex justify-between p-4">
            <div className="flex">
              {" "}
              <div className="rounded-full flex item-center justify-center bg-green-500 py-1 px-1 ml-2">
                <span className="material-icons-outlined text-white">done</span>
              </div>
              <span className="text-sm font-bold">سریع ترین زمان ممکن</span>
            </div>

            <span className="material-icons-outlined text-xl text-yellow-300">
              bolt
            </span>
          </div>
        </Collapse>
      </div>
      <div className="foodcats mt-2" style={{ height: "unset !important" }}>
        <div className="flex p-4">
          <span className="material-icons-outlined text-xl">sports_motorsports</span>
          <span className="mr-2 text-xs">اسنپ‌اکسپرس</span>
          <span className="text-xs font-bold mr-1">20,000</span>
          <span className="text-xs mr-1">تومان</span>
        </div>
      </div>
    </>
  );
};

export default CartInfo;
