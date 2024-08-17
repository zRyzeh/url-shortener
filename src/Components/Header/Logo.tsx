function Logo({ text }: { text: string }) {
  return (
    <h2 className="text-md md:text-2xl lg:text-3xl 2xl:text-4xl font-bold font">{text}</h2>
  )
}

export default Logo