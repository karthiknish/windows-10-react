/* React */
import React, { useState } from "react";

/* Components */
import Window from "../windowWrapper/window";
import "react-minesweeper/lib/minesweeper.css";
/* Image */
import Minesweeper from "react-minesweeper";
import Calculator from "awesome-react-calculator";
const Mine = () => {
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  return (
    <Window appName="Mine">
      {/* <img src={imagePath} alt="calculator" draggable={false} /> */}
      <div style={{ width: "25rem", height: "22rem" }}>
        {win ? (
          <h1
            style={{
              textAlign: "center",
              color: "red",
              backgroundColor: "white",
            }}
          >
            You Won
          </h1>
        ) : (
          <Minesweeper
            onWin={() => setWin(true)}
            onLose={() => setLose(true)}
            bombChance={0.15} // 15% chance that a field will contain a bomb
            width={10} // amount of fields horizontally
            height={10} // amount of fields vertically
          />
        )}
      </div>
    </Window>
  );
};

export default Mine;
