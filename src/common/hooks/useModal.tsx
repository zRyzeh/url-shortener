import { useState } from "react";

type UseModalReturn = [boolean, () => void, () => void]

export function useModal(initialValue = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState(initialValue)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return [isOpen, openModal, closeModal]
}
