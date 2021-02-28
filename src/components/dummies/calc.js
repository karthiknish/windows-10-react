/* React */
import React from "react";

/* Components */
import Window from "../windowWrapper/window";

/* Image */

import Calculator from "awesome-react-calculator";
const Calc = () => {
  return (
    <Window appName="Calculator">
      {/* <img src={imagePath} alt="calculator" draggable={false} /> */}
      <div style={{ width: "15rem", height: "24rem" }}>
        <Calculator />
      </div>
    </Window>
  );
};

export default Calc;
