import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = ({expenses}) => {
  const chartDataPoints = [
    { label: 'Янв.', value: 0 },
    { label: 'Фев.', value: 0 },
    { label: 'Март', value: 0 },
    { label: 'Апр.', value: 0 },
    { label: 'Май', value: 0 },
    { label: 'Июн.', value: 0 },
    { label: 'Июл.', value: 0 },
    { label: 'Авг.', value: 0 },
    { label: 'Сент.', value: 0 },
    { label: 'Окт.', value: 0 },
    { label: 'Нояб.', value: 0 },
    { label: 'Дек.', value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
