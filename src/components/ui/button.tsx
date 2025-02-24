import React from 'react'

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className='border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
