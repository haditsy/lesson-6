import React, { useState } from "react";
import ExpencesList from "./ExpencesList";
// import "./Expenses.css";
import Chart from "../chart/Chart";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import { styled } from "styled-components";

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
    <StyledExpences className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChange={yearChangeHandler}
      />
      <Chart items={filteredExpense}/>
      <ExpencesList
        expenses={filteredExpense}
        onDeleteExpense={onDeleteExpense}
      />
    </StyledExpences>
  );
};

const StyledExpences = styled('div')`
  width: 820px;
    min-height: 100px;
    background-color: #000000;
    border-radius: 12px;
    margin-left: 330px;
`

export default Expences;
