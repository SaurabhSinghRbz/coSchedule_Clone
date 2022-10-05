import { createContext, useState } from "react";

export const DayContext = createContext();

export const DayContextProvider = ({ children }) => {
  const [daysechdule, setDayschdule] = useState("");

  const [newproject, setNewproject] = useState();
  const [projectRefNo, setProjectrefNo] = useState("");
  return (
    <DayContext.Provider
      value={{
        daysechdule,
        setDayschdule,
        newproject,
        setNewproject,
        projectRefNo,
        setProjectrefNo,
      }}
    >
      {children}
    </DayContext.Provider>
  );
};
