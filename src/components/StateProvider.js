import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

// used to create a context where all the data will be stored and passed on to other components
export const StateContext = createContext();

// this is how we pass data of the current context
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
