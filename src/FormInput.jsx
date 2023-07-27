import React from 'react'

const FormInput = ({ inputType= 'text', onChange, label, id, ...rest}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br></br>
      <input id={id} type={inputType} {...rest} onChange={onChange}></input>
    </div>
  )
}

export default FormInput
