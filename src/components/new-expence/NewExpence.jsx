import React, { useState } from "react";
import Button from "../UI/button/Button";
import ExpenceForm from "./ExpenceForm";

const NewExpence = ({ onAddNewExpence }) => {
  const [isFormShow, setIsFormShow] = useState(false);

  const showFormHandler = () => {
    setIsFormShow(true);
  };

  const closeFormHandler = () => setIsFormShow(false);

  return (
    <div
      style={{
        background: "#AD9BE9",
        borderRadius: "10px",
        padding: "20px",
        width: "780px",
        marginLeft: "330px",
      }}
    >
      {isFormShow ? (
        <ExpenceForm
          onCloseForm={closeFormHandler}
          onAddNewExpence={onAddNewExpence}
        />
      ) : (
        <Button onClick={showFormHandler}>Добавить новый расход</Button>
      )}
    </div>
  );
};

export default NewExpence;
