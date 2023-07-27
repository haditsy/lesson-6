import React from 'react'
import './Button.css'
import { styled } from 'styled-components'

const Button = ({onClick, children, ...rest}) => {
  return (
    <div>
      <StyledButtons className='first_button' onClick={onClick} {...rest} >{children}</StyledButtons>
    </div>
  )
}
const StyledButtons = styled('button')`
  height: 51px;
    padding: 16px 18px 16px 18px;
    border-radius: 10px;
    background: #4a026b;
    color: white;
    outline: none;
    border: none;
    &:disabled{
      background-color: grey;
      cursor: not-allowed;
    }
`
export default Button
