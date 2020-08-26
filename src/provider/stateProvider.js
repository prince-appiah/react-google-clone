import React, { createContext, useReducer, useContext } from "react";

// setting up data layer
export const StateContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// extracts data from the data layer --> using useStateValue anywhere in the app
export const useStateValue = () => useContext(StateContext);
