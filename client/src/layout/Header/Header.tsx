import { Auth } from "@/auth/Auth"
import { useAuthContext } from "@/auth/contexts/AuthContext"
import { Logo } from "@/common/components/Logo"
import { Modal } from "@/common/components/Modal"
import { GitHubLink } from "@/layout/Header/components/GitHubLink"
import { HeaderButton } from "@/layout/Header/components/HeaderButton"
import { LightDarkButton } from "@/layout/Header/components/LightDarkButton"
import { MenuResponsiveButton } from "@/layout/Header/components/MenuResponsiveButton"
import { WaveBottomSVG } from "@/layout/Header/components/WaveBottomSVG"
import { useMenuContext } from "@/layout/Header/contexts/MenuContext"

export function Header() {
  const { isOpenModal, openSelectedModal, closeModal } = useAuthContext()
  const { isOpenMenu } = useMenuContext()

  return (
    <header>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Auth />
      </Modal>

      <section className="h-14 lg:h-24 w-screen bg-primary dark:bg-primary-dark px-5 lg:px-10 lg:pt-5 flex justify-between items-center">
        <Logo text="MiniLink" />
        <div className="flex items-center gap-7">
          <div className={`flex sm:gap-7 max-sm:absolute max-sm:flex-col left-0 transition-top duration-300 max-sm:w-screen max-sm:bg-primary
          max-sm:dark:bg-primary-dark max-sm:p-5 max-sm:z-[1000] ${isOpenMenu ? 'top-14' : '-top-32'}`}
          >
            <HeaderButton
              text="Login"
              onClick={() => openSelectedModal("Login")}
            />
            <HeaderButton
              text="Register"
              onClick={() => openSelectedModal("Register")}
            />
          </div>
          <div className="flex gap-1">
            <LightDarkButton />
            <GitHubLink />
          </div>
          <MenuResponsiveButton />
        </div>
      </section>

      <WaveBottomSVG />
    </header>
  )
}