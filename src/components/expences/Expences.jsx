import React, { useState } from "react";
import ExpencesList from "./ExpencesList";
import "./Expenses.css";
// import Card from "../UI/car/Card";d
import Chart from "../chart/Chart";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";

const Expences = ({ expenses = [], onDeleteExpense }) => {
  const [selectedYear, setSelectedYear] = useState("");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredExpense = expenses.filter((expense) => {
    console.log(selectedYear);
    const stringifiedYear = expense.date.getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  console.log(filteredExpense);

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChange={yearChangeHandler}
      />
      <Chart items={filteredExpense}/>
      <ExpencesList
        expenses={filteredExpense}
        onDeleteExpense={onDeleteExpense}
      />
    </div>
  );
};

export default Expences;
