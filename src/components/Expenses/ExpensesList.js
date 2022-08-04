import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({items, filterValue}) => {
  if (!items.length) {
    return <h2 className='expenses-list__fallback'>Трат не найдено.</h2>;
  }
  return (
    <ul className='expenses-list'>
      {items.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
