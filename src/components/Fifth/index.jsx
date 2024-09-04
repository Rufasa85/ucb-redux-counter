import React, { useContext } from "react";
import "./style.css";
import { CountContext } from "../../utils/countCountext";
import { RESET_COUNT } from "../../utils/actions";
const Fifth = () => {
  const [_state, dispatch] = useContext(CountContext);
  return (
    <div className="Fifth">
      <h3>Fifth</h3>
      <button onClick={() => dispatch({ type: RESET_COUNT })}>Reset</button>
    </div>
  );
};

export default Fifth;
