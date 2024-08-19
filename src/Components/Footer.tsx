export function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary-dark">
      <svg className="w-full h-auto" viewBox="0 -10 1440 64" xmlns="http://www.w3.org/2000/svg">
        <path className="stroke-tertiary dark:stroke-tertiary-dark stroke-[3] motion-safe:stroke-dasharray-1000 motion-safe:stroke-dashoffset-2000 motion-safe:animate-neon-stroke-reverse filter drop-shadow-neon fill-transparent" d="M0,5L48,11C96,17,192,27,288,29C384,31,480,26,576,18C672,10,768,-1,864,3C960,6,1056,19,1152,22C1248,26,1344,18,1392,11L1440,5" />
        <path className="fill-primary dark:fill-primary-dark" fill="#13151A" d="M0,5L48,11C96,17,192,27,288,29C384,31,480,26,576,18C672,10,768,-1,864,3C960,6,1056,19,1152,22C1248,26,1344,18,1392,11L1440,5L1440,55L1392,55C1344,55,1248,55,1152,55C1056,55,960,55,864,55C768,55,672,55,576,55C480,55,384,55,288,55C192,55,96,55,48,55L0,55Z" />
      </svg>
      <section className="flex items-center justify-center w-screen h-28 bg-primary dark:bg-primary-dark">
        <p className="text-primary-dark dark:text-primary">Created with React and TailwindCSS</p>
      </section>
    </footer>
  )
}