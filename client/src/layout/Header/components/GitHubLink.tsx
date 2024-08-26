import { GithubIcon } from "@/assets/icons/Icons";

export function GitHubLink() {
  return (
    <a
      className="group flex items-center justify-center w-12 h-12 rounded-full active:scale-90 hover:bg-secondary dark:hover:bg-secondary-dark"
      target="_blank"
      aria-label="Open on Github"
      href="https://github.com/zRyzeh/url-shortener"
    >
      <GithubIcon className="dark:fill-secondary" />
    </a>
  )
}