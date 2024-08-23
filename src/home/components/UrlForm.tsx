import { ArrowIcon } from "../../assets/icons/Icons";

export function UrlForm() {
  return (
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
  )
}