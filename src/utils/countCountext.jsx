import { createContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

export const CountContext = createContext();

const CountProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <CountContext.Provider value={[state, dispatch]} {...props} />
    </>
  );
};

export default CountProvider;
