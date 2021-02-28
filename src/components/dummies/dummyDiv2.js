import React from "react";
import Window from "../windowWrapper/window";

const DummyDiv2 = () => {
  return (
    <Window appName="This is a fake application">
      <div
        style={{
          border: "solid",
          borderColor: "white",
          width: "600px",
          height: "500px",
          textAlign: "center",
          lineHeight: "500px",
        }}
      >
        <span style={{ color: "white", fontSize: "5em" }}>MÁSIK</span>
      </div>
    </Window>
  );
};

export default DummyDiv2;
