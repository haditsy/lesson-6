import React from 'react'
import ExpencesItem from './ExpencesItem'
import './ExpensesList.css'

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
      <h1 className='expenses-list__fallback'>No Expenses</h1>
    )}

    {expenses.length > 0 &&  (<ul className='expenses-list'>
         {
             expenses.map((expense) => {
                 return <ExpencesItem
                onDeleteExpense={onDeleteExpense}
                  date={expense.date}
                  title={expense.title}
                  id={expense.id}
                  amount={expense.amount}
                 />
             })
        }
     </ul>)}
  </div>
)
}



export default ExpencesList
