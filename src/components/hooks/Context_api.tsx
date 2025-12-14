// hooks
import { createContext } from "react";

interface WindowContextType {
  stateWindow: string;
  setStateWindow: React.Dispatch<React.SetStateAction<string>>;
}

export const WindowContext = createContext<WindowContextType>({ stateWindow: "", setStateWindow: () => { } });