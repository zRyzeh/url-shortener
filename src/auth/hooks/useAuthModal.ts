import { useState } from "react";
import { useModal } from "../../common/hooks/useModal";
import { AuthType } from "../types/AuthType";

export function useAuthModal() {
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [authType, setAuthType] = useState<AuthType>("Login")

  const openSelectedModal = (authType: AuthType) => {
    setAuthType(authType)
    openModal()
  }

  const toggleAuthType = () => {
    setAuthType(prevAuth => prevAuth === "Login"
      ? "Register"
      : "Login")
  }

  return { isOpenModal, openSelectedModal, closeModal, authType, toggleAuthType }
}