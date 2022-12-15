import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }
        onAddExpense(expenseData);
        console.log(expenseData, 'This is expenseDataq')
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;