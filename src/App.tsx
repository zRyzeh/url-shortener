import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer';

const App = () => {
  return (
    <section className='overflow-hidden grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <Header />
      <article className='flex flex-col gap-8 items-center justify-center bg-secondary dark:bg-secondary-dark'>
        <h1 className='text-4xl font-bold text-center text-primary-dark dark:text-primary'>Shorten your URLs easily and reliably</h1>
        <form className='flex dark:focus-within:border-[#596A95] focus-within:border-primary-dark rounded-lg border-2 transition-colors duration-200 border-primary dark:border-[#2B3040]'>
          <input
            className="bg-secondary rounded-l-lg dark:bg-primary-dark px-4 py-3 outline-none w-80 text-primary-dark dark:text-primary   "
            name="text"
            placeholder="Enter URL to shorten"
            type="url"
          />
          <button type="submit" aria-label="Send URL" className="rounded-r-lg text-primary-dark dark:text-primary px-6 py-3 text-base transition">
            <svg className='w-10 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16">
              <path fill="currentColor" d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34q.075.27 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z" />
            </svg>
          </button>

        </form>
      </article>
      <Footer />
    </section>
  )
}

export default App;
