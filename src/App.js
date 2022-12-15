import React, { useState } from 'react';

import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/ExpenseFilter/ExpensesFilter';
import Card from './components/Card';

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filterValue, setFilterValue] = useState('2020');

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  
  const filterHandler = selectedFilter => {
    console.log(selectedFilter, 'This is selectedFilter')
    setFilterValue(selectedFilter);
    console.log(filterValue, 'This is the filter selected')
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <div className='Card'>
      <ExpensesFilter onFilterChange={filterHandler} selected={filterValue}/>
      {expenses.map(element => {
        return <Card>
          <ExpenseItem title={element.title} amount={element.amount} date={element.date}/>
          </Card>
      })}
      </div>
    </div>
  );
}

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default App;
