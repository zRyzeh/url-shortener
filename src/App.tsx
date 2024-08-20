import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer';

const App = () => {
  return (
    <section className='overflow-hidden grid grid-rows-[auto_1fr_auto] min-h-screen bg-secondary dark:bg-secondary-dark'>
      <Header />
      <article className='relative flex flex-col gap-8 items-center justify-center'>
        <div className='absolute flex items-center justify-center h-96 w-96 rounded-full bg-tertiary filter blur-xl motion-safe:animate-spin-slow'>
          <div className='bg-primary dark:bg-primary-dark w-[99%] h-[80%] rounded-full z-10'></div>
        </div>
        <h1 className='text-4xl z-10 font-bold text-center text-primary-dark dark:text-primary'>Shorten your URLs easily and reliably</h1>
        <form className='bg-secondary dark:bg-primary-dark drop-shadow-neon flex z-10 focus-within:border-primary-dark dark:focus-within:border-tertiary rounded-lg border-2 transition-colors duration-200 border-tertiary-dark'>
          <input
            className="rounded-l-lg bg-transparent px-4 py-3 outline-none w-80 text-primary-dark dark:text-primary"
            name="text"
            placeholder="Enter URL to shorten"
            type="url"
          />
          <button type="submit" aria-label="Send URL" className="rounded-r-lg text-primary-dark dark:text-primary px-6 py-3 text-base transition active:scale-90 hover:scale-125">
            <svg className='w-10 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16">
              <path className="fill-tertiary-dark dark:fill-secondary" d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34q.075.27 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z" />
            </svg>
          </button>
        </form>
      </article>
      <Footer />
    </section>
  )
}

export default App;
