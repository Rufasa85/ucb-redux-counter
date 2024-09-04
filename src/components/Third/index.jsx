import React, { useContext } from "react";
import "./style.css";
import Fourth from "../Fourth";
import { CountContext } from "../../utils/countCountext";
import { INCREMENT_COUNT } from "../../utils/actions";
const Third = () => {
  const [_state, dispatch] = useContext(CountContext);
  return (
    <div className="Third">
      <h3>Third</h3>
      <button onClick={() => dispatch({ type: INCREMENT_COUNT })}>
        Increment
      </button>
      <Fourth />
    </div>
  );
};

export default Third;
