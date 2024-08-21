interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  textLabel: string;
}

export function InputWithLabel({ htmlFor, textLabel, ...props }: InputWithLabelProps) {
  return (
    <>
      <label htmlFor={htmlFor} className="sr-only">{textLabel}</label>
      <input
        className="rounded-lg dark:bg-primary-dark px-4 py-3 outline-none w-80 text-primary-dark dark:text-primary drop-shadow-neon
        focus:border-primary-dark dark:focus:border-tertiary border-2 transition-colors duration-200 border-tertiary-dark"
        {...props}
      />
    </>
  )
}
