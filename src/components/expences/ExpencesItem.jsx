import React from 'react'
import Card from '../UI/card/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


const ExpencesItem = ({date, title, amount, onDeleteExpense, id}) => {
  return (
    <Card className='expense-item'>
        <ExpenseDate date={date}/>
        <div className='expense-item__description'> 
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>{''}
            <button style={{marginLeft: '1rem', border: '1px solid white'}} onClick={() => {onDeleteExpense(id)}}>Delete</button>
        </div>
    </Card>
  )
}

export default ExpencesItem
