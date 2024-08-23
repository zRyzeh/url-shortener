import { createContext, useContext } from "react";
import { useAuthModal } from "../hooks/useAuthModal";
import { AuthType } from "../types/AuthType";

interface AuthContextProviderProps {
  children: React.ReactNode
}

type AuthContext = {
  isOpenModal: boolean,
  openSelectedModal: (authType: AuthType) => void,
  closeModal: () => void,
  authType: AuthType,
  toggleAuthType: () => void
}

export const AuthContext = createContext<AuthContext | null>(null)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const {
    isOpenModal,
    openSelectedModal,
    closeModal,
    authType,
    toggleAuthType
  } = useAuthModal()

  return (
    <AuthContext.Provider
      value={{
        isOpenModal,
        openSelectedModal,
        closeModal,
        authType,
        toggleAuthType
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      "useAuthContext must be used within a AuthContextProvider"
    )
  }
  return context
}