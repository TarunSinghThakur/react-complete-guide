import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>November 22, 2022</div>
      <div className="expense-item__description">
        <h2>Car Wash</h2>
        <div className="expense-item__price">INR 350</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
