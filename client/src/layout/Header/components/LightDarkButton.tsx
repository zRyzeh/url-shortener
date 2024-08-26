import { useEffect, useState } from "react";

export function LightDarkButton() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "ligth"
  })

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "ligth" ? "dark" : "ligth")
  }

  return (
    <button onClick={handleChangeTheme} aria-label="Use light or dark mode" type="button" className="flex items-center justify-center w-12 h-12 rounded-full active:scale-95 hover:bg-secondary dark:hover:bg-secondary-dark">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <mask id="lineMdLightDarkLoop0">
            <circle cx={7.5} cy={7.5} r={5.5} fill="#fff"></circle><circle cx={7.5} cy={7.5} r={5.5}>
              <animate fill="freeze" attributeName="cx" dur="0.3s" values="7.5;11"></animate><animate fill="freeze" attributeName="r" dur="0.3s" values="5.5;6.5"></animate>
            </circle>
          </mask><mask id="lineMdLightDarkLoop1"><g fill="#fff"><circle cx={12} cy={9} r={5.5}><animate fill="freeze" attributeName="cy" begin="0.75s" dur="0.375s" values="9;15"></animate></circle><g><g fillOpacity={0}><use href="#lineMdLightDarkLoop2" transform="rotate(-125 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(-75 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(-25 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(25 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(75 12 15)"></use><set attributeName="fill-opacity" begin="1.125s" to={1}></set></g><animateTransform attributeName="transform" dur="3.75s" repeatCount="indefinite" type="rotate" values="0 12 15;50 12 15"></animateTransform></g></g><path d="M0 10h26v5h-26z"></path><path fill="none" stroke="#fff" strokeDasharray={26} strokeDashoffset={26} strokeLinecap="round" strokeWidth={2} d="M1 12h22"><animate attributeName="d" dur="4.5s" repeatCount="indefinite" values="M0 12h22;M2 12h22;M0 12h22"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.375s" dur="0.3s" values="26;52"></animate></path></mask><symbol id="lineMdLightDarkLoop2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.125s" dur="0.3s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"></animate></path></symbol>
        </defs>
        <g className="fill-primary-dark dark:fill-white" fill="currentColor">
          <rect width={13} height={13} x={1} y={1} mask="url(#lineMdLightDarkLoop0)"></rect><path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDarkLoop1)" transform="rotate(-45 12 12)"></path>
        </g>
      </svg>
    </button>
  )
}