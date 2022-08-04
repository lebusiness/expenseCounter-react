import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = ({date}) => {
  const firstLetterToUpper = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }
  let month = firstLetterToUpper(date.toLocaleString('ru-RU', { month: 'long' }));
  const day = date.toLocaleString('ru-RU', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
