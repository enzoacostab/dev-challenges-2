import { createContext, Dispatch, SetStateAction } from "react";

export const context = createContext<{
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>> ;
}>({dark: false, setDark: () => null})
