import "./ExpenseItem.css";

const ExpenseItem = () => {
    const expenseDate = new Date(2022, 11, 22);
    const expenseHeader = 'Car Wash';
    const expensePrice = '350'
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseHeader}</h2>
        <div className="expense-item__price">INR {expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
