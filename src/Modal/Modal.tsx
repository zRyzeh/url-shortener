import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../assets/icons/Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const mountElement = document.getElementById('modal')
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal || !mountElement) return

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      <div
        className={`absolute inset-0 bg-primary-dark dark:bg-primary transition-opacity duration-300 ${isOpen ? 'animate-fade-in opacity-20' : 'opacity-0'}`}
        onClick={onClose}
      ></div>
      <div className={`relative p-24 rounded-2xl bg-secondary dark:bg-secondary-dark z-[1000] transition-opacity duration-300 ${isOpen ? 'animate-fade-in' : 'opacity-0'}`}>
        <button
          className="p-1 absolute top-4 right-4 active:scale-95"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          <CloseIcon className="h-8 w-8 dark:fill-secondary" />
        </button>
        {children}
      </div>
    </div>,
    mountElement
  )
}
