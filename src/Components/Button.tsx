function Button({ text }: { text: string }) {
  return (
    <>
      <button
        type="button"
        className="bg-primary transition-colors rounded-full py-2 text-sm md:text-base lg:text-xl 2xl:text-2xl
        relative after:content-[''] after:h-[0.15rem] after:rounded-full after:w-0 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-yellow-500 after:duration-200 hover:after:w-full">
        {text}
      </button>

    </>

  )
}

export default Button