import React from "react";
import Header from "./header";

const Base = (props: any) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Base;
