import Logo from "./Logo"
import Button from "../Button"

function Header() {
  return (
    <header className="w-screen bg-secondary">
      <section className="h-14 lg:h-24 w-screen bg-primary px-5 lg:px-10 lg:pt-5 flex justify-between items-center">
        <Logo text="URLshortener" />
        <div className="flex items-center gap-7">
          <Button text="Login" />
          <Button text="Register" />
        </div>
      </section>
      <svg width="100%" height="100%" viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg">
        <path fill="#13151A" fill-opacity="1" d="M0,50L48,44C96,38,192,28,288,26C384,24,480,29,576,37C672,45,768,56,864,53C960,50,1056,37,1152,34C1248,30,1344,38,1392,44L1440,50L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>


    </header>
  )
}

export default Header