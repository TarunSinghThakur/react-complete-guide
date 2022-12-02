import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/Card';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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

  return (
    <div className="App">
      <NewExpense/>
      {expenses.map(element => {
        return <Card><ExpenseItem title={element.title} amount={element.amount} date={element.date}/></Card>
      })}
    </div>
  );
}

export default App;
