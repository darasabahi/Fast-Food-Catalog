import { createContext, useState, useContext, useEffect } from "react";
import useAxios from "./useAxios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [, error] = useAxios("/FastFood/list");
  let ln = error !== "" ? "en" : "fn";
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage(ln);
  }, [ln]);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
