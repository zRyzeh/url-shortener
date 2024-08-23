export function BackgroundSpinner() {
  return (
    <div className='absolute flex items-center justify-center h-80 w-80 md:h-96 md:w-96 rounded-full bg-tertiary filter blur-xl motion-safe:animate-spin-slow'>
      <div className='bg-primary dark:bg-primary-dark w-[99%] h-[80%] rounded-full z-10'></div>
    </div>
  )
}