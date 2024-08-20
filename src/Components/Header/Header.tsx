import { Logo } from "./Logo"
import { HeaderButton } from "./HeaderButton"
import { GitHubLink } from "./GitHubLink "
import { LightDarkButton } from "./LightDarkButton"
import { useState } from "react"
import { ModalLogin } from "../Modal/ModalLogin"

export function Header() {
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenRegister, setIsOpenRegister] = useState(false)

  const handleClickLogin = () => {
    setIsOpenLogin(prevOpen => !prevOpen)
    console.log("openLogin")
  }

  const handleClickRegister = () => {
    setIsOpenRegister(prevOpen => !prevOpen)
  }

  return (
    <header>
      <ModalLogin isOpen={isOpenLogin} onClick={handleClickLogin} />
      <section className="h-14 lg:h-24 w-screen bg-primary dark:bg-primary-dark px-5 lg:px-10 lg:pt-5 flex justify-between items-center">
        <Logo text="URLshortener" />
        <div className="flex items-center gap-7">
          <HeaderButton text="Login" onClick={handleClickLogin} />
          <HeaderButton text="Register" onClick={handleClickRegister} />
          <div className="flex gap-1">
            <LightDarkButton />
            <GitHubLink />
          </div>
        </div>
      </section>
      <svg className="w-full h-auto" viewBox="0 20 1440 40" xmlns="http://www.w3.org/2000/svg">
        <path className="stroke-tertiary dark:stroke-tertiary-dark stroke-[3] motion-safe:stroke-dasharray-1000 motion-safe:stroke-dashoffset-2000 motion-safe:animate-neon-stroke filter drop-shadow-neon fill-transparent" d="M0,50L48,44C96,38,192,28,288,26C384,24,480,29,576,37C672,45,768,56,864,53C960,50,1056,37,1152,34C1248,30,1344,38,1392,44L1440,50" />
        <path className="fill-primary dark:fill-primary-dark" fill="#13151A" d="M0,50L48,44C96,38,192,28,288,26C384,24,480,29,576,37C672,45,768,56,864,53C960,50,1056,37,1152,34C1248,30,1344,38,1392,44L1440,50L1440,20L1392,20C1344,20,1248,20,1152,20C1056,20,960,20,864,20C768,20,672,20,576,20C480,20,384,20,288,20C192,20,96,20,48,20L0,20Z"></path>
      </svg>
    </header >
  )
}