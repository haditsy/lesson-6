import React from 'react'
import { styled } from 'styled-components'
// import './ExpensesFilter.css'

const ExpensesFilter = ({value, onChange}) => {
  return (
    <StyledExpenseFilter className='expenses-filter'>
        <StyledExpensesFilterControl  className='expenses-filter__control'>
            <StyledFilterByYear className='filter-by-year'>Filter by year</StyledFilterByYear>
            <StyledSelect className='select' value={value} onChange={onChange}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </StyledSelect>
        </StyledExpensesFilterControl>
    </StyledExpenseFilter>
  )
}

const StyledExpenseFilter = styled('div')`
  color: white;
    padding: 0 1rem;
`

const StyledExpensesFilterControl = styled('div')`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`

const StyledFilterByYear = styled('label')`
    color: white;
    font-size: 20px;
    font-weight: 600;
`

const StyledSelect = styled('select')`
    width: 100px;
    height: 40px;
    margin-right: 50px;
    font-weight: 700;
    text-align: center;
`

export default ExpensesFilter