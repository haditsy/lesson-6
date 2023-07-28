import React from 'react'
// import './ExpenseDate.css'
import { styled } from 'styled-components'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-Us', {month: 'long'})
    const day = props.date.toLocaleString('en-Us', {day: '2-digit'})
    const year = props.date.getFullYear()
  return (
    <StyledExpenseDate className='expense-date'>
        <StyledMonths className='expense-date__month'>{month}</StyledMonths>
        <StyledYear className='expense-date__year'>{year}</StyledYear>
        <StyledDay className='expense-date__day'>{day}</StyledDay>
    </StyledExpenseDate>
  )
}

const StyledExpenseDate = styled('div')`
  display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    border-radius: 12px;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 12px;
    margin-left: 16px;
`
const StyledMonths = styled('div')`
    font-size: 0.75rem;
    font-weight: bold;
`

const StyledYear = styled('div')`
   font-size: 0.75rem;
`

const StyledDay = styled('div')`
    font-size: 1.5rem;
    font-weight: bold;
`

export default ExpenseDate