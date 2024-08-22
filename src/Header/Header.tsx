import { Logo } from "./components/Logo"
import { HeaderButton } from "./components/HeaderButton"
import { GitHubLink } from "./components/GitHubLink"
import { LightDarkButton } from "./components/LightDarkButton"
import { Modal } from "../Modal/Modal"
import { useModal } from "../common/hooks/useModal"
import { ModalAuthentication } from "../Modal/ModalAuthentication"
import { Authentication } from "../common/enums/Authentication"
import { CloseIcon, MenuIcon } from "../assets/icons/Icons"
import { useState } from "react"

export function Header() {
  const [isOpenLogin, openLogin, closeLogin] = useModal(false)
  const [isOpenRegister, openRegister, closeRegister] = useModal(false)
  const [isOpenMenu, setIsopenMenu] = useState(false)

  const handleChangeModal = (typeAuth: Authentication) => {
    let timer
    if (typeAuth === Authentication.Login) {
      closeLogin()
      timer = setTimeout(() => openRegister(), 300)
    } else {
      closeRegister()
      timer = setTimeout(() => openLogin(), 300)
    }
    return () => clearTimeout(timer)
  }

  const handleToggleMenu = () => {
    setIsopenMenu(!isOpenMenu)
    console.log(isOpenMenu)
  }

  return (
    <header>
      <Modal isOpen={isOpenLogin} onClose={closeLogin}>
        <ModalAuthentication
          typeAuthentication={Authentication.Login}
          onChange={() => handleChangeModal(Authentication.Login)}
        />
      </Modal>
      <Modal isOpen={isOpenRegister} onClose={closeRegister}>
        <ModalAuthentication
          typeAuthentication={Authentication.Register}
          onChange={() => handleChangeModal(Authentication.Register)}
        />
      </Modal>

      <section className="h-14 lg:h-24 w-screen bg-primary dark:bg-primary-dark px-5 lg:px-10 lg:pt-5 flex justify-between items-center">
        <Logo text="URLshortener" />
        <div className="flex items-center gap-7">
          <div className={`flex sm:gap-7 max-sm:absolute max-sm:flex-col left-0 transition-top duration-300 max-sm:w-screen max-sm:bg-primary max-sm:dark:bg-primary-dark max-sm:p-5 max-sm:z-[1000] ${isOpenMenu ? 'top-14' : '-top-32'}`}>
            <HeaderButton text="Login" onClick={() => openLogin()} />
            <HeaderButton text="Register" onClick={() => openRegister()} />
          </div>
          <div className="flex gap-1">
            <LightDarkButton />
            <GitHubLink />
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            className="sm:hidden"
            onClick={handleToggleMenu}
          >
            {
              isOpenMenu
                ? <CloseIcon className="h-7 w-7 dark:fill-secondary" />
                : <MenuIcon className="dark:fill-secondary h-7 w-7" />
            }
          </button>
        </div>
      </section>

      <svg
        className="w-full h-auto"
        viewBox="0 22 1440 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke-tertiary dark:stroke-tertiary-dark stroke-[3] motion-safe:stroke-dasharray-1000 motion-safe:stroke-dashoffset-2000 motion-safe:animate-neon-stroke filter drop-shadow-neon fill-transparent"
          d="M0,50L48,44C96,38,192,28,288,26C384,24,480,29,576,37C672,45,768,56,864,53C960,50,1056,37,1152,34C1248,30,1344,38,1392,44L1440,50"
        />
        <path
          className="fill-primary dark:fill-primary-dark"
          d="M0,50L48,44C96,38,192,28,288,26C384,24,480,29,576,37C672,45,768,56,864,53C960,50,1056,37,1152,34C1248,30,1344,38,1392,44L1440,50L1440,
            20L1392,20C1344,20,1248,20,1152,20C1056,20,960,20,864,20C768,20,672,20,576,20C480,20,384,20,288,20C192,20,96,20,48,20L0,20Z"
        />
      </svg>
    </header >
  )
}