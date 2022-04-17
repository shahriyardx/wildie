import React from 'react'

const Button = ({ className, onClick, ...props }) => {
  return (
    <button className={`px-4 py-3 font-semibold ${className}`} onClick={onClick} {...props}>
      {props.children}
    </button>
  )
}

export default Button