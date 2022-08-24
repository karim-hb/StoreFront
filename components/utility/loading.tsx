import React from "react";
import Box from "@mui/material/Box";
import styles from "./loading1.module.css";
const Loading1 = () => {
  return (
    <Box sx={{ position: "relative" , width: "100%", height: "100%"}}>
      <span style={{ visibility: "hidden" }}>loading ....</span>
      <a className={"btn btn--loading"}>
        <span>
          <b></b>
          <b></b>
          <b></b>
        </span>
      </a>
    </Box>
  );
};

export default Loading1;
