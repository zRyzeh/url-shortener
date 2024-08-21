import { SocialButtons } from './SocialButtons'
import { Authentication } from '../common/enums/Authentication'
import { InputWithLabel } from '../common/components/InputWithLabel'

export function ModalAuthentication({ typeAuthentication }: { typeAuthentication: Authentication }) {
  const auth = typeAuthentication === Authentication.Login ? 'Login' : 'Register'

  return (
    <form className="flex flex-col items-center gap-6">
      <h2 className="dark:text-secondary text-center text-4xl">{auth}</h2>
      {
        typeAuthentication == Authentication.Register &&
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
          typeAuthentication == Authentication.Login &&
          <p className="text-secondary underline hover:text-tertiary cursor-pointer text-end">
            Forgot your password?
          </p>
        }
      </div>
      <button
        className="w-80 bg-tertiary p-2 rounded-full text-secondary drop-shadow-neon hover:drop-shadow-none active:scale-y-95"
        type="submit"
      >
        Enter
      </button>
      <div>
        <p className="text-secondary">
          {typeAuthentication === Authentication.Login ? "Don't have an account? " : 'Already have an account? '}
          <span className="underline cursor-pointer hover:text-tertiary">
            {auth}
          </span>
        </p>
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="h-px w-full bg-slate-200"></div>
        <span className="text-white text-sm">OR</span>
        <div className="h-px w-full bg-slate-200"></div>
      </div>
      <SocialButtons />
    </form>
  )
}