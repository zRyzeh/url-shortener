interface ButtonProps {
  text: string,
  onClick: Function
}

export function HeaderButton({ text, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="text-primary-dark dark:text-white transition-colors rounded-full py-2 text-sm md:text-base lg:text-xl 2xl:text-2xl
        relative after:content-[''] after:h-[0.15rem] after:rounded-full after:w-0 after:absolute after:left-1/2 after:-translate-x-1/2 
        after:bottom-0 after:bg-tertiary after:duration-200 md:hover:after:w-full"
    >
      {text}
    </button>
  )
}