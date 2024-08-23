import { CloseIcon, MenuIcon } from "../../../assets/icons/Icons";
import { useMenuContext } from "../contexts/MenuContext";

export function MenuResponsiveButton() {
  const { isOpenMenu, setIsOpenMenu } = useMenuContext()

  const handleToggleMenu = () => {
    setIsOpenMenu(prevIsOpen => !prevIsOpen)
  }

  return (
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
  )
}