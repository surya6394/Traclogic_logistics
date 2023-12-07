import React from 'react'

const Button = (props) => {
  return (
    <button className="ring-2 ring-teal1 hover:ring-teal-400 hover:bg-teal-400 duration-500 rounded-full px-6 py-1.5 bg-teal1 text-white font-bold">
      {props.children}
    </button>
  )
}

export default Button