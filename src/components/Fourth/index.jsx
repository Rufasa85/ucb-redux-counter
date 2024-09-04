import React, { useContext } from "react";
import "./style.css";
import Fifth from "../Fifth";
import { CountContext } from "../../utils/countCountext";
const Fourth = () => {
  const [{ count }] = useContext(CountContext);
  return (
    <div className="Fourth">
      <h3>Fourth count:{count}</h3>
      <Fifth />
    </div>
  );
};

export default Fourth;
