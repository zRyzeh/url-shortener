import './App.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { ArrowIcon } from './assets/icons/Icons';

const App = () => {
  return (
    <section className='overflow-hidden grid grid-rows-[auto_1fr_auto] min-h-screen bg-secondary dark:bg-secondary-dark'>
      <Header />
      <article className='relative flex flex-col gap-8 items-center justify-center'>
        <div className='absolute flex items-center justify-center h-80 w-80 md:h-96 md:w-96 rounded-full bg-tertiary filter blur-xl motion-safe:animate-spin-slow'>
          <div className='bg-primary dark:bg-primary-dark w-[99%] h-[80%] rounded-full z-10'></div>
        </div>
        <h1 className='text-xl sm:text-2xl md:text-4xl z-10 font-bold text-center text-primary-dark dark:text-primary'>Shorten your URLs easily and reliably</h1>
        <form className='bg-secondary dark:bg-primary-dark drop-shadow-neon flex z-10 focus-within:border-primary-dark dark:focus-within:border-tertiary rounded-lg border-2 transition-colors duration-200 border-tertiary-dark'>
          <input
            className="rounded-l-lg bg-transparent px-4 py-3 outline-none w-72 md:w-80 text-primary-dark dark:text-primary"
            name="text"
            placeholder="Enter URL to shorten"
            type="url"
          />
          <button
            type="submit"
            aria-label="Send URL"
            className="rounded-r-lg text-primary-dark dark:text-primary px-3 md:px-6 py-3 text-base transition active:scale-90 hover:scale-125"
          >
            <ArrowIcon className='fill-tertiary-dark dark:fill-secondary' />
          </button>
        </form>
      </article>
      <Footer />
    </section>
  )
}

export default App;
