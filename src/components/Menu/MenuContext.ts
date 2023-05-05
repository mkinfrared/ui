import { ReactNode, createContext } from "react";

type MenuContextType<T> = {
  onClick?: (value: T | "", children: ReactNode) => void;
  currentValue?: T | "";
};

const MenuContext = createContext<MenuContextType<any>>({});

export { MenuContext };
