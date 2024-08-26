import { UrlIcon } from "@/assets/icons/Icons";

export function Logo({ text }: { text: string }) {
  return (
    <div className="flex items-center just gap-3">
      <UrlIcon className="w-4 md:w-5 lg:w-6 2xl:w-8 dark:fill-secondary fill-primary-dark" />
      <h2 className="text-md md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-primary-dark dark:text-white">{text}</h2>
    </div>
  )
}