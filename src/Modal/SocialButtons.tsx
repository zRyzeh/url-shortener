import { GithubIcon, GoogleIcon } from "../assets/icons/Icons";

export function SocialButtons() {
  return (
    <>
      <div className="flex gap-2 items-center justify-center bg-primary w-80 py-2 rounded-full cursor-pointer active:scale-y-95 drop-shadow-md">
        <GoogleIcon className='h-6 w-6' />
        <span>Continue with Google</span>
      </div>
      <div className="flex gap-2 items-center justify-center bg-primary w-80 py-2 rounded-full cursor-pointer active:scale-y-95 drop-shadow-md ">
        <GithubIcon />
        <span>Continue with Github</span>
      </div>
    </>
  )
}