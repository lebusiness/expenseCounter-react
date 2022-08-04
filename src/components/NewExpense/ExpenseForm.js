import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onCancel, onAddExpense }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const clearInputValue = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    onAddExpense({
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    });
    clearInputValue();
    onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Название</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Цена</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Дата</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
        <button type="submit">Добавить расход</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
