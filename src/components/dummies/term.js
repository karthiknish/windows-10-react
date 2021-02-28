import Window from "../windowWrapper/window";
import Terminal from "terminal-in-react";

const Term = () => {
  return (
    <Window appName="Terminal">
      <div style={{ width: "35rem", height: "14rem" }}>
        <Terminal
          style={{ width: "35rem", height: "10rem" }}
          hideTopBar="true"
          color="white"
        />
      </div>
    </Window>
  );
};

export default Term;
