import React, { createContext, useState } from "react";
export const Ourcontext = createContext();
export const MyContent = ({ children }) => {
  const [first, setFirst] = useState(false);
  return (
    <Ourcontext.Provider value={first}>
      <h1> {children}</h1>
    </Ourcontext.Provider>
  );
};

export default MyContent;
