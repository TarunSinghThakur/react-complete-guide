import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onFilterChange, selected }) => {
    const filterHandler = (event) => {
        console.log(event.target.value, 'This is value')
        onFilterChange(event.target.value)
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterHandler} value={selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;