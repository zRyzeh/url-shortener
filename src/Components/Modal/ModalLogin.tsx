import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean,
  onClick: Function
}

export function ModalLogin({ isOpen, onClick }: ModalProps) {
  const mountElement = document.getElementById('overlays')
  if (!mountElement) return

  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen])

  return showModal && createPortal(
    <div className={`fixed inset-0 flex items-center justify-center z-[1000]`}>
      <div className={`absolute inset-0 bg-primary-dark dark:bg-primary transition-opacity duration-300 ${isOpen ? 'animate-fade-in opacity-20' : 'opacity-0'}`}></div>
      <div className={`relative p-24 rounded-2xl bg-secondary dark:bg-secondary-dark z-[1000] transition-opacity duration-300 ${isOpen ? 'animate-fade-in' : 'opacity-0'}`}>
        <button className='p-1 absolute top-4 right-4 active:scale-95' type='button' aria-label='Close modal' onClick={() => onClick()}>
          <svg className='h-8 w-8 dark:fill-secondary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="m14.41 3.27l-.82-.94L8 7.17L2.41 2.33l-.82.94L7.05 8l-5.46 4.73l.82.94L8 8.83l5.59 4.84l.82-.94L8.95 8z" />
          </svg>
        </button>
        <h2 className='dark:text-secondary text-center text-4xl mb-10'>Login</h2>
        <form className="flex flex-col items-center gap-5">
          <input
            className="rounded-lg dark:bg-primary-dark px-4 py-3 outline-none w-80 text-primary-dark dark:text-primary drop-shadow-neon focus:border-primary-dark dark:focus:border-tertiary border-2 transition-colors duration-200 border-tertiary-dark"
            name="text"
            placeholder="Email"
            type='email'
          />
          <div className='flex flex-col gap-3'>
            <input
              className="rounded-lg dark:bg-primary-dark px-4 py-3 outline-none w-80 text-primary-dark dark:text-primary drop-shadow-neon focus:border-primary-dark dark:focus:border-tertiary border-2 transition-colors duration-200 border-tertiary-dark"
              name="text"
              placeholder="Password"
              type='password'
            />
            <p className="text-secondary underline hover:text-tertiary cursor-pointer text-end">
              Forgot your password?
            </p>
          </div>
          <button className='w-80 bg-tertiary p-2 rounded-full text-secondary drop-shadow-neon hover:drop-shadow-none active:scale-y-95' type="submit">
            Enter
          </button>
          <div>
            <p className="text-secondary">
              Don't have an account? <span className="underline cursor-pointer hover:text-tertiary">Sign up</span>
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center bg-primary w-80 py-2 rounded-full cursor-pointer">
            <svg className="h-6 w-6" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	              C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	              c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <span>Log in with Google</span>
          </div>
          <div className="flex gap-2 items-center justify-center bg-primary w-80 py-2 rounded-full cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="dark:fill-primary-dark fill-white" d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"></path>
            </svg>
            <span>Log in with Github</span>
          </div>
        </form>
      </div >
    </div >,
    mountElement
  )
}
