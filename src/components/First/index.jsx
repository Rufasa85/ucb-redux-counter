import React, { useContext } from "react";
import "./style.css";
import Second from "../Second";
import { CountContext } from "../../utils/countCountext";
const First = () => {
  const [{ count }] = useContext(CountContext);

  return (
    <div className="First">
      <h3>First count:{count}</h3>
      <Second />
    </div>
  );
};

export default First;
