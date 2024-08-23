import { createContext, useContext, useState } from "react";

interface MenuContextProviderProps {
  children: React.ReactNode
}

type MenuContext = {
  isOpenMenu: boolean
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuContext = createContext<MenuContext | null>(null);

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context
}