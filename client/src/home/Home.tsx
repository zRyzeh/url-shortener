import { BackgroundSpinner } from "@/home/components/BackgroundSpinner";
import { UrlForm } from "@/home/components/UrlForm";

export function Home() {
  return (
    <article className='relative flex flex-col gap-8 items-center justify-center'>
      <BackgroundSpinner />
      <h1 className='text-xl sm:text-2xl md:text-4xl z-10 font-bold text-center text-primary-dark dark:text-primary motion-safe:animate-title motion-safe:opacity-0'>
        Shorten your URLs quickly and easily
      </h1>
      <UrlForm />
    </article>
  )
}