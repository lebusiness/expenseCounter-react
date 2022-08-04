import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
  const [isEditing, setIsEditing] = useState(false);

  const changeEditinStatus = () => {
    setIsEditing((prev) => !prev);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button
          onClick={changeEditinStatus} style={{margin: '0px'}}
        >
          Добавить новый расход
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddExpense={onAddExpense}
          onCancel={changeEditinStatus}
        />
      )}
    </div>
  );
};

export default NewExpense;
