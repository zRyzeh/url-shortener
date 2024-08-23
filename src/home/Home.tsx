import { BackgroundSpinner } from './components/BackgroundSpinner';
import { UrlForm } from './components/UrlForm';

export function Home() {
  return (
    <article className='relative flex flex-col gap-8 items-center justify-center'>
      <BackgroundSpinner />
      <h1 className='text-xl sm:text-2xl md:text-4xl z-10 font-bold text-center text-primary-dark dark:text-primary'>Shorten your URLs easily and reliably</h1>
      <UrlForm />
    </article>
  )
}