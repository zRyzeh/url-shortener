import { WaveTopSVG } from "./components/WaveTopSVG";

export function Footer() {
  return (
    <footer>
      <WaveTopSVG />
      <section className="flex items-center justify-center w-screen h-20 md:h-28 bg-primary dark:bg-primary-dark">
        <p className="text-primary-dark dark:text-primary">Created with React and TailwindCSS</p>
      </section>
    </footer>
  )
}