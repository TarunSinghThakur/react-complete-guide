import React, { useState } from "react";

import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpensesFilter";
import ExpensesList from "./components/ExpenseFilter/ExpensesList";
import ExpensesChart from "./components/NewExpense/ExpensesChart";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filterValue, setFilterValue] = useState("2020");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterHandler = (selectedFilter) => {
    setFilterValue(selectedFilter);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterValue
  );

  console.log(filteredExpenses, 'This is filteredExpenses');

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="Card">
        <ExpensesFilter onFilterChange={filterHandler} selected={filterValue} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </div>
    </div>
  );
}

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default App;
