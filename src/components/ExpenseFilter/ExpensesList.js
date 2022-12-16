import React from "react";

import Card from '../Card';
import ExpenseItem from '../ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {
    if(filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expense.</h2>
    };

    return (
    <ul>
        {filteredExpenses.map(element => {
            return <Card>
              <ExpenseItem
                key={element.id}
                title={element.title}
                amount={element.amount}
                date={element.date}/>
              </Card>
          })
        };
    </ul>
    )
}

export default ExpensesList;