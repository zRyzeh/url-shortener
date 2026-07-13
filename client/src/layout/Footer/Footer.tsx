import { WaveTopSVG } from "@/layout/Footer/components/WaveTopSVG";
import { getCurrentYear } from "@/utils/date";

export function Footer() {
  return (
    <footer>
      <WaveTopSVG />
      <section className="flex items-center justify-center w-screen h-20 md:h-28 bg-primary dark:bg-primary-dark">
        <p className="text-primary-dark dark:text-primary">© {getCurrentYear()} URL Shortener. All rights reserved.</p>
      </section>
    </footer>
  )
}