import React from "react";
import Card from "../UI/card/Card";
import ExpenseDate from "./ExpenseDate";
// import './ExpenseItem.css'
import { styled } from "styled-components";
import { useState } from "react";
import Modal from "../UI/modal/Modal";
import ReactDOM from "react-dom";

const ExpencesItem = ({ date, title, amount, onDeleteExpense, id }) => {
  const [isModalVisiable, setModalVisiable] = useState(false);

  const toggleModalVisiabilityHandler = () => {
    setModalVisiable((prevState) => !prevState);
  };
  return (
    <>
      <StyledExpenseItem className="expense-item">
        <ExpenseDate date={date} />
        <StyledItemDescription className="expense-item__description">
          <StyledTitle>{title}</StyledTitle>
          <StyledItemPrice className="expense-item__price">
            ${amount}
          </StyledItemPrice>
          {""}
          <button
            style={{ marginLeft: "1rem", border: "1px solid white" }}
            onClick={toggleModalVisiabilityHandler}
          >
            Delete
          </button>
        </StyledItemDescription>
      </StyledExpenseItem>
      {isModalVisiable
        ? ReactDOM.createPortal(
            <Modal
              onClose={toggleModalVisiabilityHandler}
              onConfirm={() => onDeleteExpense(id)}
            />,
            document.getElementById("modal")
          )
        : null}
    </>
  );
};

const StyledExpenseItem = styled(Card)`
  margin-left: 16px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #4b4b4b;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 15px;
  width: 748px;
  height: 104px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledItemDescription = styled("div")`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  display: flex;
  margin-left: 14px;
`;
const StyledItemPrice = styled("div")`
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  margin-left: 250px;
  min-width: 50px;
`;

const StyledTitle = styled("h2")`
  font-size: 1.25rem;
  color: white;
`;
export default ExpencesItem;
