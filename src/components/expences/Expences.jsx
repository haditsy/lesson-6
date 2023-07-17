import React from 'react'
import ExpencesList from './ExpencesList'
import './Expenses.css'
import Card from '../UI/card/Card'

const Expences = ({expenses = [], onDeleteExpense}) => {
  return (
    <Card className='expenses'>
      <ExpencesList onDeleteExpense={onDeleteExpense} expenses={expenses}/>
    </Card>
  )
}

export default Expences
