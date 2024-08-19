export function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary-dark">
      <svg className="w-full h-auto rotate-180" viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-transparent dark:stroke-[#2B3040] dark:stroke-[3]" d="M0,50L48,44C96,38,192,28,288,26C384,24,480,29,576,37C672,45,768,56,864,53C960,50,1056,37,1152,34C1248,30,1344,38,1392,44L1440,50" />
        <path className="fill-primary dark:fill-primary-dark" fill="#13151A" d="M0,50L48,44C96,38,192,28,288,26C384,24,480,29,576,37C672,45,768,56,864,53C960,50,1056,37,1152,34C1248,30,1344,38,1392,44L1440,50L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <section className="flex items-center justify-center w-screen h-28 bg-primary dark:bg-primary-dark">
        <p className="text-primary-dark dark:text-primary">Creado con React y TailwindCSS</p>
      </section>
    </footer>
  )
}