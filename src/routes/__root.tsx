import '../index.css'
import '../App.css'

import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <header>
          <nav className='p-2 flex gap-2 absolute top-0 left-0 w-full border-b-2 border-white'>
            <Link to='/' className='[&.active]:text-amber-500'>
              Home
            </Link>{' '}
            <Link to='/about' className='[&.active]:text-amber-500'>
              About
            </Link>
          </nav>
        </header>
        <div className='mt-16'>
          <Outlet />
        </div>
        <footer className='text-gray-500'>
          <p>
            &copy; {new Date().getFullYear()} Bubble Wrap Stress Reducer |
            Created by{' '}
            <a
              href='https://anakagung.com'
              className='text-gray-400 hover:text-amber-600'
              target='_blank'
              rel='noreferrer'
            >
              Abraham
            </a>
          </p>
          <p>If you like this app, please consider a donation below.</p>
          <div className='h-20 flex items-center justify-center'>
            <a
              href='https://ko-fi.com/abraham_agung'
              className='text-gray-400 hover:text-amber-600'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='bg-contain h-8'
                src='https://storage.ko-fi.com/cdn/fullLogoKofi.png'
                alt='Ko-Fi'
              />
            </a>
          </div>
        </footer>
      </>
    )
  },
})
