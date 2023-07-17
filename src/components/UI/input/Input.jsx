import React from 'react'

const Input = ({type, ...rest}) => {
  return (
    <div>
      <input {...rest} type={type}></input>
    </div>
  )
}

export default Input
