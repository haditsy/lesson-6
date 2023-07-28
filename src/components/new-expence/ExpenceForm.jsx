import React, { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../../FormInput";
// import './ExpenseForm.css'
import { styled } from "styled-components";

const ExpenceForm = ({ onCloseForm, onAddNewExpence }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");


  const isFormValid = 
    title.trim().length !== 0 &&
    date.trim().length !== 0 &&
    amount.trim().length !== 0 


  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault()

    if(isFormValid){
      const expense ={
        date: new Date(date) , 
        title,
        amount: Number(amount),
        id: Date.now().toString(),
      }
      onAddNewExpence(expense);

      setTitle('')
      setAmount('')
      setDate('')
    }else{
      alert('Заполните все поля!')
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <StyledInputText
          className="input_text"
          onChange={titleChangeHandler}
          label={"Заголовок"}
          inputType="text"
          value={title}
        />
        <StyledInputNumber
          className="input_number"
          onChange={amountChangeHandler}
          label={"Количество"}
          inputType="number"
          value={amount}
        />
      </div>
      <StyledInputDate
        className="input_date"
        onChange={dateChangeHandler}
        label={"Датировать"}
        inputType="date"
        value={date}
      />
      <div className="buttons">
        <StyledButtonCancel className="button_cancel" type="button" onClick={onCloseForm}>
          Отмена
        </StyledButtonCancel>
        <Button disabled={!isFormValid}  className="button_add" type="submit">
          Добавить расход
        </Button>
      </div>
    </form>
  );
};

const StyledInputText = styled(FormInput)`
width: 340px;
height: 40px;
margin-top: 8px;
border-radius: 10px;
border: none;
margin-left: 40px;
`

const StyledInputNumber = styled(FormInput)`
width: 340px;
height: 40px;
margin-top: 8px;
border-radius: 10px;
border: none;
margin-left: 20px;
`

const StyledInputDate = styled(FormInput)`
width: 340px;
height: 40px;
margin-top: 8px;
border-radius: 10px;
border: none;
margin-left: 40px;
`

const StyledButtonCancel = styled('button')`
  margin-left: 450px;
`

export default ExpenceForm;
