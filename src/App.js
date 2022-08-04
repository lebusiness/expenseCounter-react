import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Микроволновка",
    amount: 5663.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e2",
    title: "Новый телевизор",
    amount: 14032.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Машинка для бритвы",
    amount: 5442.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Новый стол",
    amount: 8032,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </>
  );
};

export default App;
