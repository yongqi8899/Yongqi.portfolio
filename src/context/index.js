import { createContext, useContext } from "react";
import LocalisationProvider from "./LocalisationProvider";

const LocalisationContext = createContext();
const useLocalisation = () => {
  useContext(LocalisationContext);
  if (!LocalisationContext) {
    throw new Error("useLocalisation must be used within a LocalisationProvider");
  }
  return LocalisationContext;
};

export { LocalisationProvider, useLocalisation };