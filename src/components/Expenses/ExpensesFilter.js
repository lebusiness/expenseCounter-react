import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({onChangeFilter, filteredYear}) => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor="yearFilter">Фильтр по годам</label>
        <select value={filteredYear} id="yearFilter" onChange={onChangeFilter}>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
