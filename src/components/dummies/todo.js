/* React */
import React from "react";

/* Components */
import Window from "../windowWrapper/window";

/* Image */
import imagePath from "../../img/dummyApps/dummy_todo.png";

const Todo = () => {
  return (
    <Window appName="Todo">
      <img src={imagePath} alt="todo" draggable={false} />
    </Window>
  );
};

export default Todo;
