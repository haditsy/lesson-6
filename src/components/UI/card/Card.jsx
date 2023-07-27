import React from 'react'
import './Card.css'
import { styled } from 'styled-components'

const Card = (props) => {
    const classes = 'card' + props.className
  return (
    <StyledCard className={classes}>
      {props.children}
    </StyledCard>
  )
}

const StyledCard = styled('div')`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  width: 765px; 
  background-color: #595757;
  min-height: 30px;
`

export default Card
