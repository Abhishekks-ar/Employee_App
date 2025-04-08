import React from "react";
import Navbaradmin from "./Navbaradmin";

const Main2 = ({ child }) => {
  return (
    <div>
      <Navbaradmin />
      {child}
    </div>
  );
};

export default Main2;
