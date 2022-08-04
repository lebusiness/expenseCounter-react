import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const onChangeFilterHandler = (event) => {
    setFilteredYear(event.target.value);
  };
  const filteredItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onChangeFilter={onChangeFilterHandler} />
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
