interface SeparatorProps {
  text?: string
}

export function Separator({ text }: SeparatorProps) {
  return (
    <div className={`flex w-full items-center ${text && "gap-2"}`}>
      <div className="h-px w-full bg-secondary-dark dark:bg-slate-200"></div>
      {
        text && <span className="text-secondary-dark dark:text-secondary text-sm">{text}</span>
      }
      <div className="h-px w-full bg-secondary-dark dark:bg-slate-200"></div>
    </div>
  )
}