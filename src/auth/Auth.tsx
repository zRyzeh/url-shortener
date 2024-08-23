import { SocialButtons } from './components/SocialButtons'
import { InputWithLabel } from '../common/components/InputWithLabel'
import { Separator } from './components/Separator'
import { useAuthContext } from './contexts/AuthContext'

const authTexts = {
  login: {
    question: "Don't have an account? ",
    action: "Register"
  },
  register: {
    question: "Already have an account? ",
    action: "Login"
  }
}

export function Auth() {
  const { authType, toggleAuthType } = useAuthContext()

  const { question, action } = authType === "Login"
    ? authTexts.login
    : authTexts.register

  return (
    <form className="flex flex-col items-center gap-6">
      <h2 className="dark:text-secondary text-center text-4xl">{authType}</h2>
      {
        authType === "Register" &&
        <InputWithLabel
          htmlFor='name'
          textLabel='Full name'
          placeholder='Full name'
          type="text"
          autoComplete='name'
          min={3}
          max={50}
          required
        />
      }
      <InputWithLabel
        htmlFor='email'
        textLabel='Email adress'
        name="email"
        placeholder="Email address"
        type="email"
        autoComplete='email'
        required
      />
      <div className="flex flex-col gap-3">
        <InputWithLabel
          htmlFor='password'
          textLabel='Password'
          name="password"
          placeholder="Password"
          type="password"
          min={8}
          max={50}
          required
        />
        {
          authType === "Login" &&
          <p className="dark:text-secondary underline hover:text-tertiary cursor-pointer text-end">
            Forgot your password?
          </p>
        }
      </div>
      <button
        className="w-80 bg-tertiary p-2 rounded-full text-secondary drop-shadow-neon hover:drop-shadow-none active:scale-y-95 transition"
        type="submit"
      >
        Enter
      </button>
      <p className="dark:text-secondary">
        {question}
        <span className="underline cursor-pointer hover:text-tertiary" onClick={toggleAuthType} >
          {action}
        </span>
      </p>
      <Separator text='OR' />
      <SocialButtons />
    </form>
  )
}