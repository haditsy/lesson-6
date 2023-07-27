import React from 'react'
import { styled } from 'styled-components'

const Input = ({type, ...rest}) => {
  return (
    <div>
      <input {...rest} type={type}></input>
    </div>
  )
}
  const StyledInputText = styled('input')`
    width: 340px;
  height: 40px;
  margin-top: 8px;
  border-radius: 10px;
  border: none;
  margin-left: 40px;
  `
   const StyledInputNumber = styled('input')`
    width: 340px;
  height: 40px;
  margin-top: 8px;
  border-radius: 10px;
  border: none;
  margin-left: 20px;
 `
  const StyledInputDate = styled('input')`
  width: 340px;
  height: 40px;
  margin-top: 8px;
  border-radius: 10px;
  border: none;
  margin-left: 40px;
`
export default Input
