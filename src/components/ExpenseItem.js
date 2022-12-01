import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';

const ExpenseItem = ({ title, amount, date }) => {
  const [myTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("I am updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{myTitle}</h2>
        <div className="expense-item__price">INR {amount}</div>
      </div>
      <button onClick={clickHandler}>ClickMe</button>
    </Card>
  );
};

export default ExpenseItem;
