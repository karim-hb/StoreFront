import React from "react";
import Carts from "./carts";
import { Grid } from "@mui/material";
import Filters from "./filters";
const Resturant = () => {
  return (
    <div className="container mt-10 mx-auto">
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 2 }}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Filters />
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12}>
          <div className="flex w-full mb-7 justify-end items-center">
            <div className="border-[1px] border-gray-200 rounded-lg w-[200px] h-[45px] flex items-center justify-between py-3 px-2 hover:border-gray-400">
              <span className="text-md text-gray-500">به ترتیب پیش فرض</span>
              <div className="flex">
                <span className="w-[1px] h-7 bg-gray-400"></span>
                <span className="material-icons-outlined text-lg mt-[6px]">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
          <Grid container rowSpacing={3} columnSpacing={{ md: 3, lg: 3 }}>
            {Array.from(Array(13).keys()).map((item, index) => (
              <Grid item key={index} lg={4} md={6} sm={6} xs={12}>
                <Carts />
              </Grid>
            ))}
          </Grid> 
        </Grid>
      </Grid>
    </div>
  );
};

export default Resturant;
