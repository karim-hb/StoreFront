import React from "react";
import { Grid } from "@mui/material";
import ResturantInfo from "./resturantInfo";
import ResturantMenu from "./resturantMenu";
import CartInfo from "./cartInfo";
const ResturantDetails = () => {
  return (
    <div className="container mx-auto md:pt-20">
      {" "}
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 2 }}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <div className="w-full sticky top-[80px]">
            <ResturantInfo />
          </div>
        </Grid>
        <Grid item lg={6} md={8} sm={12} xs={12}>
          <ResturantMenu />
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <div className="w-full sticky top-[80px]">
            <CartInfo />{" "}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResturantDetails;
