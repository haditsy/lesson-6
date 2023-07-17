import './App.css';
import React, { useState } from "react";
import Expences from './components/expences/Expences';
import NewExpence from './components/new-expence/NewExpence';


const EXPENSES = [
  {
    id: 'e1',
    title: 'food', 
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'Playstation 5', 
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insuranse', 
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)', 
    amount: 450,
    date: new Date(2022, 5, 12),
  }
]




function App() {
  const [expenses, setExpenses] = useState(EXPENSES);


  const addNewExpensesHadler = (newExpense = {}) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense]
    })
  };

  const deleteExpenseByIdHandler = (id) => {
    const filteredExpense = expenses.filter((expense) => expense.id !== id) 
    setExpenses(filteredExpense)
  }



  return (
    <div className="App">
      <NewExpence onAddNewExpence={addNewExpensesHadler} />
      <Expences expenses={expenses}  onDeleteExpense={deleteExpenseByIdHandler}/>
    </div>
  );
}

export default App;
