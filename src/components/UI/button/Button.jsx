import React from 'react'
import './Button.css'

const Button = ({onClick, children, ...rest}) => {
  return (
    <div>
      <button className='first_button' onClick={onClick} {...rest} >{children}</button>
    </div>
  )
}

export default Button
