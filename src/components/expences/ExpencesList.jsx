import React from 'react'
import { styled } from 'styled-components'
import ExpencesItem from './ExpencesItem'
// import './ExpensesList.css'

const ExpencesList = ({expenses = [], onDeleteExpense}) => {

  // if(expenses.length === 0){
  //   return <h1 className='expenses-list__fallback'>No Expenses</h1>
  // }

  // return (
  //   <ul className='expenses-list'>
  //       {
  //           expenses.map((expense) => {
  //               return <ExpencesItem
  //               onDeleteExpense={onDeleteExpense}
  //                date={expense.date}
  //                title={expense.title}
  //                id={expense.id}
  //                amount={expense.amount}
  //               />
  //           })
  //       }
  //   </ul>
  // )


//   const content = 
//   expenses.length === 0 ? (
//     <h1 className='expenses-list__fallback'>No Expenses</h1>
//   ) : (
    // <ul className='expenses-list'>
    //      {
    //          expenses.map((expense) => {
    //              return <ExpencesItem
    //             onDeleteExpense={onDeleteExpense}
    //               date={expense.date}
    //               title={expense.title}
    //               id={expense.id}
    //               amount={expense.amount}
    //              />
    //          })
    //     }
    //  </ul>
//   )

//         return content
// }





return( 
  <div>
    {expenses.length === 0 && (
      <StyledListFallback className='expenses-list__fallback'>No Expenses</StyledListFallback>
    )}

    {expenses.length > 0 &&  (<StyledExpenseList className='expenses-list'>
         {
             expenses.map((expense, ) => {
                 return <ExpencesItem
                  onDeleteExpense={onDeleteExpense}
                  date={expense.date}
                  title={expense.title}
                  id={expense.id}
                  amount={expense.amount}
                 />
             })
        }
     </StyledExpenseList>)}
  </div>
)
}

const StyledExpenseList = styled('ul')`
    list-style: none;
    padding: 0;
`

const StyledListFallback = styled('h1')`
   color: white;
    text-align: center;
`

export default ExpencesList
